import Continuous_Learning from "@/assets/values/continious_learning.svg"
import Team_Work from '@/assets/values/team_work.svg'
import Innovation from '@/assets/values/innovation.svg'
import Mentorship from '@/assets/values/mentorship.svg'
import Tangible_Impact from '@/assets/values/impact.svg'
import Adaptability from '@/assets/values/adaptability.svg'

export const values_data: Array<ValueDataTypes> = [
    {
        id: crypto.randomUUID(),
        title: 'Continuous Learning',
        description: "We invest in our team's growth through ongoing training, mentorship, and opportunities to expand your skill set.We're dedicated to your professional development journey.",
        image: Continuous_Learning
    },
    {
        id: crypto.randomUUID(),
        title: 'Team Work',
        description: 'We believe that best solutions comes from diverse perspective and collaborative efforts.',
        image: Team_Work
    },
    {
        id: crypto.randomUUID(),
        title: 'Innovation',
        description: "Whether it's the quality of our work, the impact we make, or the relationships we build, we consistently strive for the highest standards.",
        image: Innovation
    },
    {
        id: crypto.randomUUID(),
        title: 'Mentorship',
        description: "We embrace change, learn from challenges, and remain resilient in the face of obstacles, always seeking opportunities for improvement.",
        image: Mentorship
    },
    {
        id: crypto.randomUUID(),
        title: 'Tangible Impact',
        description: "We're committed to delivering solutions that not only meet but exceed their expectations.",
        image: Tangible_Impact
    },
    {
        id: crypto.randomUUID(),
        title: 'Adaptibility',
        description: "Thrive in a fast-paced world with resilience as your ally, valuing and cultivating adaptability in your career journey",
        image: Adaptability
    }
]