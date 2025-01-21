<script lang="ts">
    interface Props {
		description: string;
        content: string;
	}

    let { description, content }: Props = $props();
</script>

<li class="lg:text-center">
    <span class="uppercase tracking-[0.2rem] leading-loose text-sm font-bold block">{description}</span>
    <span class="font-medium leading-loose lg:text-2xl text-lg block">{content}</span>
</li>