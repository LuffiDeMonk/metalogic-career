import React from 'react'

export default function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div className='space-y-1'>
            <h1 className='text-base font-semibold'>{title}</h1>
            {
                links.map((item, idx) => (
                    <p className='text-xs' key={idx}>{item}</p>
                ))
            }
        </div>
    )
}
