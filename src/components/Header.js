import React, { useState } from 'react'
import menu_icon from "../assets/menu_icon.svg"
import youtube_logo from "../assets/youtube_logo.svg"
import { Search, Mic, SquareUserRound, Cast } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleMenuState } from './LeftPanelComponent/toggleMenu';

const Header = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className='fixed top-0 left-0 right-0 bg-[#0f0f0f] h-16 flex items-center justify-between px-4 z-50'>
            <div className='flex items-center'>
                <div
                    onClick={() => dispatch(toggleMenuState())}
                    className='p-2 hover:bg-zinc-800 rounded-full cursor-pointer transition-colors'
                >
                    <img
                        className='h-8 w-8 object-contain'
                        src={menu_icon}
                        alt='menu'
                    />
                </div>
                <div className='flex items-center'>
                    <img
                        className='h-[36px] w-[90px] object-contain'
                        src={youtube_logo}
                        alt='youtube-logo'
                    />
                    <span className='text-lg text-gray-300'>YouTube</span>
                </div>
            </div>

            <div className='flex items-center'>
                <div className='flex'>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='
                            w-[500px]
                            bg-[#0f0f0f]
                            border-2
                            border-zinc-700
                            rounded-l-full
                            px-4
                            py-1.5
                            outline-none
                            focus:border-blue-500
                        '
                        placeholder='Search'
                    />
                    <button
                        className='
                            bg-zinc-800
                            border-2
                            border-zinc-700
                            rounded-r-full
                            px-4
                            hover:bg-zinc-700
                            transition-colors
                        '
                    >
                        <Search className='text-white' />
                    </button>
                </div>
                <button
                    className='
                        ml-4
                        bg-zinc-800
                        p-2
                        rounded-full
                        hover:bg-zinc-700
                        transition-colors
                    '
                >
                    <Mic />
                </button>
            </div>

            <div className='flex items-center space-x-4'>
                <button className='hover:bg-zinc-800 p-2 rounded-full transition-colors'>
                    <Cast />
                </button>
                <button>
                    <SquareUserRound className='text-white/70 hover:text-white' />
                </button>
            </div>
        </div>
    )
}

export default Header
