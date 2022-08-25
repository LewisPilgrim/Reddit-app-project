import React, { useState } from 'react';

export default function Tile() {
    const [votes, setVotes] = useState(0);
    const [voted, setVoted] = useState(false);
    const [seeMore, setSeeMore] = useState(false);
    const [showComments, setShowComments] = useState(false);

    
    const title = "This is the title of the post";    
    const postText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const comments = [{text: 'This is cool', user: 'Mike'}, {text: 'I disagree', user: 'Ryan'}];

    const handleUpvote = (event) => {
        if (!voted) {
            const newVotes = votes + 1;
            setVotes(newVotes);
            setVoted(true);
            event.target.classList.add("upvote-button-used");
        }

    }

    const handleDownvote = (event) => {
        if (!voted) {
            const newVotes = votes - 1;
            setVotes(newVotes);
            setVoted(true);
            event.target.classList.add("downvote-button-used");
        }

    }

    return (
        <article className='tile'>
            <div className='votes-section'>
                <button data-testid='upvote-button' onClick={handleUpvote} className='upvote-button' >&#8657;</button>
                <p data-testid='upvotes' className='vote-num'>{votes}</p>
                <button data-testid='downvote-button' onClick={handleDownvote} className='downvote-button' >&#8659;</button>
            </div>
            <div className='tile-content'>
                <h1>{title}</h1>
                <p title='postText'>
                    { seeMore ? postText : `${postText.substring(0, 150)}...`}
                </p>
                <div className='content-bar'>
                    <button data-testid='see-more-button' className='see-more' onClick={() => setSeeMore(!seeMore)} >{seeMore ? 'See less' : 'See more'}</button>
                    <button className='comments' onClick={() => setShowComments(!showComments)} >{showComments ? 'Hide comments' : 'Comments'}</button>
                </div>
                <div className='comments-box'>{ showComments ? comments.map(comment => <li>{comment.text} - <a href='#'>{comment.user}</a></li>) : ''}</div>
            </div>

        </article>
    )
}