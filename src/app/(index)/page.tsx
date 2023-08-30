import Image from 'next/image'

export default function Home() {
  return (
    <section className="mx-6 grid grid-cols-4 gap-4 py-8 md:grid-cols-6 lg:grid-cols-12">

      <div className="col-start-1 col-span-2 row-start-1">
        <div className="font-untitledsans text-base mt-4">
          <p><a href="#">Alex Luowan</a></p>
        </div>
      </div>

      <div className="hidden col-start-8 col-span-6 row-start-1 lg:block">
        <nav className="font-untitledsans text-base mt-4">
          <ul>
            <li><a href="about.html" className="underline">About</a></li>
            <li><a
                href="https://www.figma.com/file/TWVrzXVl7Eg3VE8F2BPWRG/Portfolio-webpage?type=design&node-id=240%3A46&mode=design&t=sJyuJqh07gzBG8pO-1"
                className="underline mt-2">Resume</a></li>
            <li><a href="mailto: aluowan@sfu.ca" className="underline mt-2">Email</a></li>
            <li><a href="https://www.linkedin.com/in/alexluowan/" className="underline mt-2">Linkedin</a></li>
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

        <div className="col-start-1 col-span-4 mt-60 lg:col-span-8 lg:mt-custom-top leading-2xl">
            <h1 className="text-3xl lg:text-5xl font-eiko"><span className="text-customGray">Meet</span> Alex
                Luowan <span
                    className="text-customGray">, the data-informed interaction designer creating compelling digital experiences.</span>
            </h1>
        </div>

        <div className="col-start-1 col-span-full lg:col-span-7 lg:row-start-3 mt-5 lg:mt-8">
            <a href="">

            </a>
        </div>

    </section>
  )
}
