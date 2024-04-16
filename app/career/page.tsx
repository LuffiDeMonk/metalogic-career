import Banner from '@/components/career/Banner'
import Benefits from '@/components/career/Benefits'
import Cares from '@/components/career/Cares'
import Info from '@/components/career/Info'
import Vacancy from '@/components/career/Vacancy'
import Values from '@/components/career/Values'
import { Metadata } from 'next'
import React, { Suspense } from 'react'

export const metadata: Metadata = {
    title: "Join Metalogic: Explore Exciting Career Opportunities in Innovation",
    description: 'Embark on a rewarding journey with Metalogic. Discover diverse career opportunities where innovation meets passion. Join our dynamic team, and contribute to cutting-edge projects that redefine the future of technology. Explore frontend jobs, backend jobs, DevOps roles, senior positions, junior opportunities, and internships.',
    keywords: 'Metalogic careers, job opportunities, innovation careers, technology careers, dynamic team, exciting projects, career development, frontend jobs, backend jobs, DevOps roles, senior positions, junior opportunities, internships'
}

export default function Career() {
    return (
        <>
            <Banner />
            <Info />
            <Values />
            <Benefits />
            <Cares />
            <Suspense>
                <Vacancy />
            </Suspense>
        </>
    )
}
