import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

export default function Newsletter() {
    return (
        <section className='py-20 bg-gray-200 space-y-6'>
            <h1 className='text-xl font-bold text-center'>Subscribe to our News Letter</h1>
            <p className='text-base text-center text-gray-500'>Stay informed, inspired, and equipped with the latest trends and breakthroughs in your field.</p>
            <div className="max-w-3xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-center gap-2">
                <Input
                    placeholder='Enter your email address'
                    className='md:w-[90%] p-4 bg-white'
                />
                <Button
                    className='flex items-center gap-2 h-12'
                >
                    <EnvelopeClosedIcon className='size-4' />
                    <p>Subscribe</p>
                </Button>
            </div>
        </section>
    )
}
