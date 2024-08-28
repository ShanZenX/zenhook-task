import Image from 'next/image'
import React from 'react'

export default function HeroMarqueeCircle({img,bgColor}) {
  return (
    <div className='h-64 w-64 rounded-ful p-9 ' style={{backgroundColor: bgColor , borderRadius:"180px" }}>
      <Image src={img} width={500} height={500} alt='img' className='rounded-3xl'></Image>
    </div>
  )
}
