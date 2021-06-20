import { strapiClient } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export async function get(_req) {
	try {
		const { countries } = await strapiClient.request(gql`
			{
				countries {
					id
					slug
					name
					image {
						formats
						name
						alternativeText
						width
						height
						url
					}
				}
			}
		`);

		return {
			status: 200,
			body: {
				countries
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
