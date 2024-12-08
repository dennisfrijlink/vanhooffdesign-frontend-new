<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

    interface Props {
		href: string;
        children: Snippet;
        invert: boolean;
	}

    let { children, href = "/", invert = false }: Props = $props();
</script>

<NavigationMenu.Item>
    <NavigationMenu.Link class="group" href={href}>
        <span class="font-medium group-hover:underline underline-offset-4" class:text-white={invert}>
            {@render children()}
        </span>
    </NavigationMenu.Link>
</NavigationMenu.Item>