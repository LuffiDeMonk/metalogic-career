import React from 'react'
import FooterLinks from './FooterLinks'
import { company_links, join_links, services_links } from '@/constants/FooterLinks'
import FooterSocial from './FooterSocial'
import FooterHeading from './FooterHeading'

export default function Footer() {
    return (
        <footer className='bg-blue-950 text-white py-32 px-4 lg:px-12'>
            <div className="flex flex-col lg:flex-row lg:justify-evenly gap-6 xl:gap-6">
                <FooterHeading />
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-6 sm:gap-8">
                    <FooterLinks
                        title='Company'
                        links={company_links}
                    />
                    <FooterLinks
                        title='Services'
                        links={services_links}
                    />
                    <FooterLinks
                        title="Join"
                        links={join_links}
                    />
                    <FooterSocial />
                </div>
            </div>
            <div className='text-xs md:text-sm lg:text-base font-semibold text-start lg:text-center mt-12 xl:mt-32'>© Copyright 2024 MetaLogic. All rights reserved.</div>
        </footer>
    )
}
