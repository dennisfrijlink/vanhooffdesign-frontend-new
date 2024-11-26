<script lang="ts">
	import { NavigationMenu } from 'bits-ui';
	import type { Snippet } from 'svelte';

    interface Props {
		href: string;
        children: Snippet;
	}

    let { children, href = "/" }: Props = $props();
</script>

<NavigationMenu.Item>
    <NavigationMenu.Link class="font-medium" href={href}>
        {@render children()}
    </NavigationMenu.Link>
</NavigationMenu.Item>