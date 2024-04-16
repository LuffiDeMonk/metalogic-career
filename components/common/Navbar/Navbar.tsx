import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import Navlinks from './Navlinks'
import NavAnimation from './NavAnimation'
import MobileNavigation from './MobileNavigation'



export default function Navbar() {
    return (
        <NavAnimation>
            <nav className='max-w-7xl mx-auto flex items-center justify-between p-3'>
                <Logo />
                <Navlinks />
                <Button className='hidden lg:block'>Get in Touch</Button>
                <div className="block lg:hidden">
                    <MobileNavigation />
                </div>
            </nav>
        </NavAnimation>
    )
}
