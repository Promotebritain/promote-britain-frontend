import { strapiClient } from '$lib/graphql-client'
import { gql } from 'graphql-request'

export async function get(_req) {
  try {
    const search = await strapiClient.request(gql`
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
        counties {
          id
          name
          slug
        }
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
          county {
            id
            name
          }
        }
      }
    `)

    return {
      status: 200,
      body: {
        search,
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
