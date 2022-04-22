import { Fragment, useState, useEffect } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { CalendarIcon, ClockIcon, LocationMarkerIcon, MapIcon, MenuIcon, PaperAirplaneIcon, RefreshIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import ParkingIcon from '../Shared/ParkingIcon'
import Tabs from '../Shared/Tabs'
import { Head, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import SuccessModal from '../Shared/SuccessModal'

export default function Home() {
    const { campaign, title, errors, flash } = usePage().props;
    const [selection, setSelection] = useState({ name: 'Going' });
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState({
        email: '',
        first_name: '',
        last_name: '',
        mobile: '',
        company: '',
        going: true,
        not_going: false,
        interested: false,
        notes: '',
    })

    useEffect(() => {
        if (selection) {
            setValues(
                {
                    ...values,
                    going: selection.name === 'Going' ? true : false,
                    not_going: selection.name === 'Not Going' ? true : false,
                    interested: selection.name === 'Interested' ? true : false,
                })
        }
    }, [selection])


    function handleSubmit(event) {
        event.preventDefault();
        Inertia.post(`/campaigns/${campaign.data.uuid}`, values, {
            onStart: () => setLoading(true),
            onFinish: () => setLoading(false)
        });
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({ ...values, [key]: value }));

    }

    return (
        <>
            <Head title={title} />
            <div className="relative overflow-hidden">
                <div className="relative pt-6 pb-16">
                    <main className="mt-10">
                        <div className="mx-auto max-w-7xl">
                            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                                    <div>

                                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-rsvp-darkblue sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                                            <span className="md:block">{campaign.data.title}</span>
                                        </h1>
                                        <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                            {campaign.data.description}
                                        </p>
                                        <div className='mt-4 text-rsvp-purple font-bold'>
                                            <div className="text-3xl">
                                                <LocationMarkerIcon className='inline w-10 h-10 mr-2' />
                                                {campaign.data.location}
                                            </div>
                                            <a href={campaign.data.parking_link} className='mb-4 block pl-3 text-rsvp-darkblue text-base hover:underline'>
                                                <ParkingIcon className='inline w-4 h-4 mr-2 fill-current' />
                                                {campaign.data.parking}
                                            </a>
                                            <div className="mb-4 text-3xl">
                                                <CalendarIcon className='inline w-10 h-10 mr-2' />
                                                {campaign.data.start_date}
                                            </div>
                                            <div className="mb-4 text-3xl">
                                                <ClockIcon className='inline w-10 h-10 mr-2' />
                                                {campaign.data.start_time}
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
                                                <form onSubmit={handleSubmit} method="POST" className="space-y-3">
                                                    <div>
                                                        <label htmlFor="first_name" className="sr-only">
                                                            First Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="first_name"
                                                            id="first_name"
                                                            onChange={handleChange}
                                                            autoComplete="given-name"
                                                            placeholder="First Name"
                                                            // required
                                                            className="form-input"
                                                            disabled={loading}
                                                        />
                                                        {errors.first_name && <p className='text-red-500 text-sm'>{errors.first_name}</p>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="last_name" className="sr-only">
                                                            Family Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="last_name"
                                                            id="last_name"
                                                            onChange={handleChange}
                                                            autoComplete="family-name"
                                                            placeholder="Family Name"
                                                            // required
                                                            className="form-input"
                                                            disabled={loading}
                                                        />
                                                        {errors.last_name && <p className='text-red-500 text-sm'>{errors.last_name}</p>}
                                                    </div>

                                                    <div>
                                                        <label htmlFor="email" className="sr-only">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            onChange={handleChange}
                                                            autoComplete="email"
                                                            placeholder="Email Address"
                                                            // required
                                                            className="form-input"
                                                            disabled={loading}
                                                        />
                                                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                                                    </div>
                                                    <div>
                                                        <label htmlFor="mobile" className="sr-only">
                                                            Mobile number
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="mobile"
                                                            id="mobile"
                                                            onChange={handleChange}
                                                            autoComplete="tel"
                                                            placeholder="Mobile number"
                                                            // required
                                                            className="form-input"
                                                            disabled={loading}
                                                        />
                                                        {errors.mobile && <p className='text-red-500 text-sm'>{errors.mobile}</p>}
                                                    </div>

                                                    <div>
                                                        <label htmlFor="company" className="sr-only">
                                                            Company
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="company"
                                                            id="company"
                                                            onChange={handleChange}
                                                            autoComplete="company"
                                                            placeholder="Company"

                                                            className="form-input"
                                                            disabled={loading}
                                                        />
                                                        {errors.company && <p className='text-red-500 text-sm'>{errors.company}</p>}
                                                    </div>

                                                    <div>
                                                        <label htmlFor="notes" className="sr-only">
                                                            Notes
                                                        </label>
                                                        <textarea
                                                            name="notes"
                                                            id="notes"
                                                            onChange={handleChange}
                                                            placeholder="Notes"
                                                            className="form-input"
                                                            disabled={loading}
                                                        />
                                                        {errors.notes && <p className='text-red-500 text-sm'>{errors.notes}</p>}
                                                    </div>

                                                    <div>
                                                        <button
                                                            type="submit"
                                                            disabled={loading}
                                                            className="btn btn-primary "
                                                        >
                                                            {loading && <RefreshIcon className='animate-spin w-4 h-4 mr-1' />}
                                                            {!loading && <PaperAirplaneIcon className='rotate-90 w-4 h-4 mr-1' />}
                                                            Submit
                                                        </button>
                                                    </div>
                                                    {flash.error &&
                                                        <p className='text-red-500 bg-red-50 border-red-200 p-4 my-4'>
                                                            {flash.error}
                                                        </p>
                                                    }
                                                    {flash.success &&
                                                        <SuccessModal message={flash.success} />
                                                    }
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
        </>
    )
}
