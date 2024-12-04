import React from 'react'
import { House, Layers2, Youtube, CirclePlay, User, Download } from 'lucide-react'

const CollapsedMenuContainer = () => {
    return (
        <div className='w-16 ml-1 h-full mt-1 border-zinc-800 py-4 flex flex-col items-center'>
            <div className='flex flex-col items-center space-y-2 w-full'>
                {[
                    { Icon: House, label: 'Home' },
                    { Icon: Layers2, label: 'Shorts' },
                    { Icon: Youtube, label: 'Subscriptions' },
                    { Icon: CirclePlay, label: 'YouTube Music' },
                    { Icon: User, label: 'You' },
                    { Icon: Download, label: 'Downloads' }
                ].map(({ Icon, label }) => (
                    <div
                        key={label}
                        className='
                            flex flex-col items-center
                            w-full
                            hover:bg-zinc-800
                            py-2
                            px-3
                            rounded-lg
                            cursor-pointer
                            group
                            transition-colors
                            duration-200
                        '
                    >
                        <Icon className='w-6 h-6 text-white/80 group-hover:text-white' />
                        <span className='text-xs mt-1 text-white/60 group-hover:text-white'>
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CollapsedMenuContainer
