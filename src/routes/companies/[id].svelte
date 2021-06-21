<script context="module">
	export async function load({ fetch, page }) {
		const res = await fetch(`/companies/${page.params.id}.json`);
		if (res.ok) {
			const { company } = await res.json();

			return {
				props: { company }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script>
	export let company;
</script>

{company.name}
