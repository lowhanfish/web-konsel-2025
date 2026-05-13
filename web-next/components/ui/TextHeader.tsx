import Image from 'next/image'
import React from 'react'


const TextHeader = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <Image
                    src="/image/logo_konsel.png"
                    alt="Logo Konsel"
                    className="h-[132px] w-[330px] object-contain opacity-85"
                    width={330}
                    height={132}
                />
                <p className='text-[35px]  md:text-[55px] font-bold font-poppins'>Website Resmi</p>
                <p className='text-[30px] -mt-5 font-caveat '>Kabupaten Konawe Selatan</p>
            </div>


        </div>
    )
}

export default TextHeader
