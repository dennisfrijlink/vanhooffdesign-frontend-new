<script>
	import { page } from '$app/stores';
	import { navigating } from '$app/stores';
	import { Container } from '$lib/components/Container';
	import { Button } from '$lib/components/Button';
	import { FooterColumn, FooterItem } from '$lib/components/Footer';
	import { MoveRight } from 'lucide-svelte';
	import PinterestIcon from '$lib/icons/svg/pinterest.svg?component';
	import InstagramIcon from '$lib/icons/svg/instagram.svg?component';

	const bgPages = ['/over-ons', '/werkwijze', '/blog'];
	let footerBg = 'bg-black/70';
	$: if ($navigating?.complete)
		if ($page.route.id && bgPages.includes($page.route.id)) {
			// footerBg = 'bg-theme-brown-light/70';
            footerBg = 'bg-black/70';
		} else {
			footerBg = 'bg-black/70';
		}
</script>

<footer class="relative w-full">
	<div class={`relative z-10 h-full w-full pt-16 lg:pt-32 ${footerBg}`}>
		<h3
			class="text-balance text-center font-poppins text-4xl font-semibold leading-normal text-white lg:text-6xl"
		>
			Een nieuw idee of wens<br />voor een project?
		</h3>
		<Container class="!mb-10 !mt-0">
			<div class="mt-5 flex flex-col justify-center gap-6 lg:flex-row">
				<Button>
					Maak een afspraak
					<MoveRight color="#ffffff" />
				</Button>
				<Button class="bg-theme-gray">
					Of neem contact op
					<MoveRight color="#ffffff" />
				</Button>
			</div>
		</Container>
		<div class="w-full p-5">
			<div class="w-full grid-cols-2 rounded-xl bg-white p-10 md:grid lg:flex">
				<div class="col-span-2 mb-10 flex-grow">
					<img alt="Van Hooff Design logo" src="/icon.svg" class="mb-5 h-auto w-16" />
					<p class="font-medium leading-loose">
						Van Hooff Design, Remus 34,<br />
						3962 KT, Wijk bij Duurstede,<br />
						+31681366028
					</p>
					<div class="mt-5 flex gap-3">
						<a href="https://nl.pinterest.com/VanHooffDesign/" target="_blank">
							<PinterestIcon class="h-8 w-auto" />
						</a>
						<a href="https://www.instagram.com/vanhooffdesign/" target="_blank">
							<InstagramIcon class="h-8 w-auto" />
						</a>
					</div>
				</div>
				<FooterColumn name="Pagina's">
					<a href="/">
						<FooterItem name="Home" isLink />
					</a>
					<a href="/">
						<FooterItem name="Werkwijze" isLink />
					</a>
					<a href="/">
						<FooterItem name="Projecten" isLink />
					</a>
					<a href="/">
						<FooterItem name="Over ons" isLink />
					</a>
					<a href="/">
						<FooterItem name="Blog" isLink />
					</a>
					<a href="/">
						<FooterItem name="Contact" isLink />
					</a>
				</FooterColumn>
				<FooterColumn name="Recente projecten">
					<FooterItem name="Een 4 seizoenen tuin" />
					<FooterItem name="Meegroeien met je woning" />
					<FooterItem name="Ruimte in de binnenstad" />
					<FooterItem name="Het complete plaatje" />
					<FooterItem name="In contact met elkaar" />
				</FooterColumn>
				<FooterColumn name="Blog">
					<FooterItem name="Blog post 1" />
					<FooterItem name="Blog post 2" />
					<FooterItem name="Blog post 3" />
				</FooterColumn>
				<FooterColumn name="Bekijk ook">
					<a href="/">
						<FooterItem name="Instagram" isLink />
					</a>
					<a href="/">
						<FooterItem name="Pinterest" isLink />
					</a>
				</FooterColumn>
			</div>
		</div>
	</div>
	<img
		class="absolute left-0 top-0 h-full w-full object-cover"
		src="/tmp/project-example-7.jpg"
		alt=""
	/>
</footer>
