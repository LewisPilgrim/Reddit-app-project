import React, { useState } from 'react';

export default function Tile(props) {
    const score = props.votes;
    const [votes, setVotes] = useState(score);
    const [voted, setVoted] = useState(false);


    const title = props.title;
    const author = props.author;
    const comments = props.comments;
    const image = props.image;
    const link = props.link;
    const num_comments = props.num_comments;

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
                <p data-testid='upvotes' title='Votes' className='vote-num'>{`${(score / 1000).toFixed()}k`}</p>
                <button data-testid='downvote-button' title='Downvote' onClick={handleDownvote} className='downvote-button' >&#8659;</button>
            </div>
            <div className='tile-content' title={title} >
                <h1>{title}<span className='author-name'>{author}</span></h1>
                <div className='below-title'>
                    {image !== undefined ? <img src={image} alt='Not available' /> : ''}
                </div>
                <div className='content-bar'>
                    <a href={link} target='_blank' rel="noreferrer"><button data-testid='see-more-button' title='See More' className='see-more'  >See more</button></a>
                    <a href={`https://www.reddit.com${comments}`} target='_blank' rel='noreferrer'><button className='comments' title='Show Comments'>Comments ({num_comments})</button></a>
                </div>
            </div>

        </article>
    )
}