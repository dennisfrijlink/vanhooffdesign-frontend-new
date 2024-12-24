<script lang="ts">
    import { Button } from "bits-ui";
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
        class?: string;
	}

    let { children, class: className = '' }: Props = $props();
</script>
    
<Button.Root class={ `bg-theme-blue lg:hover:bg-theme-blue-light transition-transform duration-100 ease-linear rounded-full justify-center px-8 py-3 w-full flex gap-[10px] lg:w-auto text-white font-medium ${className}` }>
    {@render children()}
</Button.Root>