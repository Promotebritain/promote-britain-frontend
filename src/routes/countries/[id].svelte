<script context="module">
  export async function load({ fetch, page }) {
    const res = await fetch(`/countries/${page.params.id}.json`)
    if (res.ok) {
      const { country } = await res.json()

      return {
        props: { country },
      }
    }

    const { message } = await res.json()

    return {
      error: new Error(message),
    }
  }
</script>

<script>
  export let country
  let { counties, name } = country
</script>

<h1 class="text-5xl">
  {name}
</h1>
<ul>
  {#each counties as { id, name }}
    <li>
      <a href="/counties/{id}">{name}</a>
    </li>
  {/each}
</ul>
