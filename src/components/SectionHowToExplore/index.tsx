import { useRef } from "react";
import dynamic from "next/dynamic";
import LinesBetweenPoints from "./Lines";

const DynamicLines = dynamic(() => import("./Lines"), {
    ssr: false,
})


export default function SectionHowToExplore() {
    const container = useRef<HTMLDivElement>(null);
    const ponto1 = useRef<HTMLSpanElement>(null);
    const ponto2 = useRef<HTMLSpanElement>(null);
    const ponto3 = useRef<HTMLSpanElement>(null);
    const ponto4 = useRef<HTMLSpanElement>(null);

    return (
        <section className="pt-60 xl:p-60 pb-60 min-h-full lg:pb-80 overflow-hidden">
            <div className="max-w-[1100px] m-auto text-center lg:text-start">
                <h2 className="text-[3.4rem] lg:text-[5.5rem] text-white font-medium p-2 lg:indent-20">
                    Como visitar a Lua
                </h2>
            </div>
            <div className="container-limit relative min-h-[70rem] hidden xl:block">
                <div ref={container} className="min-h-[40rem] relative">
                    <ol className="flex justify-between items-center font-semibold text-[10rem] text-center leading-[5rem] absolute inset-0">
                        <li className="relative">
                            <button className="relative">
                                <p className="text-highlighted">1
                                    <span className="block text-[2.7rem] font-normal">
                                        Preparação
                                    </span>
                                </p>
                                <span ref={ponto1} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-full top-[1.5rem]"></span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="relative top-[20.5rem]">
                                <p className="text-highlighted">2
                                    <span className="block text-[2.7rem] font-normal">
                                        Embarque
                                    </span>
                                </p>
                                <span ref={ponto2} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-[5rem] -top-1/2"></span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="relative" >
                                <p className="text-highlighted">3
                                    <span className="block text-[2.7rem] font-normal">
                                        Viagem
                                    </span>
                                </p>
                                <span ref={ponto3} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-[4rem] -bottom-[2rem]"></span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="relative top-[18rem]">
                                <p className="text-highlighted">4
                                    <span className="block text-[2.7rem] font-normal">
                                        Pousar
                                    </span>
                                </p>
                                <span ref={ponto4} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute right-full top-[1.5rem]"></span>
                            </button>
                        </li>
                    </ol>
                    <DynamicLines point1={ponto1} point2={ponto2} point3={ponto3} point4={ponto4} container={container} />
                </div>

                <img className="absolute right-full h-full top-0 -translate-y-[10rem] object-contain" src="/img/planet-earth.png" alt="" />
                <img className="absolute left-full h-1/2 top-1/3 -translate-y-1/3 object-contain" src="/img/moon.png" alt="" />
                <ol className="flex gap-14 w-[110%] -translate-x-[5%] justify-between items-center mt-80 text-[1.9rem] text-white font-light leading-7">
                    <li className="max-w-[28.6rem]">
                        Todo o processo de preparação leva aproximadamente 5 dias
                    </li>
                    <span
                        className=" block w-14 h-[1px] relative bg-white flex-shrink-0
                            after:origin-bottom-right after:absolute after:top-0 after:right-0 after:w-3 after:bg-white after:h-[1px] after:rotate-[-40deg]
                            before:origin-top-right before:absolute before:top-0 before:right-0 before:w-3  before:bg-white before:h-[1px] before:rotate-[40deg] "
                    />
                    <li className="max-w-[28.6rem]">
                        Vestir o traje e embarcar na aeronave, semelhante à viagens de avião na Terra
                    </li>
                    <span
                        className="block w-14 h-[1px] relative bg-white flex-shrink-0
                            after:origin-bottom-right after:absolute after:top-0 after:right-0 after:w-3 after:bg-white after:h-[1px] after:rotate-[-40deg]
                            before:origin-top-right before:absolute before:top-0 before:right-0 before:w-3  before:bg-white before:h-[1px] before:rotate-[40deg] "
                    />
                    <li className="max-w-[25rem]">
                        A viagem é a parte mais emocionante, você terá vistas incríveis e inesquecíveis
                    </li>
                    <span
                        className=" block w-14 h-[1px] relative bg-white flex-shrink-0
                            after:origin-bottom-right after:absolute after:top-0 after:right-0 after:w-3 after:bg-white after:h-[1px] after:rotate-[-40deg]
                            before:origin-top-right before:absolute before:top-0 before:right-0 before:w-3  before:bg-white before:h-[1px] before:rotate-[40deg] "
                    />
                    <li className="max-w-[21.6rem]">

                        Finalmente a chegada: Ela mudará toda a sua perspectiva sobre a vida
                    </li>
                </ol>
            </div>
        </section>
    )
}
