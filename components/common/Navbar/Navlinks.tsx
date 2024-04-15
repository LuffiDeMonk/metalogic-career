import { Links } from '@/constants/Navlinks'
import React from 'react'
import SingleLink from './SingleLink'

export default function Navlinks() {
    return (
        <section className='hidden lg:flex items-center gap-8 font-semibold'>
            {
                Links.map(item => (
                    <React.Fragment key={item.name}>
                        <SingleLink
                            link={item.link}
                            name={item.name}
                        />
                    </React.Fragment>
                ))
            }
        </section>
    )
}
