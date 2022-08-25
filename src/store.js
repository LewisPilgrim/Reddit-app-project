import { configureStore } from '@reduxjs/toolkit';

import tileListReducer from './features/TileList/TileListSlice.js';

const store = configureStore({
    reducer: {
        tileList: tileListReducer
    }
})

export default store;