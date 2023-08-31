import Image from 'next/image'

export default function About() {
    return (
        <section className="mx-6 grid grid-cols-4 gap-4 py-8 md:grid-cols-6 lg:grid-cols-12">

            <nav
                className="col-start-1 col-span-4 md:col-span-6 lg:col-span-12 row-start-1 sticky top-0 py-4 bg-white w-full">
                <div className="font-untitledsans text-base">
                    <p><a href="/">Alex Luowan</a></p>
                </div>
            </nav>

            <div className="col-start-1 col-span-full lg:col-start-2 lg:col-span-5 mt-8 row-start-2">
                <Image
                    src="/img/about/aboutpicture.jpg"
                    alt="a laptop displaying a person called Alex Luowan"
                    width={4608}
                    height={3456}

                />
            </div>

            <div className="lg:col-start-8 lg:col-span-4 col-span-4">
                <h2 className="font-eiko text-2xl lg:text-4xl md:text-4xl lg:mt-72 mt-10">

                    Hi I&apos;m Alex

                </h2>

                <p className="font-untitledsans text-base mt-8">
                    I am a T-shaped designer, proficient in both conceptualization and coding.
                    Through thorough research and meticulous craftsmanship, I derive satisfaction from uncovering
                    prospects to transcend mere functionality,
                    crafting instances that evoke joy and meaningful connections.
                    Beyond the realm of design, I enjoy quality time with my friends and family either playing rhythm
                    games or mahjong.</p>

                <p className="font-untitledsans text-base mt-8">
                    If you want to get in touch with me you can always send a
                    direct email via <span className="underline"><a
                    href="mailto: aluowan@sfu.ca">aluowan@sfu.com</a></span></p>
            </div>

        </section>
)
}
