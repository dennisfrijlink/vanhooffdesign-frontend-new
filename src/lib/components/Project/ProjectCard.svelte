<script lang="ts">
	import { ArrowUpRight, CalendarDays } from "lucide-svelte";
	import type { Snippet } from "svelte";

    interface Props {
        title: string;
        description: string;
        image: string;
        class?: string;
	}

    let { class: className = '', title, image, description }: Props = $props();

    const projectId = title.toLowerCase().replace(/ /g, "-")
</script>

<div class={`rounded-[10px] overflow-hidden relative lg:h-auto h-[20rem] min-h-[20rem] ${className}`}>
    <div class="rounded-full bg-white absolute top-5 right-5 z-10 w-12 h-5 grid place-items-center shadow">
        <span class="text-black text-xs font-bold absolute">2022</span>
    </div>
    <div class="relative p-8 z-10 h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-[rgba(37,37,37,0.9)]">
        <div class="flex justify-between gap-3 items-end">
            <h3 class="text-white text-xl md:text-2xl font-semibold max-w-96">{title}</h3>
            <button class="rounded-full bg-white p-2" aria-labelledby={`project-${projectId}`}>
                <ArrowUpRight class="stroke-black h-4 w-auto" />
                <span id={`project-${projectId}`} hidden>Ga naar het project, {title}</span>
            </button>
        </div>
    </div>
    <img class="h-full w-full object-cover absolute top-0 left-0" alt={title} src={image}/>

</div>
