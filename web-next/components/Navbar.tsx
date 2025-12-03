"use client";

import React, { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { MdExpandMore } from "react-icons/md";

// Simple Navbar with a minimal theme toggle.
// Keeps logic small so it's easy to read and maintain.

const dataNav = [
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Berita',
        url: '/',
    },
    {
        title: 'Profile',
        url: '/',
        children: [
            {
                title: 'Profile',
                url: '/',
            },
            {
                title: 'Sejarah',
                url: '/',
            },
            {
                title: 'Pimpinan',
                url: '/',
                children: [
                    {
                        title: 'Bupati',
                        url: '/',
                    },
                    {
                        title: 'Wakil Bupati',
                        url: '/',
                    },
                    {
                        title: 'Sekretaris Daerah',
                        url: '/',
                    },
                ]
            },
            {
                title: 'Visi',
                url: '/',
            },
            {
                title: 'Misi',
                url: '/',
            },
        ]
    },
    {
        title: 'Data & Informasi',
        url: '/',
        children: [
            {
                title: 'JDIH',
                url: '/',
            },
            {
                title: 'IPKD',
                url: '/',
            },
            {
                title: 'PPID',
                url: '/',
            },
            {
                title: 'Statistik',
                url: '/',
            },
            {
                title: 'Kepegawaian',
                url: '/',
            },
        ]
    },
    {
        title: 'Agenda & Pengumuman',
        url: '/',
        children: [
            {
                title: 'Agenda',
                url: '/',
            },
            {
                title: 'Pengumuman',
                url: '/',
            },
        ]
    },
    {
        title: 'Subdomain',
        url: '/',
    },
    {
        title: '#Setara',
        url: '/',
    },
    {
        title: 'Home',
        url: '/',
    },
    {
        title: 'Gallery',
        url: '/',
        children: [
            {
                title: 'Photo',
                url: '/',
            },
            {
                title: 'Video',
                url: '/',
            },
            {
                title: 'Infografis',
                url: '/',
            },
        ]
    },



];



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
                    <button onClick={toggle} aria-label="Toggle theme" className="p-2 hover:opacity-90">


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
                <div className="flex gap-3 h-16 items-center">

                    {
                        dataNav.map((data, index) => (

                            <div>
                                <div key={index} className='flex gap-2 items-center cursor-pointer'>
                                    <p className='text-[13px] font-semibold'>{data.title}</p>
                                    <MdExpandMore />
                                </div>
                            </div>

                        ))

                    }
                </div>
            </nav>
        </header>
    )
}

export default Navbar

