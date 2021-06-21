<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/companies.json');
		if (res.ok) {
			const { companies } = await res.json();

			return {
				props: { companies }
			};
		}

		const { message } = await res.json();

		return {
			error: new Error(message)
		};
	}
</script>

<script>
	export let companies;
</script>

{#each companies as { id, slug, name }}
	<ul>
		<li>
			<a href="/companies/{id}">
				{name}
			</a>
		</li>
	</ul>
{/each}
