import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';

beforeEach(() => {
    const mockSuccessResponse = [{ name: 'Test', surname: 'Test', email: 'Test' }];
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
        json: () => mockJsonPromise,
    });
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
});

test('Renders a form with 3 inputs', () => {
    render(<Register />);
    const inputElements = screen.getAllByRole('textbox');
    expect(inputElements.length).toEqual(3);
});

test('Renders a form that sends data to API via fetch on button click', () => {
    render(<Register />);
    const inputElements = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(inputElements[0], { target: { value: 'test' } });
    fireEvent.change(inputElements[1], { target: { value: 'test2' } });
    fireEvent.change(inputElements[2], { target: { value: 'test@test.com' } });
    fireEvent.click(button);
    expect(fetch).toBeCalled();
});

test('Does not send data and shows alert if not all fields are filled', () => {
    const { container } = render(<Register />);
    const inputElements = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    fireEvent.change(inputElements[0], { target: { value: 'test' } });
    fireEvent.change(inputElements[1], { target: { value: 'test2' } });
    fireEvent.click(button);
    expect(fetch).not.toBeCalled();
    expect(container.querySelectorAll('.alert-danger').length).toEqual(1);
});
