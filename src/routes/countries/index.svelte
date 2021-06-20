<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/countries.json');
		if (res.ok) {
			const { countries } = await res.json();

			return {
				props: { countries }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script>
	export let countries;
</script>

{#each countries as { id, slug, name }}
	<ul>
		<li>
			<a href="/countries/{id}">
				{name}
			</a>
		</li>
	</ul>
{/each}
