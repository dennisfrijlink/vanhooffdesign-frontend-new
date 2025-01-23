<script lang="ts">
	import { Container } from "$lib/components/Container";

    interface Props {
		image: string;
        title: string;
        description: string;
	}

    let { image, title, description }: Props = $props();
</script>
<Container class="mr-0 ml-0 lg:odd:mr-auto lg:even:ml-auto pr-0 pl-0 flex flex-col-reverse group lg:grid lg:grid-cols-2 gap-5 lg:gap-0">
    <div class="grid grid-cols-[5%_auto_5%] lg:group-even:grid-cols-[auto_20%] lg:grid-cols-[20%_auto] gap-5 lg:gap-10 min-h-56 lg:group-even:order-2">
        <img class="w-full h-full object-cover max-lg:rounded-r-lg lg:group-even:rounded-l-xl lg:group-odd:rounded-r-xl opacity-20 lg:group-even:order-1" alt="" src={image}/>
        <img class="w-full h-full object-cover rounded-lg lg:rounded-xl ring-1 ring-offset-2 ring-black ring-offset-theme-brown-light ring-opacity-20" alt="" src={image}/>
        <img class="w-full h-full object-cover rounded-l-lg lg:rounded-l-xl opacity-20 lg:hidden" alt="" src={image}/>
    </div>
    <div class="lg:p-20 p-5 relative">
        <h2 class="lg:text-4xl lg:leading-loose text-3xl leading-loose font-bold text-theme-blue">
            {title}
        </h2>
        <p class="leading-loose lg:leading-loose lg:text-lg font-medium relative z-10 px-1">
          {description}
        </p>
    </div>
</Container>