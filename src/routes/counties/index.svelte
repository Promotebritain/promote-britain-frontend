<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/counties.json');
		if (res.ok) {
			const { counties } = await res.json();

			return {
				props: { counties }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script>
	export let counties;
</script>

{#each counties as { id, slug, name }}
	<ul>
		<li>
			<a href="/counties/{id}">
				{name}
			</a>
		</li>
	</ul>
{/each}
