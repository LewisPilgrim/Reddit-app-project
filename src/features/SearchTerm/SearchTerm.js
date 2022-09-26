import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { setFilteredPosts, selectQuery, updateQuery } from '../../AppSlice';
import { } from './SearchTermSlice';

export default function SearchTerm() {

    const dispatch = useDispatch();
    const query = useSelector(selectQuery);

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            dispatch(updateQuery(e.target.value));
            // dispatch(setFilteredPosts(query));
        // console.log(query);
            
        }
    }


    return (
        <div>
            <input name='searchBar' type='text' placeholder='Search' id='queryBox' onKeyUp={handleSubmit}></input>
        </div>
    )
}