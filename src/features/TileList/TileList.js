import React, { useState, useEffect } from 'react';
import Tile from '../Tile/Tile';
import '../../Images/potrait-flipped.jpg';

export default function TileList(props) {
    const [posts, setPosts] = useState([]);
    const filter = props.filter;
    useEffect(() => {
            const fetchPosts = async () => {
                console.log(`https://www.reddit.com/r/${filter}/top.json`);
                const data = await fetch(`https://www.reddit.com/r/${filter}/top.json`);
                const json = await data.json();
                const postArray = json.data.children;
                // console.log(postArray);
                setPosts(posts => postArray.map(post => post))
        }
        fetchPosts()
    },
    [filter]);
    // console.log(posts);

    return (
        <div>
            {posts.map((item) => {
                // console.log(item)
                const itemUrl = item.data.url;
                return (
                    
                    <Tile 
                        key={item.data.id} 
                        title={item.data.title} 
                        author={item.data.author} 
                        num_comments={item.data.num_comments} 
                        image={itemUrl.includes( '.jpg' || '.png' || '.gif') ? itemUrl : undefined} 
                        link={itemUrl} votes={item.data.score} 
                        comments={item.data.permalink}
                     />
                )
            })}
            {/* {post.map(post => {
                return (
                    <Tile key={post.index} title='Post title' author='Post author' text='This is the text of the post' />
                )
            })} */}
            {/* {posts.filter((post) => query !== undefined ? post.title.toLowerCase().includes(query.toLowerCase()) : '').map((post) => {
                return <Tile key={post.key} title={post.title} text={post.text} comments={post.comments} image={post.image} />
            })} */}
        </div>
    )
}