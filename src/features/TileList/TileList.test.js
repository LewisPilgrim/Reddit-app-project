import TileList from './TileList';
import { render } from '@testing-library/react';

describe(TileList, () => {
    it("contains a div element", () => {
        const { getByTitle } = render(<TileList />);
        const box = getByTitle('box');
        expect(box).toBeInTheDocument();
    })
})