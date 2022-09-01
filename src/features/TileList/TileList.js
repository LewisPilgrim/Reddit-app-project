import React, { useState, useEffect } from 'react';
import Tile from '../Tile/Tile';
import '../../Images/potrait-flipped.jpg';

export default function TileList(props) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
            const fetchPosts = async () => {
                const data = await fetch('https://www.reddit.com/r/popular/top.json');
                const json = await data.json();
                const postArray = json.data.children;
                // console.log(postArray);
                setPosts(posts => postArray.map(post => post))
        }
        fetchPosts()
    },
    []);
    // console.log(posts);
    //  useEffect(() => {
    //     fetch('https://www.reddit.com/r/popular.json').then(postsResponse => setPosts(postsResponse.data));
    //  }, []);
    const query = props.filter;
    console.log(posts);
    // console.log(query);

    const addPost = ({ id, title, text, comments }) => {
        setPosts([...posts, {id, title, text, comments }])
    }

    return (
        <div>
            {posts.map((item) => {
                console.log(item)
                return (
                    
                    <Tile key={item.data.id} title={item.data.title} author={item.data.author} num_comments={item.data.num_comments} image={item.data.url !== undefined ? item.data.url : undefined} votes={item.data.score} clicked={item.data.clicked} />
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