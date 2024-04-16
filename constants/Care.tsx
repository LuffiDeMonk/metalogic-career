import Performance from '@/assets/care/bonus_1.svg'
import Health from '@/assets/care/health.svg'
import Policy from '@/assets/care/paidleave.svg'
import Learning from '@/assets/care/learning.svg'
import Food from '@/assets/care/food_1.svg'
import Team from '@/assets/care/teambuilding.svg'


type ICareData = {
    id: string,
    image: string,
    title: string
}

export const care_data: Array<ICareData> = [
    {
        id: crypto.randomUUID(),
        image: Performance,
        title: 'Performance Bonus'
    },
    {
        id: crypto.randomUUID(),
        image: Health,
        title: 'Health Benefits'
    },
    {
        id: crypto.randomUUID(),
        image: Policy,
        title: 'Paid Leave Policy'
    },
    {
        id: crypto.randomUUID(),
        image: Learning,
        title: 'Learning and Development'
    },
    {
        id: crypto.randomUUID(),
        image: Food,
        title: 'Food Credit'
    },
    {
        id: crypto.randomUUID(),
        image: Team,
        title: 'Team Activities'
    }
]