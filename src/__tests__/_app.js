import React from 'react';
import App from '../pages/_app';
import { render, waitFor, screen } from 'test-utils';
import '@testing-library/jest-dom/extend-expect';

jest.mock('swr', () => ({
  SWRConfig: ({ children }) => <div> {children} </div>
}))

describe('_app', () => {

  test('should render without error', async () => {
    const ComponentMock = (props) => <div {...props}> inpoin </div>;
    render(<App Component={ComponentMock} pageProps={{}} />);

    
    await waitFor(() => {
      expect(screen.getByText('inpoin')).toBeInTheDocument();
    });

    
  });

});

