import { cn } from '@/lib/utils'
import React from 'react'

export default function CardHeading({ title, className }: { title: string, className?: string }) {
    return (
        <h1 className={cn('font-bold text-xl text-blue-950 my-3', className)}>{title}</h1>
    )
}
