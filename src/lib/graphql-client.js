import { GraphQLClient } from 'graphql-request';
import { API_URL } from './endpoint';

export const strapiClient = new GraphQLClient(API_URL, {
	headers: {}
});
