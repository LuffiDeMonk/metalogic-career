import React from 'react'
import { MotionDiv } from '../common/MotionComponent'
import { MainAnimation } from '@/constants/animation/variants'

export default function TitleContainer({ heading, subheading, description }: TitleContainerProps) {
    return (
        <MotionDiv
            variants={MainAnimation}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center gap-4'>
            <p className='text-center text-xl font-semibold text-red-500'>{subheading}</p>
            <h1 className='text-4xl font-bold text-center text-blue-950'>{heading}</h1>
            {description && <p className='text-center text-gray-600 md:px-9 md:w-1/2'>{description}</p>}
        </MotionDiv>
    )
}
