import { strapiClient } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function get(_req) {
  try {
    const { counties } = await strapiClient.request(gql`
      {
        counties {
          id
          name
          slug
        }
      }
    `)

    return {
      status: 200,
      body: {
        counties,
      },
    }
  } catch (error) {
    return {
      status: 500,
      body: {
        error: 'A server error occurred',
      },
    }
  }
}

// other CRUDs
export async function post(request) {}
export async function put(request) {}
export async function del(request) {}
