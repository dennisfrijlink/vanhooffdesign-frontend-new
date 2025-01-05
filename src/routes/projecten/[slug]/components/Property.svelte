<script lang="ts">
    interface Props {
		description: string;
        content: string;
	}

    let { description, content }: Props = $props();
</script>

<li class="p-5 flex flex-col justify-center items-center max-lg:border-b lg:border-r last:border-none">
    <span class="text-theme-gray uppercase tracking-[0.2rem] leading-loose text-xs font-extrabold">{description}</span>
    <span class="font-medium leading-loose text-lg">{content}</span>
</li>