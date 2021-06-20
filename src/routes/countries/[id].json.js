import { strapiClient } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export async function get(req) {
	const id = req.params.id;
	try {
		const query = gql`
			query CountryQuery($id: ID!) {
				country(id: $id) {
					name
				}
			}
		`;
		const variables = { id };
		const { country } = await strapiClient.request(query, variables);

		return {
			status: 200,
			body: {
				country
			}
		};
	} catch (error) {
		return {
			status: 500,
			body: {
				error: 'A server error occurred'
			}
		};
	}
}

// other CRUDs
export async function post(request) {}
export async function put(request) {}
export async function del(request) {}
