<script>
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import Container from '$lib/components/Container/Container.svelte';
</script>

<Container>
	<div class="md:grid md:grid-cols-2 flex flex-col gap-5 md:gap-16">
		<BlogCard large />
		<BlogCard />
		<BlogCard />
		<BlogCard />
		<BlogCard />
	</div>
</Container>
