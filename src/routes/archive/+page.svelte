<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<h1 class="font-bold text-xl">Blog Archive</h1>
<p class="mt-2">
	The published articles from my mind, I categorized them by year and reverse chronological order.
	Enjoy your reading!
</p>

<div class="flex flex-col mt-8 gap-4">
	{#each data.posts as section}
		<div>
			<h2 class="font-semibold text-xl">{section.year}</h2>
			<ul class="mt-2">
				{#each section.posts as post}
					<li class="flex justify-between items-center">
						<a class="hover:underline" href={post.slug}>{post.title}</a>
						<p class="text-slate-400">{formatDate(post.date)}</p>
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
