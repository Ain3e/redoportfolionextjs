"use client";
import Image from 'next/image'
import { Fade as Hamburger } from 'hamburger-react'
import {useState} from "react";
export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleToggle = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };


    return (
        <section className="mx-6 grid grid-cols-4 gap-4 py-8 md:grid-cols-6 lg:grid-cols-12">
            <div className="col-start-4 flex justify-end sm:hidden md:flex md:col-start-6 lg:hidden mt-2 z-50">
                <div className="relative z-50">
                    <Hamburger onToggle={handleToggle} size={25} />
                    {menuOpen && (
                        <div className="fixed inset-0 bg-white -z-10 ">
                            <div className="grid grid-cols-4 mx-6 gap-4">
                                <nav className="font-untitledsans text-2xl mt-2">
                                    <ul className="mt-28 gap-4">
                                        <li><a href="/about" className="underline mt-5">About</a></li>
                                        <br />
                                        <li><a href="https://www.figma.com/file/TWVrzXVl7Eg3VE8F2BPWRG/Portfolio-webpage?type=design&node-id=240%3A46&mode=design&t=sJyuJqh07gzBG8pO-1" className="underline mt-5">Resume</a></li>
                                        <br />
                                        <li><a href="mailto:aluowan@sfu.ca" className="underline mt-5">Email</a></li>
                                        <br />
                                        <li><a href="https://www.linkedin.com/in/alexluowan/" className="underline mt-5">Linkedin</a></li>
                                        <br />
                                        <li><a href="https://read.cv/aluowan" className="underline">Read.cv</a></li>
                                    </ul>
                                </nav>

                                <div className="font-untitledsans text-base mt-16 col-start-1 col-span-full">
                                    <p>Currently studying in Simon Fraser University
                                        B.A., Interactive Arts & Technology</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-start-1 col-span-2 row-start-1">
                <div className="font-untitledsans text-base mt-4">
                    <p><a href="#">Alex Luowan</a></p>
                </div>
            </div>

            <div className="hidden col-start-8 col-span-6 row-start-1 lg:block">
                <nav className="font-untitledsans text-base mt-4">
                    <ul>
                        <li><a href="/about" className="underline">About</a></li>
                        <li><a
                            href="https://www.figma.com/file/TWVrzXVl7Eg3VE8F2BPWRG/Portfolio-webpage?type=design&node-id=240%3A46&mode=design&t=sJyuJqh07gzBG8pO-1"
                            className="underline mt-2">Resume</a></li>
                        <li><a href="mailto: aluowan@sfu.ca" className="underline mt-2">Email</a></li>
                        <li><a href="https://www.linkedin.com/in/alexluowan/" className="underline mt-2">Linkedin</a>
                        </li>
                        <li><a href="https://read.cv/aluowan" className="underline mt-2">Read.cv</a></li>
                    </ul>
                </nav>
            </div>

            <div className="hidden col-start-10 col-span-3 row-start-1 lg:block">
                <div className="font-untitledsans text-base mt-4">
                    <p>Currently studying in Simon Fraser University
                        B.A., Interactive Arts & Technology</p>
                </div>
            </div>

            <div className="col-start-1 col-span-4 mt-60 lg:col-span-8 lg:mt-custom-top leading-2xl text-customGray">
                <h1 className="text-3xl lg:text-5xl font-eiko">Meet <span className="text-black">Alex
                Luowan </span>
                    , the data-informed interaction designer creating compelling digital experiences.
                </h1>
            </div>

            <div className="col-start-1 col-span-full lg:col-span-7 lg:row-start-3 mt-5 lg:mt-8">
                <a href="/projects/givemeyesterday">
                    <Image src="/img/givemeyesterday/Givemeyesterdaythumbnail.png"
                           alt="a laptop displaying a microsite called give me yesterday" width={2500} height={1620}/>
                    <div className="font-untitledsans text-base mt-4">
                        <h4 className="text-customGray">Interaction design, Art Direction</h4>
                        <h4>Give me yesterday</h4>
                    </div>
                </a>
            </div>

            <div className="col-start-1 lg:col-start-8 col-span-full lg:col-span-5 lg:row-start-3 mt-14 lg:mt-8">
                <a href="/projects/drunkelephant">
                    <Image src="/img/drunkelephant/drunkelephantthumbnail.png"
                           alt="a laptop displaying a intervention of a redesigned version of drunk elephant"
                           width={2500} height={1512}/>
                    <div className="font-untitledsans text-base mt-4">
                        <h4 className="text-customGray">UX/UI Design</h4>
                        <h4>Drunk Elephant</h4>
                    </div>
                </a>
            </div>

        </section>


    )
}
