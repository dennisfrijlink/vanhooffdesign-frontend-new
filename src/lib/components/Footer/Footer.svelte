<script>
	import { Container } from "$lib/components/Container";
    import { Button } from "$lib/components/Button";
	import { FooterColumn, FooterItem } from "$lib/components/Footer";
    import { MoveRight } from 'lucide-svelte';
    import PinterestIcon from "$lib/icons/svg/pinterest.svg?component";
    import InstagramIcon from "$lib/icons/svg/instagram.svg?component";
</script>

<footer class="w-full relative">
    <div class="h-full w-full bg-black/70 relative z-10 pt-16 lg:pt-32">
        <h3 class="text-white font-poppins text-4xl lg:text-6xl font-semibold text-center leading-normal text-balance">
            Een nieuw idee of wens<br/>voor een project?
        </h3>
        <Container class="!mt-0 !mb-10">
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
            <div class="w-full bg-white rounded-xl p-10 md:grid grid-cols-2 lg:flex">
                <div class="flex-grow mb-10 col-span-2">
                    <img alt="Van Hooff Design logo" src="/icon.svg" class="h-auto w-16 mb-5" />
                    <p class="leading-loose font-medium">
                        Van Hooff Design, Remus 34,<br/>
                        3962 KT, Wijk bij Duurstede,<br/>
                        +31681366028
                    </p>
                    <div class="flex gap-3 mt-5">
                        <a href="https://nl.pinterest.com/VanHooffDesign/" target="_blank">
                            <PinterestIcon class="w-auto h-8"/>
                        </a>
                        <a href="https://www.instagram.com/vanhooffdesign/" target="_blank">
                            <InstagramIcon class="w-auto h-8"/>
                        </a>
                    </div>
                </div>
                <FooterColumn name="Pagina's">
                    <a href="/">
                        <FooterItem name="Home" isLink/>
                    </a>
                    <a href="/">
                        <FooterItem name="Werkwijze" isLink/>
                    </a>
                    <a href="/">
                        <FooterItem name="Projecten" isLink/>
                    </a>
                    <a href="/">
                        <FooterItem name="Over ons" isLink/>
                    </a>
                    <a href="/">
                        <FooterItem name="Blog" isLink/>
                    </a>
                    <a href="/">
                        <FooterItem name="Contact" isLink/>
                    </a>
                </FooterColumn>
                <FooterColumn name="Recente projecten">
                    <FooterItem name="Een 4 seizoenen tuin"/>
                    <FooterItem name="Meegroeien met je woning"/>
                    <FooterItem name="Ruimte in de binnenstad"/>
                    <FooterItem name="Het complete plaatje"/>
                    <FooterItem name="In contact met elkaar"/>
                </FooterColumn>
                <FooterColumn name="Blog">
                    <FooterItem name="Blog post 1"/>
                    <FooterItem name="Blog post 2"/>
                    <FooterItem name="Blog post 3"/>
                </FooterColumn>
                <FooterColumn name="Bekijk ook">
                    <a href="/">
                        <FooterItem name="Instagram" isLink/>
                    </a>
                    <a href="/">
                        <FooterItem name="Pinterest" isLink/>
                    </a>
                </FooterColumn>
            </div>
        </div>
    </div>
    <img class="h-full w-full absolute top-0 left-0 object-cover" src="/tmp/project-example-7.jpg" alt=""/>
</footer>