import React from 'react'
import Header from '../Header'
import { Provider } from 'react-redux'
import AppStore from '../AppStore'
import MainVideoContent from './MainVideoContent'
import RightVideoContent from './RightVideoContent'

const MainWatchPage = () => {
    return (
        <Provider store={AppStore}>
            <div className='bg-[#0f0f0f] w-full h-screen flex flex-col text-white'>
                <Header />
                <MainVideoContent />
                {/* <RightVideoContent /> */}
            </div>
        </Provider>

    )
}

export default MainWatchPage
