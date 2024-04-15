import Navbar from '@/components/common/Navbar/Navbar'
import React from 'react'


export default function Template({ children }: TemplateProps) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
