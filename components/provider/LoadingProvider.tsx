'use client'

import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ProgressBar
                height='4px'
                color='#fa3807'
                shallowRouting
                options={{ showSpinner: false }}
            />
            {children}
        </>
    )
}
