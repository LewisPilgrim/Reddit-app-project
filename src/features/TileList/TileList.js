import React, { useEffect } from 'react';
import Tile from '../Tile/Tile';
import '../../Images/potrait-flipped.jpg';
import { useSelector, useDispatch } from 'react-redux';

import { selectQuery, selectPosts, addPosts } from '../SearchTerm/searchTermSlice';

// Creates a list of tiles, one for each post in the subreddit
export default function TileList() {
    const filter = useSelector(selectQuery);
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    useEffect(() => { //Thunk which will fetch the data for the posts in the subreddit
        const fetchPosts = async () => {
            const data = await fetch(`https://www.reddit.com/r/${filter}/top.json`);
            const json = await data.json();
            const postArray = json.data.children;
            dispatch(addPosts(postArray))
        }
        fetchPosts()
    },
        [filter]);
    

    return (
        <div>
            {posts ? posts.map((item) => { // Checks whether posts exist under the current search, if they do it will map them with properties, if they do not it will return 'No posts found'
                const itemUrl = item.data.url;
                return (

                    <Tile
                        key={item.data.id}
                        title={item.data.title}
                        author={item.data.author}
                        num_comments={item.data.num_comments}
                        image={itemUrl.includes('.jpg' || '.png' || '.gif') ? itemUrl : undefined}
                        link={itemUrl} votes={item.data.score}
                        comments={item.data.permalink}
                    />
                )
            }) : 'No posts found'}
        </div>
    )
}