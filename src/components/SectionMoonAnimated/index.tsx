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
            <div className="container-limit relative flex-col justify-center items-center">
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
                            className="block w-[1%] h-[1%] absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-white"
                            style={{
                                transform: 'rotate(120deg) translate(5000%)'
                            }}
                        />
                        <span
                            className="block w-[1%] h-[1%] absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-white"
                            style={{
                                transform: 'rotate(240deg) translate(5000%)'
                            }}
                        />
                        <span
                            className="block w-[1%] h-[1%] absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full bg-white"
                            style={{
                                transform: 'rotate(0deg) translate(5000%)'
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}