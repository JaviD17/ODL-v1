import { createClient } from '@urql/svelte';

export default createClient({
	url: 'https://graphql.us.fauna.com/graphql',

	fetchOptions: () => {
		const token = import.meta.env.VITE_PUBLIC_FAUNA_KEY;
		return {
			headers: { authorization: token ? `Bearer ${token}` : '' }
		};
	}
});
