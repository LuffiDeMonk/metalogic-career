import Footer from '@/components/common/Footer/Footer'
import Navbar from '@/components/common/Navbar/Navbar'
import Newsletter from '@/components/common/Newsletter'
import React from 'react'


export default function Template({ children }: TemplateProps) {
    return (
        <>
            <Navbar />
            {children}
            <Newsletter />
            <Footer />
        </>
    )
}
