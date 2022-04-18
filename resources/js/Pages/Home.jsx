import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { CalendarIcon, ClockIcon, LocationMarkerIcon, MapIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import ParkingIcon from '../Shared/ParkingIcon'
import Tabs from '../Shared/Tabs'

export default function Home() {
    const [selection, setSelection] = useState({ name:'Inerested' });
    return (
        <div className="relative overflow-hidden">
            <div className="relative pt-6 pb-16">
                <main className="mt-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                <div>

                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-rsvp-darkblue sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                        <span className="md:block">Lorem Regional
                                            Launch</span>
                                    </h1>
                                    <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        We would like to welcome you to our meeting that is organized
                                        by our friends in the Lorem company
                                    </p>
                                    <div className='mt-4 text-rsvp-purple font-bold'>
                                        <div className="text-3xl">
                                            <LocationMarkerIcon className='inline w-10 h-10 mr-2' />
                                            Hall 5
                                        </div>
                                        <a href="#" className='mb-4 block pl-3 text-rsvp-darkblue text-base hover:underline'>
                                            <ParkingIcon className='inline w-4 h-4 mr-2 fill-current' />
                                            Parking B
                                        </a>
                                        <div className="mb-4 text-3xl">
                                            <CalendarIcon className='inline w-10 h-10 mr-2' />
                                            Friday, 16th April
                                        </div>
                                        <div className="mb-4 text-3xl">
                                            <ClockIcon className='inline w-10 h-10 mr-2' />
                                            6:00 pm
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                                <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                                    <div className="px-4 py-8 sm:px-10">
                                            <p className="text-sm font-medium text-gray-700">Please fill out the information below to register
                                                for the event
                                            </p>
                                            <Tabs selection={selection} setSelection={setSelection} />
                                        <div className="mt-6">
                                            <form action="#" method="POST" className="space-y-3">
                                                <div>
                                                    <label htmlFor="first_name" className="sr-only">
                                                        First Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        id="first_name"
                                                        autoComplete="given-name"
                                                        placeholder="First Name"
                                                        required
                                                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="last_name" className="sr-only">
                                                        Family Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        id="last_name"
                                                        autoComplete="family-name"
                                                        placeholder="Family Name"
                                                        required
                                                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="sr-only">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        autoComplete="email"
                                                        placeholder="Email Address"
                                                        required
                                                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="mobile" className="sr-only">
                                                        Mobile number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="mobile"
                                                        id="mobile"
                                                        autoComplete="tel"
                                                        placeholder="Mobile number"
                                                        required
                                                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="company" className="sr-only">
                                                        Company
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        id="company"
                                                        autoComplete="company"
                                                        placeholder="Company"

                                                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="notes" className="sr-only">
                                                        Notes
                                                    </label>
                                                    <textarea
                                                        name="notes"
                                                        id="notes"
                                                        placeholder="Notes"
                                                        className="block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                                                    />
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Create your account
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="px-4 py-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
                                        <p className="text-xs leading-5 text-gray-500">
                                            By signing up, you agree to our{' '}
                                            <a href="#" className="font-medium text-gray-900 hover:underline">
                                                Terms
                                            </a>
                                            ,{' '}
                                            <a href="#" className="font-medium text-gray-900 hover:underline">
                                                Data Policy
                                            </a>{' '}
                                            and{' '}
                                            <a href="#" className="font-medium text-gray-900 hover:underline">
                                                Cookies Policy
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
