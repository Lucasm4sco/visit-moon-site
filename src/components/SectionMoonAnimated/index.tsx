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
            <div className="container-limit relative flex-col justify-beetwen items-center">
                <div
                    style={{
                        height: sizeMoon.height,
                        maxHeight: sizeMoon.maxHeight
                    }}
                >
                    <div className="absolute left-1/2 translate-x-[-52%] top-1/2 translate-y-[-52%]">
                        <h1 className="font-medium text-[30rem] text-highlighted whitespace-nowrap hightlighted-text-opacity">
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
                    <div className="absolute left-1/2 translate-x-[-50%] p-5 border-2 rounded-full">
                        <MoonAnimated
                            sizeMoon={sizeMoon}
                            className="rounded-full cursor-pointer"
                        />
                        <span
                            className="block w-[2.54%] h-[2.54%] absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-white animate-circle-1"
                            style={{
                                transform: 'rotate(90deg) translate(1980%)'
                            }}
                        />
                        <span
                            className="block w-[2.54%] h-[2.54%] absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-white animate-circle-2"
                            style={{
                                transform: 'rotate(180deg) translate(1980%)'
                            }}
                        />
                        <span
                            className="block w-[2.54%] h-[2.54%] absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-white animate-circle-3"
                            style={{
                                transform: 'rotate(270deg) translate(1980%)'
                            }}
                        />
                    </div>
                </div>
                <p className="text-white text-[2.2rem] text-center m-40">Visite a lua, deixe sua marca.</p>
            </div>
        </section>
    )
}