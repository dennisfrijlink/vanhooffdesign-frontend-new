<script lang="ts">
	import { page } from '$app/stores';
	import { NavigationMenu } from 'bits-ui';
	import { MenuIcon, XIcon } from 'lucide-svelte';
	import NavbarItem from './NavbarItem.svelte';
	import { onMount } from 'svelte';

	let isAbsolutePositioned: boolean = $state(true);
	let mobileVisible: boolean = $state(false);

	const pagesWithAbsoluteNav: string[] = ['/', '/projecten/[slug]'];

	onMount(() => {
		page.subscribe(() => {
			mobileVisible = false;
		});
	});

	$effect(() => {
		isAbsolutePositioned = $page.route.id ? pagesWithAbsoluteNav.includes($page.route.id) : false;
		if (mobileVisible) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'initial';
		}
	});
</script>

<header
	class={`
		w-full px-4 lg:px-12 py-4 justify-between lg:justify-start flex items-center z-10 absolute border-black border-opacity-10 border-b-0 bg-transparent 
		${mobileVisible && 'bg-white z-50'}
	`}
	class:!relative={!isAbsolutePositioned}
	class:!border-b={!isAbsolutePositioned}
>
	<a href="/">
		<img
			class={`w-auto relative h-12 lg:h-14 lg:mr-16 z-50 ${isAbsolutePositioned && !mobileVisible ? 'invert' : ''}`}
			src="/logo.svg"
			loading="eager"
			alt="Van Hooff Design Logo"
		/>
	</a>
	<NavigationMenu.Root
		class={`lg:block max-sm:fixed max-sm:pt-24 max-sm:w-full max-sm:h-full z-40 left-0 top-0 max-sm:bg-white ${mobileVisible ? 'block' : 'hidden'}`}
		role="navigation"
	>
		<NavigationMenu.List class="lg:flex lg:items-center lg:gap-8">
			<NavbarItem invert={isAbsolutePositioned} href="/werkwijze">Werkwijze</NavbarItem>
			<NavbarItem invert={isAbsolutePositioned} href="/projecten">Projecten</NavbarItem>
			<NavbarItem invert={isAbsolutePositioned} href="/over-ons">Over ons</NavbarItem>
			<NavbarItem invert={isAbsolutePositioned} href="/blog">Blog</NavbarItem>
			<NavbarItem invert={isAbsolutePositioned} href="/contact">Contact</NavbarItem>
		</NavigationMenu.List>
		<NavigationMenu.Viewport />
	</NavigationMenu.Root>
	<button class="lg:hidden relative z-50" onclick={() => (mobileVisible = !mobileVisible)}>
		<MenuIcon
			class={`${mobileVisible ? 'hidden' : 'block'} ${isAbsolutePositioned ? 'stroke-white' : 'stroke-black'}`}
		/>
		<XIcon class={mobileVisible ? `stroke-black` : 'hidden'}></XIcon>
	</button>
</header>
