import { RefObject, useEffect, useRef } from "react"

type LinesBetweenPointsMobileProps = {
    container: RefObject<HTMLOListElement>;
    point1: RefObject<HTMLSpanElement>;
    point2: RefObject<HTMLSpanElement>;
    point3: RefObject<HTMLSpanElement>;
    point4: RefObject<HTMLSpanElement>;
    point5: RefObject<HTMLSpanElement>;
    point6: RefObject<HTMLSpanElement>;
}

const calcularDistanciaEntrePontos = (ref1: RefObject<HTMLSpanElement>, ref2: RefObject<HTMLSpanElement>, refParent: RefObject<HTMLOListElement>, refLines: RefObject<HTMLDivElement>) => {
    const hasValues = ref1.current && ref2.current && refParent.current && refLines.current;
    const SIZE_POINTS = 14;

    if (hasValues) {
        const local1 = ref1.current?.getBoundingClientRect();
        const local2 = ref2.current?.getBoundingClientRect();
        const localParent = refParent.current?.getBoundingClientRect();

        const distanciaLeft = local1?.x - localParent?.x;
        const distanciaTop1 = local1?.y - localParent?.y;
        const distanciaTop2 = local2?.y - localParent?.y;

        const heightEntrePontos = distanciaTop2 - distanciaTop1;
        const distanciaEntrePontos = heightEntrePontos + SIZE_POINTS;

        const span = document.createElement('span');
        span.className = "absolute inline-block w-[2px] bg-white -translate-x-1/2";
        span.style.top = distanciaTop1 + "px";
        span.style.height = distanciaEntrePontos + "px";
        span.style.left = distanciaLeft + (SIZE_POINTS / 2) + "px";
        refLines.current.appendChild(span);
    }
}

export default function LinesBetweenPoints({ point1, point2, point3, point4, point5, point6, container }: LinesBetweenPointsMobileProps) {
    const lines = useRef<HTMLDivElement>(null);
    const allLines = [point1, point2, point3, point4, point5, point6];

    const animateLines = () => {
        const positionElement = lines.current && lines.current?.getBoundingClientRect();
        
        if (positionElement) {
            lines.current.style.height =  -positionElement.top + 500 + 'px';
        }
    }

    useEffect(() => {
        const buildLines = () => {
            calcularDistanciaEntrePontos(point1, point2, container, lines);
            calcularDistanciaEntrePontos(point3, point4, container, lines);
            calcularDistanciaEntrePontos(point5, point6, container, lines);
        }

        buildLines();
        window.addEventListener('scroll', animateLines);
        return () => window.removeEventListener('scroll', animateLines);
    }, [container, ...allLines, lines])

    return (
        <div ref={lines} className="absolute inset-0 w-full h-0 overflow-y-hidden -z-10"></div>
    )
}
