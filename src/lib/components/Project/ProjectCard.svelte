<script lang="ts">
	import type { Snippet } from "svelte";

    interface Props {
        title: string;
        image: string;
        class?: string;
	}

    let { class: className = '', title, image }: Props = $props();
</script>

<img alt={title} src={image}/>
