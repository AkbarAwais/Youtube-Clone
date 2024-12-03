import React from 'react'
import CollapsedMenuContainer from './CollapsedMenuContainer'
import ExpandedMenuContainer from './ExpandedMenuContainer'
import { useSelector } from 'react-redux'

const LeftPanelContainer = () => {
    const isMenuCollapsed = useSelector((store) => store.menu.menuState);
    return (
        <div className=''>
            {
                isMenuCollapsed ? <CollapsedMenuContainer /> : <ExpandedMenuContainer />
            }

        </div>
    )
}

export default LeftPanelContainer
