<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="flex flex-col h-screen gap-8 container mx-auto max-w-[768px]">
	<Header />
	<div class="flex-grow font-mono">
		<slot />
	</div>
	<Footer />
</div>
