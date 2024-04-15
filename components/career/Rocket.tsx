import React from 'react'
import { MotionDiv } from '../common/MotionComponent'
import { Variants } from 'framer-motion'

const variants: Variants = {
    hidden: {
        y: 0
    },
    animate: {
        y: '-100vh',
        transition: {
            ease: 'easeOut',
            duration: 2
        }
    }
}

export default function Rocket() {
    return (
        <div className="rocket">
            <MotionDiv
                variants={variants}
                initial='hidden'
                animate='animate'
            >
                <div className="rocket-body">
                    <div className="body"></div>
                    <p className='absolute rotate-[270deg] bottom-10 left-6 text-xs'>Metalogic</p>
                    <div className="fin fin-left bg-orange-500"></div>
                    <div className="fin fin-right bg-orange-500"></div>
                    <div className="window bg-orange-500"></div>
                </div>
                <div className="exhaust-flame"></div>
                <ul className="exhaust-fumes overflow-hidden">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </MotionDiv>
            <div className='overflow-hidden'>
                <ul className="exhaust-fumes">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <ul className="star">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}
