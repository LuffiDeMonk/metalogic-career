'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SingleLink({ link, name }: SingleLinkProps) {
    const pathname = usePathname()
    return (
        <React.Fragment>
            <Link
                href={link}
                className={cn("relative after:absolute after:bottom-0 after:left-0 after:content-[''] after:w-1/2 after:h-0.5 after:bg-red-400 ", `${pathname !== link && "after:scale-0 hover:after:scale-100 after:transition-all after:duration-500 after:origin-left"}`)}
            >
                {name}
            </Link>
        </React.Fragment>
    )
}
