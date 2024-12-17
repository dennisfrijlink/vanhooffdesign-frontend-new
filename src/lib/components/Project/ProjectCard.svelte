<script lang="ts">
	import { CalendarDays } from "lucide-svelte";
	import type { Snippet } from "svelte";

    interface Props {
        title: string;
        image: string;
        class?: string;
	}

    let { class: className = '', title, image }: Props = $props();
</script>

<div class={`rounded-[10px] overflow-hidden relative min-h-[20rem] ${className}`}>
    <div class="relative p-4 z-10 h-full flex flex-col justify-end bg-gradient-to-b from-transparent to-[rgba(37,37,37,0.9)]">
        <div class="flex items-center gap-3">
            <h3 class="text-white text-lg font-semibold">{title}</h3>
            <div class="flex items-center gap-2">
                <CalendarDays class="stroke-white h-5 w-auto" />
                <span class="text-white text-sm font-medium">2022</span>
            </div>
        </div>
        <p class="text-white text-sm leading-normal text-opacity-75 max-w-64">
            Een keuken in een monumentaal pand mag net wat extra's hebben. 
            Zo kan de bijzondere marmerlook achterplaat helemaal oplichten.
        </p>
    </div>
    <img class="h-full w-full object-cover absolute top-0 left-0" alt={title} src={image}/>
</div>
