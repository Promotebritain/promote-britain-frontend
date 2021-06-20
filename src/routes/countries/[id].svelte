<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`/countries/${page.params.id}.json`);
		if (res.ok) {
			const { country } = await res.json();

			return {
				props: { country }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script>
	export let country;
</script>

{country.name}
