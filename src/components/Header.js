import React from 'react'
import menu_icon from "../assets/menu_icon.svg"
import youtube_logo from "../assets/youtube_logo.svg"
import { Search, Mic, SquareUserRound } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleMenuState } from './LeftPanelComponent/toggleMenu';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className='bg-[#0f0f0f] w-full h-14'>
            <div className='h-full w-[10%] flex'>
                <div className='h-full w-full' onClick={() => dispatch(toggleMenuState())}>
                    <img className='h-[90%] cursor-pointer w-auto object-fit p-0 white rounded-full ml-2 relative top-0.5 left-1 transition-all ease-in-out hover:bg-zinc-800' src={menu_icon} alt='menu' />
                </div>
                <div className='h-full w-full '>
                    <img className='h-[54%] w-auto relative top-3 right-3 cursor-pointer' src={youtube_logo} alt='youtube-logo' />
                    <h1 className='relative left-5 bottom-5 font-semibold text-2xl text-slate-300 cursor-pointer'>Premium</h1>
                </div>
            </div>
            <div className='h-full w-full flex justify-center items-center'>
                <div className='absolute top-3 left-96 ml-40'>
                    <input type='text' className='rounded-l-full rounded-tl-full border-zinc rounded-bl-full w-[500px] border-2 h-[30px] p-4 bg-[#0f0f0f] border-zinc-700' placeholder='Search' />
                    <button>
                        <Search className='absolute top-0 left-96 ml-[117px] border-2 w-14 pt-[4px] pr-2 hover:bg-zinc-700 bg-zinc-800 pb-2 transition-all ease-in-out border-zinc-700 rounded-r-full rounded-tr-full rounded-br-full' size={'35px'} />
                    </button>
                </div>
                <button className='absolute top-2.5 m-auto right-[580px] border-2 border-zinc-900 bg-zinc-800 p-1.5 mt-0 hover:bg-zinc-700 rounded-full transition-all ease-in-out'>
                    <Mic />
                </button>
            </div>
            <button className='absolute top-4 m-auto right-10'>
                <SquareUserRound />
            </button>
        </div>
    )
}

export default Header
