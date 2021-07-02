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

<ul
  class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
>
  {#each countries as { id, name, image }}
    <a href="/countries/{id}">
      <li
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 cursor-pointer"
      >
        <article class="flex-1 flex flex-col p-8">
          <div
            class="bg-gray-100 rounded-xl relative overflow-hidden shadow-md"
          >
            <div
              class="flex-shrink-0 mx-auto rounded-xl overflow-hidden"
            >
              <img
                src={image.url}
                alt={name}
                class="h-80 object-contain"
              />
            </div>
          </div>
          <h3 class="mt-6 text-gray-900 text-lg font-medium">
            {name}
          </h3>
        </article>
      </li>
    </a>
  {/each}
</ul>
