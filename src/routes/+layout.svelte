<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="flex flex-col items-center h-screen gap-8 container mx-auto">
	<Header />
	<div class="flex-grow">
		<slot />
	</div>
	<Footer />
</div>
