import React from 'react'
import CardWrapper from './CardWrapper'
import CardHeading from './CardHeading'
import CardDescription from './CardDescription'
import Image from 'next/image'

type BenefitCardProps = {
    title: string,
    image: string,
    description: string
}

export default function BenefitCard({ title, image, description }: BenefitCardProps) {
    return (
        <CardWrapper className='shadow-none hover:shadow-lg border border-transparent hover:border-gray-200 p-5 transition-all duration-300'>
            <Image
                src={image}
                width={40}
                height={40}
                alt={title}
                className='group-hover:scale-105 transition-all duration-300'
            />
            <CardHeading
                title={title}
            />
            <CardDescription
                description={description}
            />
        </CardWrapper>
    )
}
