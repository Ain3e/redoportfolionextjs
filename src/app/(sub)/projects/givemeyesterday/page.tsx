import Image from 'next/image'
// Assuming you have an HTML container element with the ID "content"

export default function ProjectPage() {
    return (
        <section className="mx-6 grid grid-cols-4 gap-4 py-8 md:grid-cols-6 lg:grid-cols-12">

            <nav
                className="col-start-1 col-span-4 md:col-span-6 lg:col-span-12 row-start-1 sticky top-0 py-4 bg-white w-full">
                <div className="font-untitledsans text-base mt-2">
                    <p><a href="/">Alex Luowan</a></p>
                </div>
            </nav>


            <div className="col-start-1 col-span-full row-start-2 mt-8">
                <div className="py-4">
                    <p className="font-untitledsans text-customGray ">Interaction design, Art direction</p>
                    <p className="font-untitledsans">Give me Yesterday</p>
                </div>
                <Image
                    src="/img/givemeyesterday/Givemeyesterdaythumbnail.png"
                    alt=""
                    width={2500}
                    height={1620}
                />

            </div>


            <div
                className="lg:col-start-4 lg:col-span-7 col-start-4 col-span-full row-start-2 mt-8 flex justify-end lg:flex-none lg:justify-start md:flex-none md:justify-start md:col-start-3">
                <div className="py-4">
                    <p className="font-untitledsans text-customGray">2022</p>
                </div>
            </div>

            <div className="col-start-1 col-span-full lg:col-span-8 md:col-span-4 py-12">
                <h2 className="font-eiko text-2xl lg:text-4xl md:text-4xl ">This junior art direction + interaction
                    design pre-exhibition microsite aims to
                    promote Fondazione Prada’s exhibition “Give Me Yesterday” by showcasing the works of the
                    14 individual artists that will be displayed.</h2>
            </div>

            <div
                className="col-start-1 md:col-start-5 lg:col-start-11 md:py-12 lg:py-12 font-untitledsans col-span-3 text-base">
                <div>
                    <p>
                        Team
                    </p>
                    <p className="text-customGray">
                        Sam Newaz, Jasper Precilla, Karishma Sen, and Claret Egwim-Nwagbara
                    </p>
                </div>
                <div className="mt-4">
                    <p>
                        Role
                    </p>
                    <p className="text-customGray">
                        Art direction, UI designer, Researcher, Decision Maker
                    </p>
                </div>
            </div>

            <div className="col-start-1 mt-12 col-span-full md:col-span-4 lg:col-span-8">
                <h2 className="font-eiko text-2xl md:text-4xl lg:text-4xl">Defining our content design approach</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base ">As an online pre-exhibition site for the installation of art
                    pieces, the microsite
                    intends to encapsulate the physical
                    experience of the exhibition by creating a sense of immersion for visitors. Hence enticing users to
                    see it
                    in person
                    themselves</p>
            </div>

            <div className="col-start-1 mt-12 col-span-5">
                <p>1. Use colours to categorize works</p>
                <hr className="mb-4 border-black"></hr>
                <p>2. Attract users through denial and reward</p>
                <hr className="border-black"></hr>
            </div>

            <div className="col-start-1 col-span-full mt-14">
                <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                    <source src="/video/givemeyesterday/Homepage.webm" type="video/webm"></source>
                    <source src="/video/givemeyesterday/Homepage.mov" type="video/mp4"></source>
                </video>
            </div>


            <div className="col-start-1 col-span-4 mb-16">
                <p className="font-untitledsans py-4">
                    Denial & reward to Encourage Content Discovery
                </p>
                <p className="font-untitledsans text-base">
                    As an online pre-exhibition site for the installation of art pieces, the microsite intends to
                    encapsulate
                    the physical
                    experience of the exhibition by creating a sense of immersion for visitors. Hence enticing users to
                    see it
                    in person themselves. </p>
            </div>

            <div className="col-start-1 col-span-full mt-9 lg:mt-14 md:mt-14">
                <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                    <source src="/video/givemeyesterday/CursorTransition.webm" type="video/webm">
                    </source>
                    <source src="/video/givemeyesterday/CursorTransition.mov" type="video/mp4">
                    </source>
                </video>
            </div>

            <div className="col-start-1 col-span-4 mb-11 lg:mb-16 md:mb-16">
                <p className="font-untitledsans py-4">
                    Click to enter the artists gallery
                </p>
                <p className="font-untitledsans text-base">
                    Each artists has a preview displayed at a large scale. The circle cursor appears
                    as the user is moving across the artist landing page screen, when clicked upon, it
                    transitions the visitor to the artists gallery. </p>
            </div>

            <div className="col-start-1 col-span-full mt-9 lg:mt-14 md:mt-14">
                <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                    <source src="/video/givemeyesterday/finalfinalparallax.webm" type="video/webm"></source>
                    <source src="/video/givemeyesterday/finalfinalparallax.mov" type="video/mp4"></source>
                </video>
            </div>

            <div className="col-start-1 col-span-4 mb-11 lg:mb-16 md:mb-16">
                <p className="font-untitledsans py-4">
                    Parallax Image Gallery
                </p>
                <p className="font-untitledsans text-base">
                    The visitor is able to view all of the artist’s images in a long horizontal parallax scroll.
                    When reaching the end of the gallery, the visitor is met with a resistive scroll which allows them
                    to
                    travel to the next artist gallery. </p>
            </div>

            <div className="col-start-1 col-span-full mt-9 lg:mt-14 md:mt-14">
                <video autoPlay loop muted className="w-full" preload="auto" playsInline>
                    <source src="/video/givemeyesterday/finalfinalscale.webm" type="video/webm"></source>
                    <source src="/video/givemeyesterday/finalfinalscale.mov" type="video/mp4"></source>
                </video>
            </div>

            <div className="col-start-1 col-span-4 mb-11 lg:mb-16 md:mb-16">
                <p className="font-untitledsans py-4">
                    Viewing an image in full detail
                </p>
                <p className="font-untitledsans text-base">
                    By hovering over an image, the visitor is able to expand its
                    size to view the image as a whole. To better implement the concept of
                    large-scale shifts and figure and ground, the background will shrink while
                    the content is pushed to the
                    side as the image expands. </p>
            </div>

            <div className="col-start-1 mt-12 col-span-full ">
                <h2 className="font-eiko text-2xl md:text-4xl lg:text-4xl">The art direction process</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">To create a unique identity for the event, the team engaged
                    in a deep graphic experimentation process. Taking inspiration from Ellen Lupton and Dan Friedman,
                    the process began with a thorough investigation of a set of design principles and qualities.</p>
            </div>

            <div className="col-start-1 col-span-full mt-16">
                <div className="py-4">
                    <Image
                        src="/img/givemeyesterday/designqualitiesandprinciples.png"
                        alt=""
                        className="w-full"
                        width={964}
                        height={1004}
                    />
                </div>
            </div>

            <div className="col-start-1 col-span-full mt-4">
                <Image
                    src="/img/givemeyesterday/initialgraphicalposters.png"
                    alt=""
                    className="w-full"
                    width={964}
                    height={583}/>
            </div>

            <div className="col-start-1 col-span-4 mb-11 lg:mb-16 md:mb-16">
                <p className="font-untitledsans mb-4">
                    Studying the principle
                </p>
                <p className="font-untitledsans text-base">
                    To dig deeper, we first studied and explored our design
                    principles by generating an exhaustive amount of sketches.
                    Then by introducing content and combining different explorations of
                    qualities and principles, these sketches began to form varied avenues
                    for further iteration. Each artists has a preview displayed at a large scale.
                    The circle cursor appears as the user is moving across the artist landing page screen,
                    when clicked upon, it transitions the visitor to the artists gallery.</p>
            </div>


            <div className="col-start-1 col-span-full mt-4">
                <Image
                    src="/img/givemeyesterday/finalgraphicalposters.png"
                    alt=""
                    className="w-full"
                    width={964}
                    height={583}/>
            </div>

            <div className="col-start-1 col-span-4 mb-11 lg:mb-16 md:mb-16">
                <p className="font-untitledsans mb-4">
                    Converging from 3 directions
                </p>
                <p className="font-untitledsans text-base">
                    3 approaches emerged as a result of the experimentation.
                    The approach I was responsible for was chosen for its cohesive principles and versatility across
                    different medias. </p>
            </div>

            <div className="lg:col-start-1 md:col-start-1 col-start-1 lg:col-span-6 col-span-full mt-4">
                <Image
                    src="/img/givemeyesterday/asset1.png"
                    alt=""
                    className="w-full"
                    width={688}
                    height={405}/>
            </div>
            <div className="lg:col-start-7 md:col-start-1 col-span-full mt-4">
                <Image
                    src="/img/givemeyesterday/asset2.png"
                    alt=""
                    className="w-full"
                    width={688}
                    height={405}/>
            </div>


            <div className="col-start-1 mt-12 col-span-full">
                <h2 className="font-eiko text-2xl lg:text-4xl md:text-4xl">Designing expressive interaction</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">A process of reexamining the print assets to identify the key
                    qualities
                    that characterized our art direction was used and formulated into three approaches to surface
                    content
                    through interactivity.</p>
            </div>

            <div className="col-start-1 mt-12 col-span-full">
                <h2 className="font-eiko text-2xl lg:text-4xl md:text-4xl">Reflection</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">Creating designs through externalizing
                    thoughts has been highly beneficial in both communication and idea generation.
                    It’ll be interesting on how we are able to inspire others through the things that we make.

                </p>
            </div>


        </section>
    )
}
