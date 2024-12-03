import { createSlice } from "@reduxjs/toolkit";

const toggleMenu = createSlice({
    name: 'menu',
    initialState: {
        menuState: false
    },
    reducers: {
        toggleMenuState: (state, action) => {
            state.menuState = !state.menuState;
        }
    }
});

export const { toggleMenuState } = toggleMenu.actions;
export default toggleMenu.reducer;
