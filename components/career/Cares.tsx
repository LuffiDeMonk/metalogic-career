import React from 'react'
import CareContainer from './CareContainer'

export default function Cares() {
    return (
        <section className='py-32 bg-[#FFFFE1]'>
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row justify-evenly gap-10 lg:gap-40 px-6'>
                <div className='space-y-5'>
                    <h1 className='text-center lg:text-start text-3xl font-bold text-blue-950'>Metalogic Cares For You</h1>
                    <p className='text-center lg:text-start text-sm text-gray-500'>{`We're less about valuing perks and more about valuing people. Our employee benefits are built around enhancing your wellbeing - at work and at home`}</p>
                </div>
                <CareContainer />
            </div>
        </section>
    )
}
