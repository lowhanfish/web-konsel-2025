"use client";

import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { MdExpandMore } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { DataRoute } from '@/config/DataRoute';
import Link from 'next/link';

// Simple Navbar with a minimal theme toggle.
// Keeps logic small so it's easy to read and maintain.

const NavbarDesktop = () => {

    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
    const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);

    const handleMouseEnter = (idx: number) => {
        if (DataRoute[idx].children && DataRoute[idx].children.length > 0) {
            setActiveMenuIndex(idx);
            setActiveChildIndex(null);
        }
    }

    const handleMouseLeave = () => {
        // Sembunyikan dropdown dengan mengatur state kembali ke null
        setActiveMenuIndex(null);
    };


    return (
        <div className="flex gap-3 h-16 items-center">

            {
                DataRoute.map((item, idx) => (

                    <div onMouseEnter={() => handleMouseEnter(idx)} onMouseLeave={handleMouseLeave} key={idx} className='relative h-full'>
                        <div className='flex gap-2 items-center cursor-pointer h-full hover:bg-accent hover:rounded-sm px-2'>
                            <p className='text-[13px] font-semibold'>{item.title}</p>
                            {item.children && item.children.length > 0 && (
                                <MdExpandMore className={`transition-transform duration-200 ${activeMenuIndex === idx ? 'rotate-180' : ''}`} />
                            )}
                        </div>

                        {/* children dropdown (hidden by default) */}
                        {item.children && (
                            <div className={`rounded-b-lg absolute top-full left-0 z-10 ${activeMenuIndex === idx ? 'block' : 'hidden'}`}
                                style={{ minWidth: '200px' }}
                            >
                                {item.children.map((child: any, cidx: number) => (
                                    <div key={cidx}>
                                        <Link href={child.url ?? '#'}>
                                            <div className="flex flex-wrap cursor-pointer " onClick={() => child.children ? setActiveChildIndex(prev => prev === cidx ? null : cidx) : undefined}>
                                                <div className="flex w-full bg-accent-soft border-[0.1px] border-accent px-2 py-3 hover:bg-accent">
                                                    <p className='flex-1 text-[12px] font-bold'> {child.title ?? '-'}</p>
                                                    {child.children && child.children.length > 0 && (
                                                        <MdExpandMore className={`transition-transform duration-200 ${activeChildIndex === cidx ? 'rotate-180' : ''}`} />
                                                    )}
                                                </div>
                                            </div>
                                        </Link>

                                        {/* sub nested - hidden block, toggled by click */}
                                        {child.children && (
                                            <div className={` border-[0.1px] border-accent ${activeChildIndex === cidx ? 'block' : 'hidden'}`}>
                                                <div className=' bg-background '>
                                                    {child.children.map((sc: any, sidx: number) => (
                                                        <Link key={sidx} href={sc.url ?? '#'} className="block py-1">
                                                            <div className='border-[0.1px] border-accent pl-3 pr-2 py-2 flex gap-2'>
                                                                <GoDotFill />
                                                                <p className='text-[12px] font-semibold'>{sc.title}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                ))

            }
        </div>
    )
}


const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null)
    const [activeChildIdx, setActiveChildIdx] = useState<number | null>(null)

    return (
        <div className={`fixed top-12 left-0 right-0 bg-background shadow-lg z-40 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="px-5 py-3 overflow-y-auto">
                {DataRoute.map((item, idx) => (
                    <div key={idx} className="mb-2">
                        <div
                            className="flex items-center justify-between py-2 px-2 cursor-pointer hover:bg-accent rounded"
                            onClick={() => item.children ? setActiveIdx(prev => prev === idx ? null : idx) : onClose()}
                        >
                            <Link href={item.url ?? '#'} className="flex-1 text-[14px] font-semibold">
                                {item.title}
                            </Link>
                            {item.children && item.children.length > 0 && (
                                <MdExpandMore className={`transition-transform ${activeIdx === idx ? 'rotate-180' : ''}`} />
                            )}
                        </div>

                        {item.children && activeIdx === idx && (
                            <div className="pl-4 bg-accent-soft rounded">
                                {item.children.map((child: any, cidx: number) => (
                                    <div key={cidx} className="mb-1">
                                        <div
                                            className="flex items-center justify-between py-2 px-2 cursor-pointer hover:bg-accent rounded"
                                            onClick={() => child.children ? setActiveChildIdx(prev => prev === cidx ? null : cidx) : onClose()}
                                        >
                                            <Link href={child.url ?? '#'} className="flex-1 text-[13px]">
                                                {child.title}
                                            </Link>
                                            {child.children && child.children.length > 0 && (
                                                <MdExpandMore className={`transition-transform ${activeChildIdx === cidx ? 'rotate-180' : ''}`} />
                                            )}
                                        </div>

                                        {child.children && activeChildIdx === cidx && (
                                            <div className="pl-4 bg-background rounded">
                                                {child.children.map((sc: any, sidx: number) => (
                                                    <Link key={sidx} href={sc.url ?? '#'} onClick={onClose}>
                                                        <div className="flex items-center gap-2 py-2 px-2 text-[12px] hover:bg-accent rounded">
                                                            <GoDotFill size={6} />
                                                            <span>{sc.title}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}


const Navbar = () => {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const [isMobile, setIsMobile] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    // Hydration-safe: read theme, detect mobile, and apply only after mount
    useEffect(() => {
        try {
            const t = localStorage.getItem('theme')
            if (t === 'light' || t === 'dark') setTheme(t)
            else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
        } catch (e) { }

        // Deteksi tampilan mobile (max-width: 768px)
        const checkMobile = () => {
            if (window.matchMedia) {
                setIsMobile(window.matchMedia('(max-width: 768px)').matches)
            }
        }
        checkMobile()

        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Apply theme class to html
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        try {
            localStorage.setItem('theme', theme)
        } catch (e) { }
    }, [theme])

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

    // Set mounted setelah semua effect dijalankan
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <header>
            <div className="bg-accent px-5 lg:px-10 xl:px-20">
                <div className="flex items-center justify-between h-12">
                    {isMobile && mounted && (
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu" className="p-2">
                            {mobileMenuOpen ? <MdClose size={24} /> : <GiHamburgerMenu size={24} />}
                        </button>
                    )}
                    <div className="flex-1" />
                    {mounted && (
                        <button onClick={toggle} aria-label="Toggle theme" className="p-2 hover:opacity-90 cursor-pointer">
                            {theme === 'dark' ?
                                <div className='flex items-center text-primary'>
                                    <p className='text-[12px] font-bold pr-2'>Light Mode</p>
                                    <FaSun />
                                </div>
                                :
                                <div className='flex items-center'>
                                    <p className='text-[12px] font-bold pr-2'>Dark Mode</p>
                                    <FaMoon />
                                </div>
                            }
                        </button>
                    )}
                </div>
            </div>

            {isMobile ? (
                <>
                    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
                </>
            ) : (
                <nav className="bg-background px-5 lg:px-10 xl:px-20">
                    <NavbarDesktop />
                </nav>
            )}
        </header>
    )
}

export default Navbar

