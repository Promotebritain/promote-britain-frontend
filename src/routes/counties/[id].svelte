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
</script>

{county.name}
