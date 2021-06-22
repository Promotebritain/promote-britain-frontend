<script context="module">
  export const hydrate = false

  export async function load({ fetch }) {
    const res = await fetch('/countries.json')
    if (res.ok) {
      const { countries } = await res.json()

      return {
        props: { countries },
      }
    }

    const { message } = await res.json()

    return {
      error: new Error(message),
    }
  }
</script>

<script>
  export let countries
</script>

<ul>
  {#each countries as { id, name }}
    <li><a href="/countries/{id}">{name}</a></li>
  {/each}
</ul>
