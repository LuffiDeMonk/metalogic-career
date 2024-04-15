import Image from 'next/image'
import React from 'react'
import Brand from '@/assets/metalogo.png'
import { cn } from '@/lib/utils'
import { BannerFont } from '../fonts'
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href='/' className='flex items-center gap-4'>
            <Image
                src={Brand}
                width={48}
                height={48}
                alt='brand'
            />
            <p className={cn(BannerFont.className, 'text-3xl font-bold lg:font-semibold tracking-widest text-blue-950')}>MetaLogic</p>
        </Link>
    )
}
