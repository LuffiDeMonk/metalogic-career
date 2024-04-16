import React from 'react'
import { InfoIcon } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

export default function Info() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='absolute p-2 cursor-pointer z-20 top-32 left-32 bg-white rounded-full flex items-center justify-center shadow-md'>
                    <InfoIcon size={20} />
                </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[600px]'>
                <div className="text-sm py-6">
                    After thorough consideration, I chose career section of the website to be replicated. I believe this is one of the important section of the website which provides prospects to someone who wants to join the organization. Additionally, some of the important features of this website like the job search component is also not functioning which needed to be fixed. I also added scroll top button which enrich the user experience of scrolling to the top of a lengthy section.
                </div>
            </DialogContent>
        </Dialog>

    )
}
