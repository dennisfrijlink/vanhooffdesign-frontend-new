<script lang="ts">
    import { Button } from "bits-ui";
	import type { Snippet } from "svelte";

    interface Props {
        children: Snippet;
	}

    let { children }: Props = $props();
</script>
    
<Button.Root class="bg-red-500 rounded-full px-8 py-3 w-full lg:w-auto">
    {@render children()}
</Button.Root>