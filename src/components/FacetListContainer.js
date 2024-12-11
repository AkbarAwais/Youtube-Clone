import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const categories = [
    'All', 'Music', 'Gaming', 'Live', 'Comedy',
    'Podcasts', 'News', 'Sports', 'Programming',
    'Cooking', 'Travel', 'Fitness', 'Tech'
];

const FacetListContainer = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const isMenuCollapsed = useSelector((store) => store.menu.menuState);

    return (
        <div
            className={`
                relative
                top-14
                ${isMenuCollapsed ? 'left-28' : 'left-72'}
                right-0
                bg-[#0f0f0f]
                flex
                justify-left
                items-center
                overflow-x-auto
                py-2
                px-4
                space-x-3
                scrollbar-hide
                transition-all
                duration-300
            `}
        >
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`
                        px-3
                        py-1
                        rounded-lg
                        text-sm
                        whitespace-nowrap
                        transition-colors
                        duration-200
                        ${activeCategory === category
                            ? 'bg-white text-black'
                            : 'bg-zinc-800 text-white hover:bg-zinc-700'}
                    `}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}

export default FacetListContainer
