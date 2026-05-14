import Image from 'next/image'
import React from 'react'


const TextHeader = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <Image
                    src="/image/logo_konsel.webp"
                    alt="Logo Konsel"
                    className="h-[88px] w-[220px] object-contain opacity-85"
                    width={198}
                    height={231}
                    sizes="(max-width: 768px) 150px, 220px"
                    quality={70}
                />
                <p className="font-poppins text-[35px] font-extrabold text-(--fg) dark:text-green-300 [text-shadow:0_1px_0_rgba(255,255,255,0.65),0_2px_0_rgba(0,0,0,0.08),0_3px_0_rgba(0,0,0,0.08),0_4px_6px_rgba(0,0,0,0.25)] md:text-[55px]">
                    Website Resmi
                </p>
                <p className='text-[28px] -mt-3 font-josefin'>Kabupaten Konawe Selatan</p>
            </div>


        </div>
    )
}

export default TextHeader
