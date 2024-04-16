'use client'

import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Form, FormControl, FormField, FormItem } from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { IVacancyValidation, VacancyValidation } from '@/constants/form/VacancyValidation'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { search_data } from '@/constants/SearchOption'

export default function VacancyForm() {
    const form = useForm<IVacancyValidation>({
        resolver: zodResolver(VacancyValidation)
    })
    const onSubmit = (data: IVacancyValidation) => { alert(data.title) }
    return (
        <div className='flex flex-col gap-2 items-center justify-center max-w-4xl mx-auto mt-2 px-4'>
            <Form
                {...form}
            >
                <form className='w-full space-y-2' onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='title'
                        render={({ field }) => (
                            <FormItem>
                                <Input
                                    placeholder='Job title / Keywords'
                                    {...field}
                                />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center gap-2">
                        <div className="w-[90%]">

                            <FormField
                                control={form.control}
                                name='level'
                                render={({ field }) => (
                                    <FormItem>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Level" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {search_data.map(search => (
                                                    <SelectItem
                                                        key={search.id}
                                                        value={search.value}
                                                    >{search.title}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>


                        <Button className='w-[10%]'>
                            <MagnifyingGlassIcon className='text-3xl' />
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
