import React from 'react'
import TitleContainer from './TitleContainer'
import { benefit_data } from '@/constants/Benefits'
import BenefitCard from './BenefitCard'

export default function Benefits() {
    return (
        <section className='py-12'>
            <TitleContainer
                subheading='Benefits'
                heading='Life At Metalogic'
            />
            <div className="mt-4 max-w-7xl px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    benefit_data.map(benefit => (
                        <BenefitCard
                            title={benefit.title}
                            description={benefit.description}
                            image={benefit.image}
                            key={benefit.id}
                        />
                    ))
                }
            </div>
        </section>
    )
}
