<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('/search.json')
    if (res.ok) {
      const search = await res.json()

      return {
        props: search,
      }
    }

    const { message } = await res.json()

    return {
      error: new Error(message),
    }
  }
</script>

<script>
  import Fuse from 'fuse.js'

  export let search
  let { countries, counties, companies } = search
  let options = {
    keys: [
      'name',
      'county.name',
      'companies.name',
      'companies.description',
    ],
    includeScore: true,
    includeMatches: true,
    threshold: 0.2,
  }
  let fuse = new Fuse(
    [...countries, ...counties, ...companies],
    options
  )
  let query = ''
  $: results = fuse.search(query)
</script>

<input type="text" bind:value={query} class="border" />

{#each results as result}
  <ul>
    <li>
      <a
        href={`${result.item.__typename.toLowerCase()}/${
          result.item.id
        }`}
      >
        {result.item.name}
      </a>
    </li>
  </ul>
{/each}
