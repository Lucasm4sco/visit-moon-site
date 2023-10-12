export type SectionTextInfiniteProps = {
    text: string;
}

export type TextInfiniteProps = {
    text: string;
    direction?: 'to left' | 'to right';
    isHighlightText?: boolean;
}

export type TextSpanContentProps = TextInfiniteProps & {
    numberOfWords: number;
}
