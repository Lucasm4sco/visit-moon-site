import TextInfinite from "./TextInfinite"
import { SectionTextInfiniteProps } from "./types"

export default function SectionTextInfinite({ text }: SectionTextInfiniteProps) {
    return (
        <section className="pt-80 pb-80">
            <TextInfinite text={text} direction="to left" />
            <TextInfinite text={text} isHighlightText direction="to right" />
            <TextInfinite text={text} direction="to left" />
        </section>
    )
}