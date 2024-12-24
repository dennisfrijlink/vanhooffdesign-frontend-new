<script lang="ts">
    interface Props {
        class?: string;
        name: string;
        isLink?: boolean;
	}

    let { name, class: className = '', isLink = false }: Props = $props();
</script>

<span class={`text-theme-gray block my-3 font-medium underline-offset-2 ${className}`} class:hover:underline={isLink}>
    {name}
</span>
