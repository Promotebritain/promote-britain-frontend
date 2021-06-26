import { strapiClient } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function get(_req) {
  try {
    const { companies } = await strapiClient.request(gql`
      {
        companies {
          id
          name
          image {
            width
            height
            url
          }
          visible
          url
          phone
          description
          counties {
            id
            name
          }
        }
      }
    `)

    return {
      status: 200,
      body: {
        companies,
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
