import React from 'react'
import Header from './Header'
import LeftPanelContainer from './LeftPanelComponent/LeftPanelContainer'
import { Provider } from 'react-redux'
import AppStore from './AppStore'

const Body = () => {
    return (
        <Provider store={AppStore}>
            <div className='bg-[#0f0f0f] w-screen h-screen text-white'>
                <Header />
                <LeftPanelContainer />
            </div>
        </Provider>
    )
}

export default Body
