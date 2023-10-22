import { getLineStylesBetweenPoints } from "./shared";
import { LineStylesBetweenPoints, connectLinesArgs } from "./types";

const createLineElement = (styles: LineStylesBetweenPoints) => {
    const span = document.createElement('span');
    span.className = "absolute inline-block w-[2px] bg-white -translate-x-1/2";
    span.style.top = styles.top + "px";
    span.style.height = styles.size + "px";
    span.style.left = styles.left + "px";
    return span;
}

const connectLines = ({ points, lines, container }: connectLinesArgs) => {
    for (let i = 0; i < points.length; i += 2) {
        // @ts-ignore -- typescript cannot identify that null values has already been verified 
        const styles = getLineStylesBetweenPoints(points[i].current, points[i + 1].current, container.current, 'mobile');
        const line = createLineElement(styles);
        lines.current?.appendChild(line);
    }
};

const animateLines = ({ lines }: connectLinesArgs) => {
    const positionElement = lines.current && lines.current?.getBoundingClientRect();

    if (positionElement) {
        lines.current.style.height = - positionElement.top + 500 + 'px';
    }
}

const mobile = { connectLines, animateLines };

export default mobile;