export default function SectionContactUs() {
    return (
        <section id="contact-us">
            <div className="max-w-[1100px] m-auto text-center lg:text-start pt-5 p-20 md:py-80">
                <p className="text-[1.5rem] sm:text-[2.4rem] my-5 text-[#BDBDBD]">
                    Para qualquer dúvida, por favor entre em contato com <a className="font-bold" href="mailto:contato@visitmoon.com">contato@visitmoon.com</a>
                </p>
                <h3 className="text-[3.4rem] text-white">Fale conosco</h3>
                <span className="inline-block w-[45px] h-[45px] mt-14 ml-5 border-2 rounded-full">
                    <span className="block w-full h-full relative animate-bounce">
                        <span
                            className="
                            block absolute bg-white w-[2px] h-[41px] left-1/2 translate-x-[-50%] top-[-45%]
                            before:block before:absolute before:bg-white before:w-[2px] before:h-[12px] before:left-[-4px]  before:top-[80%] before:rotate-[-45deg]
                            after:block after:absolute after:bg-white after:w-[2px] after:h-[12px] after:left-[4px]  after:top-[80%] after:rotate-[45deg]
                            "
                        />
                    </span>
                </span>
            </div>
            <div className="container-limit flex p-10 sm:p-20 justify-center md:justify-between flex-wrap text-highlighted text-[2.4rem] gap-20 gap-y-2 text-center">
                <p className="w-fit">
                    visit moon @ 2022
                </p>
                <p className="w-fit">
                    projeto por Vitor Gaioso
                </p>
                <p className="w-full">

                </p>
            </div>
        </section>
    )
}
