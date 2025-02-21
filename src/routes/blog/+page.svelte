<script>
	import BlogCard from '$lib/components/Blog/BlogCard.svelte';
	import Container from '$lib/components/Container/Container.svelte';
	import Title from '$lib/components/Title/Title.svelte';
</script>

<Container>
	<Title class="text-5xl" subtitle="onze blog" centered>Stories & Ideas</Title>
	<div class="md:grid md:grid-cols-2 flex flex-col gap-5 md:gap-16 mt-20">
		<a class="md:col-span-2" href="/blog/test">
			<BlogCard large />
		</a>
		<a href="/blog/test">
			<BlogCard />
		</a>
		<a href="/blog/test">
			<BlogCard />
		</a>
		<a href="/blog/test">
			<BlogCard />
		</a>
		<a href="/blog/test">
			<BlogCard />
		</a>
		<a href="/blog/test">
			<BlogCard />
		</a>
	</div>
</Container>
