import Image from 'next/image'
import React from 'react'


const TextHeader = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <Image
                    src="/image/logo_konsel.webp"
                    alt="Logo Konsel"
                    className="h-[132px] w-[330px] object-contain opacity-85"
                    width={198}
                    height={231}
                    sizes="(max-width: 768px) 198px, 198px"
                    quality={70}
                />
                <p className='text-[35px]  md:text-[55px] font-bold font-poppins'>Website Resmi</p>
                <p className='text-[30px] -mt-5 font-caveat '>Kabupaten Konawe Selatan</p>
            </div>


        </div>
    )
}

export default TextHeader
