import React from 'react'
import { values_data } from '@/constants/Values'
import TitleContainer from './TitleContainer'
import ValueCardMain from './ValueCardMain'

export default function Values() {
    return (
        <section className='bg-values py-16'>
            <TitleContainer
                subheading='Values'
                heading='We Believe In'
                description='We believe in creating an environment where individuals can thrive and make a meaningful impact.'
            />
            <div className='flex items-center justify-center flex-wrap gap-10 mt-6'>
                {
                    values_data.map((value) => (
                        <ValueCardMain
                            title={value.title}
                            image={value.image}
                            description={value.description}
                            key={value.id}
                        />
                    ))
                }
            </div>
        </section>
    )
}
