<script lang="ts">
	import { page } from '$app/stores';  
	import { NavigationMenu } from 'bits-ui';
	import NavbarItem from './NavbarItem.svelte';

	const isHome = $page.url.pathname === "/";
</script>

<header 
	class="w-full px-4 lg:px-12 py-6 flex items-center z-10"
	class:absolute={isHome}
>
	<img 
		class="w-auto h-16 mr-16" 
		class:invert={isHome}
		src="/logo.svg" 
		loading="eager" 
		alt="Van Hooff Design Logo"
	/>
	<NavigationMenu.Root>
		<NavigationMenu.List class="lg:flex items-center gap-8 hidden">
			<NavbarItem invert={isHome} href="/">Werkwijze</NavbarItem>
			<NavbarItem invert={isHome} href="/">Projecten</NavbarItem>
			<NavbarItem invert={isHome} href="/">Over ons</NavbarItem>
			<NavbarItem invert={isHome} href="/">Blog</NavbarItem>
			<NavbarItem invert={isHome} href="/">Contact</NavbarItem>
		</NavigationMenu.List>
		<NavigationMenu.Viewport />
	</NavigationMenu.Root>	
</header>

