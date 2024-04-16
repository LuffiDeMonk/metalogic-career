import React from 'react'
import CardWrapper from './CardWrapper'
import CardHeading from './CardHeading'
import { care_data } from '@/constants/Care'
import Image from 'next/image'

export default function CareContainer() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-4 shrink-0'>
            {
                care_data.map((care) => (
                    <div className='flex items-center justify-center' key={care.id}>
                        <CardWrapper
                            key={care.id}
                            className='w-[200px] h-[200px] shadow-lg py-12'
                        >
                            <Image
                                src={care.image}
                                width={40}
                                height={40}
                                alt={care.title}
                                className='group-hover:rotate-12 transition-all duration-300'
                            />
                            <CardHeading
                                title={care.title}
                                className='text-base font-semibold'
                            />
                        </CardWrapper>
                    </div>
                ))
            }
        </div>
    )
}
