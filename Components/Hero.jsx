import Image from 'next/image'
import React from 'react'
import likden from '../public/images/likden.jpg'
export default function Hero() {
  return (
    <>
        <div className="w-[90%] h-50 mx-auto   ">
            <div></div>
            <div>
                <div className='bg-cyan-500 rounded-t-lg rounded-r-lg px-3 text-white'>Hello! I am</div>
                <div className='text-white uppercase text-3xl'>Kenneth Obeng</div>
                <div>A passionate and forward-thinking software developer</div>
            </div>
            <div>
                <div className="h-[280px] w-[280px] bg-[]">
                    <div className='h-[250px] w-[250px] bg-[]'>
                        <div className='h-[220px] w-[220px] bg-[]'>
                            <Image className="rounded-[80%]" src={likden}
                              height={190} width={190}  alt='Kenneth Obeng'  
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
