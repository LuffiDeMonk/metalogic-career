
import React from 'react'
import Rocket from './Rocket'
import { Button } from '../ui/button'
import { MotionDiv } from '../common/MotionComponent'
import { MainAnimation } from '@/constants/animation/variants'

export default function Banner() {
    return (
        <>
            <section className='h-[105vh] bg-gradient-to-b from-[#b4b2b2] via-[#b4b2b2]/70 to-white'>
                <div className="overflow-hidden w-full h-full relative">
                    <Rocket />
                    <div className="absolute w-full h-full inset-0 bg-transparent z-10">
                        <MotionDiv variants={MainAnimation} initial='initial' whileInView='whileInView' className='w-full h-full flex items-center justify-center flex-col'>
                            <p className='text-center text-xl font-semibold'>Careers</p>
                            <h1 className='text-6xl text-center font-bold py-12'>Navigate Your Next <br /> <span className='text-green-600'>Career</span> Move</h1>
                            <p className='w-1/2 text-center px-48 pb-12'>{`We're continiously searching for the right talent. Check if you're a good match.`}</p>
                            <MotionDiv variants={MainAnimation}>
                                <Button size='lg'>Explore Oppurtunities</Button>
                            </MotionDiv>
                        </MotionDiv>
                    </div>
                </div>
            </section>
        </>
    )
}
