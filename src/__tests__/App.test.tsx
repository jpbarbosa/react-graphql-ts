import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import { client } from '../apollo';
import { App } from '../components/App';

test('renders learn react link', () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
  const linkElement = screen.getByText(/React Basic CRUD/i);
  expect(linkElement).toBeInTheDocument();
});
