<script lang="ts">
	import type { InputConstraint } from 'sveltekit-superforms';

	interface Props {
		name: string;
		value: string;
		type?: string;
		label?: string;
		errors?: string[];
		constraints?: InputConstraint;
		class?: string;
		textBox?: boolean;
	}

	let {
		name,
		value = $bindable(),
		type = 'text',
		label,
		errors,
		constraints,
		class: className = '',
		textBox = false,
		...rest
	}: Props = $props();
</script>

<div class={`w-full flex flex-col ${className}`}>
	<label class="w-full h-full">
		{#if label}<span class="font-semibold block tracking-tight mb-2">{label}</span>{/if}
		{#if !textBox}
			<input
				{name}
				{type}
				bind:value
				aria-invalid={errors ? 'true' : undefined}
				{...constraints}
				{...rest}
				class="w-full font-jakarta font-medium flex-grow rounded-md text-base border-2 border-solid border-transparent shadow-input h-12"
			/>
		{:else}
			<textarea
				rows="10"
				{name}
				bind:value
				aria-invalid={errors ? 'true' : undefined}
				{...constraints}
				{...rest}
				class="w-full font-jakarta font-medium flex-grow rounded-md text-base border-2 border-solid border-transparent shadow-input"
			>
			</textarea>
		{/if}
	</label>
	{#if errors}<span class="text-red-500">{errors}</span>{/if}
</div>
