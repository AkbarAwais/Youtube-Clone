import React from 'react'
import { useSelector } from 'react-redux'
import CollapsedMenuContainer from './CollapsedMenuContainer'
import ExpandedMenuContainer from './ExpandedMenuContainer'

const LeftPanelContainer = () => {
    const isMenuCollapsed = useSelector((store) => store.menu.menuState);

    return (
        <div
            className={`
                fixed top-16 left-0 h-[calc(100vh-4rem)]
                ${isMenuCollapsed ? 'w-16' : 'w-60 overflow-y-auto overflow-x-hidden'}
                bg-[#0f0f0f]
                z-20
                custom-scrollbar
            `}
        >
            {isMenuCollapsed ? <CollapsedMenuContainer /> : <ExpandedMenuContainer />}
        </div>
    )
}

export default LeftPanelContainer
