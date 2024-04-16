'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { AlignJustify } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Links } from '@/constants/Navlinks'
import SingleLink from './SingleLink'

export default function MobileNavigation() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size='icon' variant='ghost'>
                    <AlignJustify />
                </Button>
            </SheetTrigger>
            <SheetContent className='z-[999]' side="left">
                <div className="h-full flex flex-col items-center justify-center gap-6">
                    {
                        Links.map(link => (
                            <SingleLink
                                key={link.name}
                                name={link.name}
                                link={link.link}
                            />
                        ))
                    }
                    <Button variant='destructive' size='lg'>Get in touch</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
