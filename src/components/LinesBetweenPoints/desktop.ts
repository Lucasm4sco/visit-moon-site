import { getLineStylesBetweenPoints } from "./shared";
import { LineStylesBetweenPoints, connectLinesArgs } from "./types";

const createLineElement = (styles: LineStylesBetweenPoints, index: number) => {
    const span = document.createElement('span');
    span.className = "absolute inline-block h-[2px] bg-white";

    span.style.transform = `rotate(${styles.rotate}deg)`;
    span.style.top = styles.top + "px";
    span.style.width = styles.size + "px";

    // first left is less due to rotate
    const isFirstElement = index === 0;

    if (isFirstElement)
        span.style.left = styles.left - (styles.SIZE_POINTS / 2) + "px";
    else
        span.style.left = styles.left + "px";

    return span;
}

const connectLines = ({ points, lines, container }: connectLinesArgs) => {
    const posicaoElemento = lines.current?.getBoundingClientRect()?.top;
    const isElementOnScreen = posicaoElemento && posicaoElemento < 200 && !lines.current?.innerHTML.trim();

    if (isElementOnScreen) {
        lines.current.classList.remove('animate-width-full');

        for (let i = 0; i < points.length - 1; i++) {
            // @ts-ignore 
            const styles = getLineStylesBetweenPoints(points[i].current, points[i + 1].current, container.current, 'desktop');
            const line = createLineElement(styles, i);
            lines.current.appendChild(line);
        }

        lines.current.classList.add('animate-width-full');
    };
}

const animateLines = ({ points, lines, container }: connectLinesArgs) => {
    const positionElement = lines.current?.getBoundingClientRect()?.top;
    const isElementOnScreen = positionElement && positionElement < 200 && !lines.current?.innerHTML.trim();

    if (isElementOnScreen) {
        connectLines({ points, lines, container });
    }
}

const desktop = { createLineElement, connectLines, animateLines };

export default desktop;