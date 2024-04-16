import React from 'react'
import CardWrapper from './CardWrapper'
import Image from 'next/image'
import CardHeading from './CardHeading'
import CardDescription from './CardDescription'

type ValueCardProps = {
    image: string,
    title: string,
    description: string
}

export default function ValueCardMain({ image, title, description, }: ValueCardProps) {
    return (
        <CardWrapper className='shadow-xl w-[360px] md:min-h-[280px] h-full'>
            <div className="w-16 flex items-center justify-center rounded-xl p-4 bg-values">
                <Image
                    src={image}
                    width={180}
                    height={180}
                    alt='Continuous learning'
                    className='group-hover:-rotate-12 transition-transform'
                />
            </div>
            <CardHeading
                title={title}
            />
            <CardDescription
                description={description}
            />
        </CardWrapper>
    )
}
