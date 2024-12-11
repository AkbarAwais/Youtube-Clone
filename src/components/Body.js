import React, { useRef } from 'react'
import { Provider } from 'react-redux'
import Header from './Header'
import AppStore from './AppStore'
import LeftPanelContainer from "./LeftPanelComponent/LeftPanelContainer"
import FacetListContainer from "./FacetListContainer"
import MainVideoCardContainer from './MainVideoCardContainer'

const Body = () => {
    const scrollRef = useRef();
    return (
        <Provider store={AppStore}>
            <div className='bg-[#0f0f0f] w-full h-screen flex flex-col text-white'>
                {/* Header */}
                <Header />

                {/* Main Content Area */}
                <div className='flex flex-1 overflow-hidden'>
                    {/* Sidebar */}
                    <LeftPanelContainer />

                    {/* Video Feed / Main Content */}
                    <div ref={scrollRef} className='flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar'>
                        <FacetListContainer />
                        <MainVideoCardContainer ref={scrollRef} />
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Body
