<script lang="ts">
	import { ArrowUpRight } from "lucide-svelte";
	import ProjectTag from "./ProjectTag.svelte";

    interface Props {
        title: string;
        tags: string[];
        image: string;
        class?: string;
        year: string;
	}

    let { class: className = '', title, image, tags, year }: Props = $props();

    const projectId = title.toLowerCase().replace(/ /g, "-")
</script>

<div class={`rounded-[10px] overflow-hidden relative lg:h-auto h-[20rem] min-h-[20rem] group cursor-pointer ${className}`}>
    <div class="rounded-full bg-white absolute top-5 right-5 z-10 w-12 h-5 grid place-items-center shadow">
        <span class="text-black text-xs font-bold absolute">{year}</span>
    </div>
    <div class="relative p-8 z-10 h-auto min-h-[inherit] flex flex-col justify-end bg-gradient-to-b from-transparent to-[rgba(37,37,37,0.9)]">
        <div class="flex justify-between gap-3 items-end">
            <div>
                <h3 class="text-white text-xl md:text-2xl font-semibold max-w-96 text-balance">{title}</h3>
                <div class="flex gap-1 mt-2">
                    {#each tags as tag}
                       <ProjectTag>{tag}</ProjectTag>
                    {/each}
                </div>
            </div>
            <button class="rounded-full bg-white p-2 group-hover:bg-black duration-100" aria-labelledby={`project-${projectId}`}>
                <ArrowUpRight class="stroke-black h-4 w-auto group-hover:stroke-white duration-100" />
                <span id={`project-${projectId}`} hidden>Ga naar het project, {title}</span>
            </button>
        </div>
    </div>
    <img class="h-full w-full object-cover absolute top-0 left-0" alt={title} src={image}/>
</div>
