<script lang="ts">
	export let data;
</script>

<h1 class="font-bold text-xl">Blog Archive</h1>
<p class="mt-2">
	The published articles from my mind, I categorized them by year and reverse chronological order.
	Enjoy your reading!
</p>

<div class="flex flex-col mt-8 gap-4">
	<div>
		<h2 class="font-semibold text-xl">2023</h2>
		<ul>
			{#each data.posts as post}
				<li class="flex justify-between items-center">
					<a class="hover:underline" href="/blog/{post.slug}">{post.title}</a>
					<p class="text-slate-400">{post.date}</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
