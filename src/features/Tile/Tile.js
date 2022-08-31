import React, { useState } from 'react';

export default function Tile(props) {
    const [votes, setVotes] = useState(0);
    const [voted, setVoted] = useState(false);
    const [seeMore, setSeeMore] = useState(false);
    const [showComments, setShowComments] = useState(false);


    const title = props.title;
    const postText = props.text;
    const comments = props.comments;
    const image = props.image;

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
                <button data-testid='upvote-button' title='Upvote' onClick={handleUpvote} className='upvote-button' >&#8657;</button>
                <p data-testid='upvotes' title='Votes' className='vote-num'>{votes}</p>
                <button data-testid='downvote-button' title='Downvote' onClick={handleDownvote} className='downvote-button' >&#8659;</button>
            </div>
            <div className='tile-content' title={title} >
                <h1>{title}</h1>
                <div className='below-title'>
                    <p className='postText'>
                        {seeMore ? postText : `${postText.substring(0, 150)}...`}
                    </p>
                    { image !== undefined ? <img src={image} alt={title}/> :  ''}
                </div>
                <div className='content-bar'>
                    <button data-testid='see-more-button' title='See More' className='see-more' onClick={() => setSeeMore(!seeMore)} >{seeMore ? 'See less' : 'See more'}</button>
                    <button className='comments' title='Show Comments' onClick={() => setShowComments(!showComments)} >{showComments ? 'Hide comments' : 'Comments'}</button>
                </div>
                <div className='comments-box'>{showComments ? comments.map(comment => <li key={comment.commentId}>{comment.text} - <a href='#'>{comment.user}</a></li>) : ''}</div>
            </div>

        </article>
    )
}