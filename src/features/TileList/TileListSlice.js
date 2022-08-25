import { createSlice } from '@reduxjs/toolkit';

export const tileListSlice = createSlice({
    name: 'tileList',
    initialState: {
        tiles: [],
    },
});

export const selectTileList = (state) => state.tileList.byTileId;

export default tileListSlice.reducer;