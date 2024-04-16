import { cn } from '@/lib/utils'
import React from 'react'

type CardDescriptionProps = {
    description: string,
    className?: string
}

export default function CardDescription({ description, className }: CardDescriptionProps) {
    return (
        <p className={cn('text-gray-600 text-sm', className)}>{description}</p>
    )
}
