<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import NavbarItem from './NavbarItem.svelte';
</script>

<NavigationMenu.Root>
	<NavigationMenu.List class="lg:flex gap-4 hidden">
		<NavbarItem href="/">Werkwijze</NavbarItem>
		<NavbarItem href="/">Projecten</NavbarItem>
		<NavbarItem href="/">Over ons</NavbarItem>
		<NavbarItem href="/">Blog</NavbarItem>
		<NavbarItem href="/">Contact</NavbarItem>
	</NavigationMenu.List>
	<NavigationMenu.Viewport />
</NavigationMenu.Root>
