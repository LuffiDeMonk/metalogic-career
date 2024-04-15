'use client'

import React, { useState } from 'react'
import { MotionSection } from '../MotionComponent'
import { cn } from '@/lib/utils'
import { useScroll, useMotionValueEvent } from 'framer-motion'

const variants = {
    hidden: {
        y: -80
    },
    visible: {
        y: 0
    }
}

export default function NavAnimation({ children, className }: { children: React.ReactNode, className?: string }) {
    const [hide, setHide] = useState(true)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        let previous = scrollY.getPrevious() as number

        if (latest > previous && latest > 160) {
            setHide(false)
        } else {
            setHide(true)
        }
    })

    return (
        <MotionSection
            variants={variants}
            animate={hide ? 'visible' : 'hidden'}
            transition={{ ease: 'easeInOut' }}
            className={cn(className, `fixed top-0 z-[999] w-full backdrop-blur-lg`)}
        >
            {children}
        </MotionSection>
    )
}
