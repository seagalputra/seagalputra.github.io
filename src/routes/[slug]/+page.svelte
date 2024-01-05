<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<hgroup class="flex flex-col gap-2">
		<p class="text-slate-400">{formatDate(data.meta.date)}</p>
		<h1 class="font-bold text-2xl">{data.meta.title}</h1>
	</hgroup>

	<div class="prose max-w-none mt-4">
		<svelte:component this={data.content} />
	</div>
</article>
