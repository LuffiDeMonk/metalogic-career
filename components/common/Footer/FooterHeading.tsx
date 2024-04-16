import React from 'react'
import Logo from '@/assets/metalogo.png'
import { BannerFont } from '../fonts'
import { MapPin, PhoneIcon, MailIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'


export default function FooterHeading() {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between xl:justify-normal lg:flex-col gap-8 xl:gap-6">
            {/* logo */}
            <div className="flex items-center gap-1.5">
                <Image
                    src={Logo}
                    width={50}
                    height={50}
                    alt='Logo'
                />
                <div className="">
                    <h1 className={cn(BannerFont.className, 'text-2xl font-bold tracking-wider lg:text-3xl')}>MetaLogic</h1>
                    <p className='text-xs lg:text-sm tetx-gray-500'>Software Private Limited</p>
                </div>
                {/* location data */}
            </div>
            <div>
                <div className="space-y-1 lg:space-y-2">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <p className='text-sm'>{`Saptakhel, Lalitpur (Head Office)`}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <PhoneIcon size={16} />
                        <p className='text-sm'>+ 977 9851353599</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <MailIcon size={16} />
                        <p className='text-sm'>info@metalogic.com.np</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
