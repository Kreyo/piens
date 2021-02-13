import { render, screen } from '@testing-library/react';
import List from './List';

test('Renders a list of users fetched from API', () => {
    const mockSuccessResponse = [{ name: 'Test', surname: 'Test', email: 'Test' }];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    render(<List />);
    const tableElements = screen.getAllByRole('row');
    expect(tableElements.length).toEqual(1);
});
