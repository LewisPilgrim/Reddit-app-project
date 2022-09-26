import { createSlice } from '@reduxjs/toolkit';

const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {
        query: '', // Keeps track of what the user has entered into the search bar
        posts: [] // Stores the posts for the current search term
    },
    reducers: {
        newSearchTerm: (state, action) => { // Updates query when a new search term is entered
            state.query = action.payload;
        },
        addPosts: (state, action) => { // Updates the post list in keeping with new searches
            state.posts = action.payload;
        }
    }
})

export const { newSearchTerm, addPosts } = searchTermSlice.actions;

export const selectQuery = state => state.query.query;
export const selectPosts = state => state.query.posts;

export default searchTermSlice.reducer;