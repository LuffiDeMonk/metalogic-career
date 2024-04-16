import Banner from '@/components/career/Banner'
import Benefits from '@/components/career/Benefits'
import Cares from '@/components/career/Cares'
import Vacancy from '@/components/career/Vacancy'
import Values from '@/components/career/Values'
import React, { Suspense } from 'react'

export default function Career() {
    return (
        <>
            <Banner />
            <Values />
            <Benefits />
            <Cares />
            <Suspense>
                <Vacancy />
            </Suspense>
        </>
    )
}
