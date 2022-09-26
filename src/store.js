import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from '../src/features/SearchTerm/searchTermSlice';

export const store = configureStore({
    reducer: {
        query: searchTermReducer,
    }
})
