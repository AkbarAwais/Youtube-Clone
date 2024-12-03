import React from 'react'
import { House, Layers2, Youtube, CirclePlay, User, Download } from 'lucide-react'

const CollapsedMenuContainer = () => {
    return (
        <div className='fixed left-0 top-18 w-20 h-screen border-gray-200 py-4 flex flex-col items-center text-clip'>
            <div className='flex flex-col items-center space-y-4 w-full text-clip'>
                <div className='flex flex-col items-center hover:bg-zinc-800 py-2 px-3 rounded-lg cursor-pointer group'>
                    <House className='w-6 h-6' />
                    <span className='text-xs mt-1 '>Home</span>
                </div>

                <div className='flex flex-col items-center hover:bg-zinc-800 py-2 px-3 rounded-lg cursor-pointer group'>
                    <Layers2 className='w-6 h-6' />
                    <span className='text-xs mt-1'>Shorts</span>
                </div>

                <div className='flex flex-col items-center hover:bg-zinc-800 py-2 px-3 rounded-lg cursor-pointer group'>
                    <Youtube className='w-6 h-6' />
                    <span className='text-xs  mt-1'>Subscriptions</span>
                </div>

                <div className='flex flex-col items-center hover:bg-zinc-800 py-2 px-3 rounded-lg cursor-pointer group'>
                    <CirclePlay className='w-6 h-6' />
                    <span className='text-xs text-nowrap  mt-1'>YouTube Music</span>
                </div>

                <div className='flex flex-col items-center hover:bg-zinc-800 py-2 px-3 rounded-lg cursor-pointer group'>
                    <User className='w-6 h-6' />
                    <span className='text-xs  mt-1'>You</span>
                </div>

                <div className='flex flex-col items-center hover:bg-zinc-800 py-2 px-3 rounded-lg cursor-pointer group'>
                    <Download className='w-6 h-6' />
                    <span className='text-xs  mt-1'>Downloads</span>
                </div>
            </div>
        </div>
    )
}

export default CollapsedMenuContainer
