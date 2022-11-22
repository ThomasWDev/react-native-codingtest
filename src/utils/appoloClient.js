import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { API_URL } from '@env';

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
