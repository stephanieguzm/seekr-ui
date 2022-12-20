import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from '../src/components/App/App'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://seekr-mk2.fly.dev/graphql/',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Router>
)
