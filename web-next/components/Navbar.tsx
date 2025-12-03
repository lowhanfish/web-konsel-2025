"use client";

import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { MdExpandMore } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

import { DataRoute } from '@/config/DataRoute';
import Link from 'next/link';

// Simple Navbar with a minimal theme toggle.
// Keeps logic small so it's easy to read and maintain.

const NavbarDesktop = () => {

    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
    const [activeChildIndex, setActiveChildIndex] = useState<number | null>(null);

    const handleMouseEnter = (idx: number) => {
        // console.log(e)
        // console.log("saya sedang di hover")


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
                        <div className='flex gap-2 items-center cursor-pointer h-full'>
                            <p className='text-[13px] font-semibold'>{item.title}</p>
                            {item.children && item.children.length > 0 && <MdExpandMore />}
                        </div>

                        {/* children dropdown (hidden by default) */}
                        {item.children && (
                            <div className={`rounded-b-lg absolute top-full left-0 z-10 ${activeMenuIndex === idx ? 'block' : 'hidden'}`}
                                style={{ minWidth: '200px' }}
                            >
                                {item.children.map((child: any, cidx: number) => (
                                    <div key={cidx}>
                                        <div className="flex flex-wrap cursor-pointer " onClick={() => child.children ? setActiveChildIndex(prev => prev === cidx ? null : cidx) : undefined}>
                                            <div className="flex w-full bg-accent-soft border-[0.1px] border-accent px-2 py-3 hover:bg-accent">
                                                <p className='flex-1 text-[12px] font-bold'> {child.title ?? '-'}</p>
                                                {child.children && child.children.length > 0 && <MdExpandMore />}
                                            </div>
                                        </div>

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



const Navbar = () => {
    // initialize theme: localStorage -> system -> light
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        if (typeof window === 'undefined') return 'light'
        try {
            const t = localStorage.getItem('theme')
            if (t === 'light' || t === 'dark') return t
        } catch (e) { }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    })

    // apply theme and persist
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark')
        document.documentElement.classList.add(theme)
        try {
            localStorage.setItem('theme', theme)
        } catch (e) { }
    }, [theme])

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

    return (
        <header>
            <div className="bg-accent px-5 lg:px-10 xl:px-20">
                <div className="flex items-center justify-end h-12">
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
                </div>
            </div>

            <nav className="bg-background px-5 lg:px-10 xl:px-20">
                <NavbarDesktop />
            </nav>
        </header>
    )
}

export default Navbar

