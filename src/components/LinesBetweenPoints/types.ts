import { RefObject } from "react";

export type devices = 'mobile' | 'desktop';

export type LineStylesBetweenPoints = {
    size: number;
    rotate: number;
    top: number;
    left: number;
    SIZE_POINTS: number;
}

export type LinesBetweenPointsProps = {
    container: RefObject<HTMLDivElement> | RefObject<HTMLOListElement>;
    points: RefObject<HTMLSpanElement>[];
    device: devices
}

export type connectLinesArgs = Omit<LinesBetweenPointsProps, 'device'> & {
    lines: RefObject<HTMLDivElement>
}