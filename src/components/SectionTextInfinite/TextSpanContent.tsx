import { TextSpanContentProps } from "./types"

export default function TextSpanContent({ text, isHighlightText, numberOfWords, direction }: TextSpanContentProps) {
    const numberOfSpans = [...Array(numberOfWords + 1)];

    const getContentTextHighlighted = (index: number, secondWordHighlighted: boolean) => {
        const isHighlightedText = secondWordHighlighted ? index % 2 == 0 : index % 2 != 0;

        if (isHighlightedText)
            return <span key={index} className="text-highlighted">&nbsp;{text}</span>;

        return ' ' + text;
    }

    return isHighlightText ? (
        <>
            <span
                className={`inline-block ${direction == 'to left' ? 'animate-text-left-1' : 'animate-text-right-1'}`}
            >
                {numberOfSpans.map((_, i) => getContentTextHighlighted(i, true))}
            </span>
            <span
                className={`inline-block ${direction == 'to left' ? 'animate-text-left-2' : 'animate-text-right-2'}`}
            >
                {numberOfSpans.map((_, i) => getContentTextHighlighted(i, false))}
            </span>
        </>
    ) : (
        <>
            <span
                className={`inline-block ${direction == 'to left' ? 'animate-text-left-1' : 'animate-text-right-1'}`}
            >
                {(' ' + text).repeat(numberOfWords)}
            </span>
            <span
                className={`inline-block ${direction == 'to left' ? 'animate-text-left-2' : 'animate-text-right-2'}`}
            >
                {(' ' + text).repeat(numberOfWords)}
            </span>
        </>
    )
}

