import { CirclePlay, House, Layers2, Youtube, History, Library, Clock, ThumbsUp } from 'lucide-react'
import React from 'react'

const ExpandedMenuContainer = () => {
    const menuItems = [
        { Icon: House, label: 'Home' },
        { Icon: Layers2, label: 'Shorts' },
        { Icon: Youtube, label: 'Subscriptions' },
        { Icon: CirclePlay, label: 'YouTube Music' },
        { Icon: Library, label: 'Library' },
        { Icon: History, label: 'History' },
        { Icon: Clock, label: 'Watch Later' },
        { Icon: ThumbsUp, label: 'Liked Videos' }
    ];

    return (
        <div className='mt-2 p-2 h-full'>
            {menuItems.map(({ Icon, label }) => (
                <div
                    key={label}
                    className='
                        flex
                        items-center
                        h-12
                        w-full
                        rounded-xl
                        px-4
                        py-2
                        hover:bg-zinc-800
                        cursor-pointer
                        mb-2
                        ease-in-out
                        duration-300
                        group
                    '
                >
                    <Icon className='mr-4 text-white/80 group-hover:text-white' />
                    <span className='text-white/80 group-hover:text-white'>{label}</span>
                </div>
            ))}
        </div>
    )
}

export default ExpandedMenuContainer
