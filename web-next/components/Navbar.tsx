"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'


import { FaSun } from "react-icons/fa";


type NavbarProps = {
    mode?: string
}

const Navbar = ({ mode }: NavbarProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        try {
            const stored = localStorage.getItem('theme');
            if (stored === 'light' || stored === 'dark') {
                setTheme(stored);
                return;
            }
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
        } catch (e) {
            // ignore
        }
    }, []);

    // Apply theme to <html> and persist
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        try {
            localStorage.setItem('theme', theme);
        } catch (e) { }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

    return (

        <div>
            <div className='bg-accent px-5 lg:px-10 xl:px-20'>
                <div className='flex items-center justify-end h-12'>
                    <button onClick={toggle} aria-pressed={theme === 'dark'} aria-label="Toggle theme" className='hover:opacity-90 cursor-pointer'>
                        <div className='flex items-center'>
                            <p className='pr-2 text-[12px] font-bold'>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                            <FaSun />
                        </div>
                    </button>
                </div>
            </div>
            <div className='bg-background px-5 lg:px-10 xl:px-20'>
                <div className='flex'>
                    <div className='flex'>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
