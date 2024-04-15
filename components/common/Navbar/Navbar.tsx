import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import Navlinks from './Navlinks'
import NavAnimation from './NavAnimation'



export default function Navbar() {
    return (
        <NavAnimation>
            <nav className='max-w-7xl mx-auto flex items-center justify-between p-3'>
                <Logo />
                <Navlinks />
                <Button className='hidden lg:block'>Get in Touch</Button>
            </nav>
        </NavAnimation>
    )
}
