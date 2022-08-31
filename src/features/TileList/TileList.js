import React, { useState } from 'react';
import Tile from '../Tile/Tile';
import '../../Images/potrait-flipped.jpg';
import myData from '../../data.json';

export default function TileList(props) {
    const ids = [];
    ids.push(myData);
    const [posts, setPosts] = useState(ids[0]);
    const query = props.filter;
    console.log(posts[0].title.toLowerCase());
    console.log(query);

    const addPost = ({ id, title, text, comments }) => {
        setPosts([...posts, {id, title, text, comments }])
    }

    return (
        <div>
            {posts.filter((post) => query !== undefined ? post.title.toLowerCase().includes(query.toLowerCase()) : '').map((post) => {
                return <Tile key={post.key} title={post.title} text={post.text} comments={post.comments} image={post.image} />
            })}
        </div>
    )
}