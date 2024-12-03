import { CirclePlay, House, Layers2, Youtube } from 'lucide-react'
import React from 'react'

const ExpandedMenuContainer = () => {
    return (
        <div className='mt-2 p-2'>
            <div className='flex h-12 w-52 rounded-xl box-border px-4 py-2 hover:bg-zinc-800 cursor-pointer mb-2 ease-in-out duration-300'>
                <House className='mr-4' />
                <span>Home</span>
            </div>
            <div className='flex h-12 w-52 rounded-xl box-border px-4 py-2 hover:bg-zinc-800 cursor-pointer mb-2 ease-in-out duration-300'>
                <Layers2 className='mr-4' />
                <span>Shorts</span>
            </div>
            <div className='flex h-12 w-52 rounded-xl box-border px-4 py-2 hover:bg-zinc-800 cursor-pointer mb-2 ease-in-out duration-300'>
                <Youtube className='mr-4' />
                <span>Subscriptions</span>
            </div>
            <div className='flex h-12 w-52 rounded-xl box-border px-4 py-2 hover:bg-zinc-800 cursor-pointer mb-2 ease-in-out duration-300'>
                <CirclePlay className='mr-4' />
                <span>YouTube Music</span>
            </div>
        </div>
    )
}

export default ExpandedMenuContainer
