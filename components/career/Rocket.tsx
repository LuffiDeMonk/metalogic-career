import React from 'react'
import { MotionDiv } from '../common/MotionComponent'
import { Variants } from 'framer-motion'
import styles from './rocket.module.css'

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
        <div className={styles.rocket}>
            <MotionDiv
                variants={variants}
                initial='hidden'
                animate='animate'
            >
                <div className={styles.rocket_body}>
                    <div className={styles.body}></div>
                    <p className='absolute rotate-[270deg] bottom-10 left-6 text-xs'>Metalogic</p>
                    <div className={`${styles.fin} ${styles.fin_left} bg-orange-500`}></div>
                    <div className={`${styles.fin} ${styles.fin_right} bg-orange-500`}></div>
                    <div className={`${styles.window} bg-orange-500`}></div>
                </div>
                <div className={styles.exhaust_flame}></div>
                <ul className={`${styles.exhaust_fumes} overflow-hidden`}>
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
                <ul className={styles.exhaust_fumes}>
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
            <ul className={styles.star}>
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
