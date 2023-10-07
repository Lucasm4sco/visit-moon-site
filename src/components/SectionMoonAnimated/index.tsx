import MoonAnimated from "./moon-animated";

const sizeMoon = {
    width: '50vw',
    height: '50vw',
    maxWidth: 550,
    maxHeight: 550
}

export default function SectionMoonAnimated() {

    return (
        <section>
            <div className="container-limit flex items-center flex-col ">
                <div
                    style={{
                        height: sizeMoon.height,
                        maxHeight: sizeMoon.maxHeight
                    }}
                    className="relative"
                >
                    <div className="absolute left-1/2 translate-x-[-52%] top-1/2 translate-y-[-40%]">
                        <h1 className="font-medium text-[20vw] text-highlighted whitespace-nowrap hightlighted-text-opacity">
                            MO
                            <span
                                className="inline-block"
                                style={{
                                    width: `calc(${sizeMoon.width} - 1em)`,
                                    maxWidth: `calc(${sizeMoon.maxWidth}px - .5em)`
                                }}
                            />
                            ON
                        </h1>
                    </div>
                    <div className="relative p-4 left-1/2 translate-x-[-50%] border-2 rounded-full">
                        <MoonAnimated
                            sizeMoon={sizeMoon}
                            className="rounded-full cursor-pointer"
                        />
                        <span className="block w-[75%] h-[75%] absolute inset-0 m-auto animate-circle-1 -z-10">
                            <span
                                className="block h-[2.5%] w-[2.5%] m-[1.5%] bg-white rounded-full"
                            />
                        </span>
                        <span className="block w-[75%] h-[75%] absolute inset-0 m-auto animate-circle-2 -z-10">
                            <span
                                className="block h-[2.5%] w-[2.5%] m-[1.5%] bg-white rounded-full"
                            />
                        </span>
                        <span className="block w-[75%] h-[75%] absolute inset-0 m-auto animate-circle-3 -z-10">
                            <span
                                className="block h-[2.5%] w-[2.5%] m-[1.5%] bg-white rounded-full"
                            />
                        </span>
                    </div>
                </div>
                <p className="text-white text-[2.4em] mt-40">Visite a lua, deixe sua marca.</p>
                <p className="text-white text-[2.4rem] mt-10 font-black">Comprar passagens</p>
                <div className="w-[45px] h-[45px] mt-14 border-2 rounded-full">
                    <span className="block w-full h-full relative animate-bounce">
                        <span
                            className="
                            block absolute bg-white w-[2px] h-[41px] left-1/2 translate-x-[-50%] top-[-45%]
                            before:block before:absolute before:bg-white before:w-[2px] before:h-[12px] before:left-[-4px]  before:top-[80%] before:rotate-[-45deg]
                            after:block after:absolute after:bg-white after:w-[2px] after:h-[12px] after:left-[4px]  after:top-[80%] after:rotate-[45deg]
                            "
                        />
                    </span>
                </div>
            </div>
        </section>
    )
}
