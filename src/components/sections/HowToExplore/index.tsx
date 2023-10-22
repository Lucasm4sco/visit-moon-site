import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const DynamicLines = dynamic(() => import("@/components/LinesBetweenPoints"), {
    ssr: false,
});

const stepsDefault = {
    first: false,
    second: false,
    third: false,
    fourth: false,
    spans: false
}

export default function SectionHowToExplore() {
    const [steps, setSteps] = useState(stepsDefault);
    const container = useRef<HTMLDivElement>(null);
    const points = [
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null)
    ];

    const containerMobile = useRef<HTMLOListElement>(null);
    const pointsMobile = [
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null),
        useRef<HTMLSpanElement>(null)
    ];

    const handleSteps = (step: keyof typeof stepsDefault) => setSteps(prev => ({ ...stepsDefault, [step]: !prev[step] }));

    const hasFocus = (step: keyof typeof stepsDefault) => {
        if (steps[step])
            return true;

        return !Object.values(steps).some(value => value === true);
    }

    return (
        <section id="orders" className="pt-60 pb-60 p-40 sm:pb-80 min-h-full overflow-hidden">
            <div className="max-w-[1100px] m-auto text-center lg:text-start">
                <h2 className="text-[3.4rem] lg:text-[5.5rem] text-white font-medium p-2 lg:indent-20">
                    Como visitar a Lua
                </h2>
            </div>

            <div className="container-limit relative min-h-[70rem] hidden xl:block">
                <div ref={container} className="min-h-[40rem] relative">
                    <ol className="flex justify-between items-center font-semibold text-[10rem] text-center leading-[5rem] absolute inset-0">
                        <li className="relative">
                            <button className="relative" onClick={() => handleSteps('first')}>
                                <p className={`text-highlighted ${hasFocus('first') ? '' : 'opacity-40'}`}>1
                                    <span className="block text-[2.7rem] font-normal">
                                        Preparação
                                    </span>
                                </p>
                                <span ref={points[0]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-full top-[1.5rem]"></span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="relative top-[20.5rem] left-1/2" onClick={() => handleSteps('second')}>
                                <p className={`text-highlighted ${hasFocus('second') ? '' : 'opacity-40'}`}>2
                                    <span className="block text-[2.7rem] font-normal">
                                        Embarque
                                    </span>
                                </p>
                                <span ref={points[1]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-[5rem] -top-1/2"></span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="relative" onClick={() => handleSteps('third')}>
                                <p className={`text-highlighted ${hasFocus('third') ? '' : 'opacity-40'}`}>3
                                    <span className="block text-[2.7rem] font-normal">
                                        Viagem
                                    </span>
                                </p>
                                <span ref={points[2]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-[4rem] -bottom-[2rem]"></span>
                            </button>
                        </li>
                        <li className="relative">
                            <button className="relative top-[18rem]" onClick={() => handleSteps('fourth')}>
                                <p className={`text-highlighted ${hasFocus('fourth') ? '' : 'opacity-40'}`}>4
                                    <span className="block text-[2.7rem] font-normal">
                                        Pousar
                                    </span>
                                </p>
                                <span ref={points[3]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute right-full top-[1.5rem]"></span>
                            </button>
                        </li>
                    </ol>
                    <DynamicLines points={points}  container={container}  device="desktop"/>
                </div>
                <img className="absolute right-full h-full top-0 -translate-y-[10rem] object-contain hidden xl:inline" src="/img/planet-earth.png" alt="" />
                <img className="absolute left-full h-1/2 top-1/3 -translate-y-1/3 object-contain hidden xl:inline" src="/img/moon.png" alt="" />

                <ol className="flex gap-14 w-[110%] -translate-x-[5%] justify-between items-center mt-80 text-[1.9rem] text-white font-light leading-7">
                    <li className={`max-w-[28.6rem] ${hasFocus('first') ? '' : 'opacity-40'}`}>
                        Todo o processo de preparação leva aproximadamente 5 dias
                    </li>
                    <span
                        className={`
                            ${hasFocus('spans') ? '' : 'opacity-40'}
                            block w-14 h-[1px] relative bg-white flex-shrink-0
                            after:origin-bottom-right after:absolute after:top-0 after:right-0 after:w-3 after:bg-white after:h-[1px] after:rotate-[-40deg]
                            before:origin-top-right before:absolute before:top-0 before:right-0 before:w-3  before:bg-white before:h-[1px] before:rotate-[40deg]
                        `}
                    />
                    <li className={`max-w-[28.6rem] ${hasFocus('second') ? '' : 'opacity-40'}`}>
                        Vestir o traje e embarcar na aeronave, semelhante à viagens de avião na Terra
                    </li>
                    <span
                        className={`
                            ${hasFocus('spans') ? '' : 'opacity-40'}
                            block w-14 h-[1px] relative bg-white flex-shrink-0
                            after:origin-bottom-right after:absolute after:top-0 after:right-0 after:w-3 after:bg-white after:h-[1px] after:rotate-[-40deg]
                            before:origin-top-right before:absolute before:top-0 before:right-0 before:w-3  before:bg-white before:h-[1px] before:rotate-[40deg]
                        `}
                    />
                    <li className={`max-w-[25rem] ${hasFocus('third') ? '' : 'opacity-40'}`}>
                        A viagem é a parte mais emocionante, você terá vistas incríveis e inesquecíveis
                    </li>
                    <span
                        className={`
                            ${hasFocus('spans') ? '' : 'opacity-40'}
                            block w-14 h-[1px] relative bg-white flex-shrink-0
                            after:origin-bottom-right after:absolute after:top-0 after:right-0 after:w-3 after:bg-white after:h-[1px] after:rotate-[-40deg]
                            before:origin-top-right before:absolute before:top-0 before:right-0 before:w-3  before:bg-white before:h-[1px] before:rotate-[40deg]
                        `}
                    />
                    <li className={`max-w-[21.6rem] ${hasFocus('fourth') ? '' : 'opacity-40'}`}>
                        Finalmente a chegada: Ela mudará toda a sua perspectiva sobre a vida
                    </li>
                </ol>
            </div>
            <div className="container-limit flex flex-row-reverse justify-center xl:hidden pt-40 p-12 sm:pt-80">
                <div className="w-1/3 flex items-center justify-start">
                    <ol ref={containerMobile} className="relative font-semibold text-[10rem] text-center leading-[5rem]">
                        <li className="relative">
                            <button className="relative" onClick={() => handleSteps('first')}>
                                <p className={`text-highlighted ${hasFocus('first') ? '' : 'opacity-40'}`}>1
                                    <span className="block text-[2.7rem] font-normal">
                                        Preparação
                                    </span>
                                </p>
                                <span ref={pointsMobile[0]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[2rem]"></span>
                            </button>
                        </li>
                        <li className="relative  mt-[35.2rem]">
                            <button className="relative" onClick={() => handleSteps('second')}>
                                <p className={`text-highlighted ${hasFocus('second') ? '' : 'opacity-40'}`}>2
                                    <span className="block text-[2.7rem] font-normal">
                                        Embarque
                                    </span>
                                </p>
                                <span ref={pointsMobile[1]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-1/2 -translate-x-1/2 -top-[6rem]"></span>
                                <span ref={pointsMobile[2]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[2rem]"></span>
                            </button>
                        </li>
                        <li className="relative  mt-[35.2rem]">
                            <button className="relative" onClick={() => handleSteps('third')}>
                                <p className={`text-highlighted  w-full ${hasFocus('third') ? '' : 'opacity-40'}`}>3
                                    <span className="block text-[2.7rem] font-normal w-full">
                                        Viagem
                                    </span>
                                </p>
                                <span ref={pointsMobile[3]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-1/2 -translate-x-1/2 -top-[6rem]"></span>
                                <span ref={pointsMobile[4]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[2rem]"></span>
                            </button>
                        </li>
                        <li className="relative  mt-[35.2rem]">
                            <button className="relative" onClick={() => handleSteps('fourth')}>
                                <p className={`text-highlighted relative -left-2 ${hasFocus('fourth') ? '' : 'opacity-40'}`}>4
                                    <span className="block  text-[2.7rem] font-normal">
                                        Pousar
                                    </span>
                                </p>
                                <span ref={pointsMobile[5]} className="inline-block h-[14px] w-[14px] bg-white rounded-full absolute left-1/2 -translate-x-1/2 -top-[6rem]"></span>
                            </button>
                        </li>
                        <DynamicLines points={pointsMobile} container={containerMobile} device="mobile" />
                    </ol>
                </div>
                <div className="flex-grow flex flex-col justify-center items-center">
                    <img className="-translate-x-1/2 sm:-translate-x-1/3 -translate-y-1/4 object-contain w-full max-w-[50rem]" src="/img/planet-earth.png" alt="" />
                    <ol className="w-full max-w-[40rem] text-[2.5rem] text-white font-light leading-9">
                        <li className={`w-11/12  ${hasFocus('first') ? '' : 'opacity-40'}`}>
                            Todo o processo de preparação leva aproximadamente 5 dias
                        </li>
                        <li className={`w-11/12  mt-[18rem] ${hasFocus('second') ? '' : 'opacity-40'}`}>
                            Vestir o traje e embarcar na aeronave, semelhante à viagens de avião na Terra
                        </li>
                        <li className={`w-11/12 mt-[18rem] ${hasFocus('third') ? '' : 'opacity-40'}`}>
                            A viagem é a parte mais emocionante, você terá vistas incríveis e inesquecíveis
                        </li>
                        <li className={`w-11/12  mt-[18rem] ${hasFocus('fourth') ? '' : 'opacity-40'}`}>
                            Finalmente a chegada: Ela mudará toda a sua perspectiva sobre a vida
                        </li>
                    </ol>
                    <img className="-translate-x-1/3 translate-y-1/3 object-contain w-full max-w-[40rem]" src="/img/moon.png" alt="" />
                </div>
            </div>
        </section>
    )
}
