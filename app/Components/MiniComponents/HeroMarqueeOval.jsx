import Image from 'next/image'
import React from 'react'

export default function HeroMarqueeOval({img}) {
  return (
<Image src={img} alt='img' width={500} height={500} quality={100} className=' w-[100px] h-[200px] rounded-[50px] object-cover object-right'></Image>
  )
}
