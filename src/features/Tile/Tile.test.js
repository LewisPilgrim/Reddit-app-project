import Tile from './Tile';
import { render, fireEvent } from '@testing-library/react';

describe(Tile, () => {
    it("renders an article div to the screen", () => {
        const { getByRole } = render(<Tile />);
        const divShows = getByRole('article');
        expect(divShows).toBeInTheDocument();
    });

    it("renders a heading for the article div", () => {
        const { getByRole } = render(<Tile />);
        const title = getByRole('heading');
        expect(title).toBeInTheDocument;
    });

    it("renders text content for the article div", () => {
        const { getByTitle } = render(<Tile />);
        const text = getByTitle('postText');
        expect(text).toBeInTheDocument;
    });

    describe("Vote counter", () => {
        it("renders a number for upvotes", () => {
            const { getByTestId } = render(<Tile />);
            const votes = Number(getByTestId('upvotes').textContent);
            expect(votes).toBe(0);
        });
    
        it("increases the number for upvotes when the upvote button is clicked", () => {
            const { getByTestId, getByRole } = render(<Tile />);
            const button = getByTestId('upvote-button');
            const votes = Number(getByTestId('upvotes').textContent);
            expect(votes).toBe(0);
            fireEvent.click(button);
            const newVotes = Number(getByTestId('upvotes').textContent);
            expect(newVotes).toBe(1);
        });
    
        it("decreases the number for upvotes when the downvote button is clicked", () => {
            const { getByTestId } = render(<Tile />);
            const downvoteButton = getByTestId('downvote-button');
            const votes = Number(getByTestId('upvotes').textContent);
            expect(votes).toBe(0);
            fireEvent.click(downvoteButton);
            const newVotes = Number(getByTestId('upvotes').textContent);
            expect(newVotes).toBe(-1);
        });

        it("only allows votes to be changed once", () => {
            const { getByTestId } = render(<Tile />);
            const downvoteButton = getByTestId('downvote-button');
            const upvoteButton = getByTestId('upvote-button');
            const votes = Number(getByTestId('upvotes').textContent);
            expect(votes).toBe(0);
            fireEvent.click(downvoteButton);
            const newVotesFirstClick = Number(getByTestId('upvotes').textContent);
            expect(newVotesFirstClick).toBe(-1);
            fireEvent.click(downvoteButton);
            const newVotesSecondClick = Number(getByTestId('upvotes').textContent);
            expect(newVotesSecondClick).toBe(-1);
            fireEvent.click(upvoteButton);
            const newVotesThirdClick = Number(getByTestId('upvotes').textContent);
            expect(newVotesThirdClick).toBe(-1);
        })
    });
    
    describe("Post Content", () => {
        it("changes text to 'see less' when see more button is clicked", () => {
            const { getByTestId } = render(<Tile />);
            const seeMoreButton = getByTestId('see-more-button');
            expect(seeMoreButton.textContent).toBe('See more');
            fireEvent.click(seeMoreButton);
            const seeLessButton = getByTestId('see-more-button');
            expect(seeLessButton.textContent).toBe('See less');        
        });

        
    })
})