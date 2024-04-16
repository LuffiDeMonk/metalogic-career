'use client'
import React, { useMemo } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn } from '@/lib/utils'
import { jobArray } from '@/constants/JobsArray'
import { useSearchParams } from 'next/navigation'
import { MotionDiv } from '../common/MotionComponent'
import { MainAnimation } from '@/constants/animation/variants'



const Pills = ({ status }: { status: boolean }) => {
    return (
        <div className='flex justify-center'>
            <span className={cn('rounded-full py-2 px-6 text-xs  font-bold', `${status ? "bg-green-400 text-green-600" : "bg-red-300 text-red-600"}`)}>
                {status ? "Available" : 'Closed'}
            </span>
        </div>
    )
}


export default function SearchResults() {
    const searchParams = useSearchParams()

    let title = searchParams.get('title') || ''
    let level = searchParams.get('level') || ''

    let filteredJobs = useMemo(
        () => (
            jobArray.filter(job => job.title.toLowerCase().includes(title) && job.level.toLowerCase().includes(level))
        ), [title, level])

    if (filteredJobs.length === 0) {
        return (
            <div className='max-w-4xl mx-auto mt-32 px-4 h-64 bg-gray-300 text-gray-500 font-semibold text-xl flex items-center justify-center'>
                No jobs found
            </div>
        )
    }

    return (
        <MotionDiv
            variants={MainAnimation}
            initial='initial'
            whileInView='whileInView'
            viewport={{ once: true }}
            className='max-w-4xl mx-auto mt-32 px-4'
        >
            <p className='mb-3 text-xl font-semibold'>{`${filteredJobs.length} Job Offers`}</p>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[200px]'>Title</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead className='text-center'>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filteredJobs.map(job => (
                            <TableRow key={job.title}>
                                <TableCell className='font-bold'>{job.title}</TableCell>
                                <TableCell>{job.level}</TableCell>
                                <TableCell>{job.location}</TableCell>
                                <TableCell>
                                    <Pills
                                        status={job.status}
                                    />
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </MotionDiv>
    )
}
