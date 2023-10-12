import TextSpanContent from "./TextSpanContent"
import { useRef, useEffect, useState } from "react"
import { TextInfiniteProps } from "./types"

export default function TextInfinite(props: TextInfiniteProps) {
    const textRef = useRef<HTMLSpanElement>(null);
    const [numberOfWords, setNumberOfWords] = useState(0);

    useEffect(() => {
        if (textRef.current?.clientWidth) {
            setNumberOfWords(Math.ceil(window.innerWidth / textRef.current?.clientWidth));
        }
    }, [])

    return (
        <div className="relative max-w-screen overflow-hidden m-auto">
            <p className="uppercase text-[5rem] leading-[5rem] lg:text-[10rem] lg:leading-[11rem] text-gray-theme font-medium whitespace-nowrap">
                <TextSpanContent {...props} numberOfWords={numberOfWords} />

                <span className="absolute inline-block left-full opacity-0" ref={textRef} >
                    &nbsp; {props.text}
                </span>
            </p>
        </div>
    )
}
