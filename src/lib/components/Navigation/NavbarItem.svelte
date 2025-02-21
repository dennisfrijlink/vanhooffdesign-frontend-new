<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { page } from '$app/stores';

	interface Props {
		href: string;
		children: Snippet;
		invert: boolean;
	}

	let { children, href = '/', invert = false }: Props = $props();
</script>

<NavigationMenu.Item class="flex max-sm:border-b">
	<NavigationMenu.Link class="group flex-1 p-5 lg:p-0" {href}>
		<span
			class={`font-semibold underline-offset-4 lg:font-medium lg:group-hover:underline ${invert ? 'lg:text-white' : 'text-black'}`}
		>
			{@render children()}
		</span>
	</NavigationMenu.Link>
</NavigationMenu.Item>
