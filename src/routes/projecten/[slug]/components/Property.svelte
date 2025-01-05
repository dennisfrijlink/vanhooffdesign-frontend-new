<script lang="ts">
    interface Props {
		description: string;
        content: string;
	}

    let { description, content }: Props = $props();
</script>

<li class="flex flex-col lg:mb-8 last:mb-0">
    <span class="text-white text-opacity-50 uppercase tracking-[0.2rem] leading-loose text-base font-bold">{description}</span>
    <span class="font-medium text-white leading-loose text-2xl">{content}</span>
</li>