<script context="module">
	export async function load({ fetch }) {
		const res = await fetch('/countries.json');
		const { countries } = await res.json();
		return {
			props: { countries }
		};
	}
</script>

<script>
	export let countries;
</script>

{#each countries as { slug, name }}
	<ul>
		<li>
			<a href="/countries/{slug}">
				{name}
			</a>
		</li>
	</ul>
{/each}
