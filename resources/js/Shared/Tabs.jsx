import { CheckIcon, StarIcon, StopIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs({selection, setSelection}) {

    const [tabs, setTabs] = useState([
        { name: 'Going', icon: CheckIcon, current: true, activeColor: 'bg-blue-500 text-white hover:bg-blue-700' },
        { name: 'Interested', icon: StarIcon, current: false, activeColor: 'bg-yellow-500 text-white hover:bg-yellow-700' },
        { name: 'Not Going', icon: StopIcon, current: false, activeColor: 'bg-red-500 text-white hover:bg-red-700' },
    ])

    function changeValue(event, name) {
        event.preventDefault();
        setSelection(tabs.find((tab) => tab.name === name));
    }

    useEffect(()=> {
        const updatedTabs = tabs.map(tab => {
            if(tab.name === selection.name) {
                tab.current = true;
            }
            else {
                tab.current = false;
            }
            return tab;
        })
        setTabs(updatedTabs);

    },[selection])


    return (
        <nav className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
            {tabs.map((tab, tabIdx) => (
                <div
                    onClick={(event) => changeValue(event, tab.name)}
                    key={tab.name}
                    className={classNames(
                        tab.current ? tab.activeColor : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50',
                        tabIdx === 0 ? 'rounded-l-lg' : '',
                        tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                        'cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center focus:z-10'
                    )}
                    aria-current={tab.current ? 'page' : undefined}
                >
                    <tab.icon className="w-5 h-5 mb-1 mx-auto stroke-current" />
                    <span>{tab.name}</span>
                </div>
            ))}
        </nav>
    )
}
