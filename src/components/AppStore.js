import { configureStore } from "@reduxjs/toolkit";
import toggleMenu from "./LeftPanelComponent/toggleMenu";

const AppStore = configureStore({
    reducer: {
        menu: toggleMenu
    }
})

export default AppStore;
