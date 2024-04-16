import React from 'react'
import TitleContainer from './TitleContainer'
import VacancyForm from './VacancyForm'

export default function Vacancy() {
    return (
        <section
            id='vacancy'
            className='py-40'
        >
            <TitleContainer
                heading='Available Vacancies'
                subheading='Oppurtunities'
            />
            <VacancyForm />
        </section>
    )
}
