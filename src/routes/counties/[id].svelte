<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`/counties/${page.params.id}.json`);
		if (res.ok) {
			const { county } = await res.json();

			return {
				props: { county }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script>
	export let county;
	let { companies, name } = county;
</script>

<h1 class="text-5xl">
	{name}
</h1>

<ul>
	{#each companies as { id, name }}
		<li><a href="/companies/{id}">{name}</a></li>
	{/each}
</ul>
