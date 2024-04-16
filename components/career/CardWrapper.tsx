import { cn } from '@/lib/utils'
import React from 'react'
import { MotionDiv } from '../common/MotionComponent'
import { MainAnimation } from '@/constants/animation/variants'

export default function CardWrapper({ children, className }: CardWrapperProps) {
    return (
        <MotionDiv
            variants={MainAnimation}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
            className={cn('rounded-2xl p-8 bg-white group', className)}>
            {children}
        </MotionDiv>
    )
}
