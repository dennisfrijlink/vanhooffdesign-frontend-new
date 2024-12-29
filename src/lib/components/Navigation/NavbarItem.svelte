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

<NavigationMenu.Item class="flex max-sm:border-b">
    <NavigationMenu.Link class="group flex-1 p-5 lg:p-0" href={href}>
        <span class={`lg:font-medium font-semibold lg:group-hover:underline underline-offset-4 ${invert ? "lg:text-white" : "text-black" }`}>
            {@render children()}
        </span>
    </NavigationMenu.Link>
</NavigationMenu.Item>