import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from '@env';

// I have got and error for apollo client
//undefined is not an object (evaluating 'obsQuery.reobserve.bind')
// that's why I used the new client
export const client = () => {
	const cache = new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					launchesPast: {
						keyArgs: false,
						merge(existing = [], incoming) {
							return [...existing, ...incoming];
						},
					},
				},
			},
		},
	});
	const link = new HttpLink({
		uri: API_URL,
	});
	return new ApolloClient({
		cache,
		link,
	});
};
