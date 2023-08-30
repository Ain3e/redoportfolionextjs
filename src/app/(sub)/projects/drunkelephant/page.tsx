import Image from 'next/image'

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
                    <p className="font-untitledsans text-customGray ">UX/UI Design</p>
                    <p className="font-untitledsans">Drunk Elephant</p>
                </div>
                <Image src="/img/drunkelephant/drunkelephantthumbnail.png"
                       alt="a laptop displaying a intervention of a redesigned version of drunk elephant"
                       width={2500} height={1512} className="w-full"/>
            </div>


            <div
                className="lg:col-start-4 lg:col-span-7 col-start-4 col-span-full row-start-2 mt-8 flex justify-end lg:flex-none lg:justify-start md:flex-none md:justify-start md:col-start-3">
                <div className="py-4">
                    <p className="font-untitledsans text-customGray">2022</p>
                </div>
            </div>

            <div className="col-start-1 col-span-full lg:col-span-8 md:col-span-4 py-12">
                <h2 className="font-eiko text-2xl lg:text-4xl md:text-4xl ">This was a 4 week group project done for a
                    second year interaction design class.
                    We were given a vague prompt to design a small digital intervention for an ‘e-commerce lifestyle
                    brand’.</h2>
            </div>

            <div
                className="col-start-1 md:col-start-5 lg:col-start-11 md:py-12 lg:py-12 font-untitledsans col-span-3 text-base">
                <div>
                    <p>
                        Team
                    </p>
                    <p className="text-customGray">
                        Sam Newaz, Jasper Precilla, Micheal Tjokrowardojo, Welle Dias, Jin Shirley, and Veronika Tatsiy
                    </p>
                </div>
                <div className="mt-4">
                    <p>
                        Role
                    </p>
                    <p className="text-customGray">
                        UX/UI designer, Researcher
                    </p>
                </div>
            </div>

            <div className="col-start-1 mt-12 col-span-full md:col-span-4 lg:col-span-6">
                <h2 className="font-eiko text-2xl lg:text-4xl md:text-4xl">Framing the problem space</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">To approach this project, we were first tasked to define our
                    scope.
                    We created a set of criteria to narrow down the different brands we could propose an intervention
                    for. Once
                    our group settled on the brand,
                    we examined the site and crafted ‘How Might We’ statements to identify potential opportunities for
                    our
                    digital intervention.</p>
            </div>

            <div className="col-start-1 col-span-full mt-14">
                <Image className="w-full" src="/img/drunkelephant/drunkelephantframing.png" alt="" width={2500} height={1620}/>
            </div>


            <div className="col-start-1 mt-12 col-span-full md:col-span-4 lg:col-span-6">
                <h2 className="font-eiko text-2xl md:text-4xl lg:text-4xl">Ideation & Prototyping</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">Once we settled on a statement to direct our team, we began
                    listing ideas and
                    producing low-fidelity wireframes.
                    After deliberating on which ideas were the best, we began developing a mockup for the milestone with
                    some
                    basic interaction prototyping.</p>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">The main concept of our intervention was to better introduce
                    and integrate the
                    smoothie concept as users arrived onto
                    the landing page and explored the products. The key interaction was a double-hover in the product
                    listing
                    page that allowed users to discover the smoothies.

                </p>
            </div>

            <div className="col-start-1 col-span-full mt-36">
                <Image src="/img/drunkelephant/proj-drunke-flow.gif" className="w-full" alt="" width={2500} height={1620}/>
            </div>
            <div className="col-start-1 col-span-full mt-12">
                <Image src="/img/drunkelephant/proj-drunke-interaction.gif" className="w-full" alt="" width={2500} height={1620}/>
            </div>


            <div className="col-start-1 mt-12 col-span-full md:col-span-4 lg:col-span-6">
                <h2 className="font-eiko text-2xl md:text-4xl lg:text-4xl">Instructor feedback</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">The instructors approved the concept, but were skeptical of
                    the clarity of the double-hover interaction, so our group was recommended to spend the last week of
                    the project on doing a Design Sprint with a focus on user testing rather than polishing the existing
                    design further.</p>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">To approach this sprint, our group believed that simply
                    testing our original prototype would not give us substantial feedback so we created three variants
                    to perform qualitative multivariate testing with a small sample of users.

                </p>
            </div>

            <div className="col-start-1 col-span-full mt-36">
                <Image src="/img/drunkelephant/proj-drunke-3variant.png" className="w-full" alt="" width={2500} height={1620}/>
            </div>

            <div className="col-start-1 mt-12 col-span-full md:col-span-4 lg:col-span-6">
                <h2 className="font-eiko text-2xl md:text-4xl lg:text-4xl">User insight</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">Our user testing confirmed that the double-hover interaction
                    was difficult to discover so we switched to a more discoverable way of informing the user. As the
                    facilitators of the interviews, another teammate and I pulled several insights from the interviews
                    which we used to create some final iterations on the prototype. We also discovered a major insight
                    that made us question the validity of our initial framing.
                </p>
            </div>


            <div className="col-start-1 lg:col-start-7 lg:mt-96 mt-24 col-span-full lg:text-right">
                <h2 className="font-eiko text-2xl md:text-3xl lg:text-5xl">“ The brand’s smoothie concept only exists
                    online. ”</h2>
            </div>
            <div className="lg:col-start-9 col-span-4 lg:text-right">
                <p className="font-untitledsans text-base">Users who received the product in store have no understanding
                    of the brand’s mixing idea. Despite 3 users having experience with the brand, none of them were
                    aware of the smoothie concept.

                </p>
            </div>

            <div className="col-start-1 lg:mt-96 mt-24 col-span-full md:col-span-4 lg:col-span-6">
                <h2 className="font-eiko text-2xl md:text-4xl lg:text-4xl">Reflection</h2>
            </div>

            <div className="col-start-1 col-span-4">
                <p className="font-untitledsans text-base">This project was a learning experience regarding the
                    importance of user
                    interviews and testing early on in the process. If I were to do this project again, I would put more
                    of a
                    focus on developing our How Might We statements to be less leading earlier on in the process or talk
                    to users
                    of the brand as we develop the initial framing. This project also taught me a lot about
                    communicating and rapid
                    iteration with our team producing numerous ideas, sketches and wireframes throughout the process.
                </p>
            </div>


        </section>
    )
}
