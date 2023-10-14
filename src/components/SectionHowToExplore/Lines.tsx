import { RefObject, useEffect, useRef } from "react"

type LinesBetweenPointsProps = {
    container: RefObject<HTMLDivElement>;
    point1: RefObject<HTMLSpanElement>;
    point2: RefObject<HTMLSpanElement>;
    point3: RefObject<HTMLSpanElement>;
    point4: RefObject<HTMLSpanElement>;
}

const calcularDistanciaEntrePontos = (ref1: RefObject<HTMLSpanElement>, ref2: RefObject<HTMLSpanElement>, refParent: RefObject<HTMLDivElement>, refLines: RefObject<HTMLDivElement>) => {
    const hasValues = ref1.current && ref2.current && refParent.current && refLines.current;
    const SIZE_POINTS = 14;

    if (hasValues) {
        const local1 = ref1.current?.getBoundingClientRect();
        const local2 = ref2.current?.getBoundingClientRect();
        const localParent = refParent.current?.getBoundingClientRect();

        const distanciaLeft1 = local1?.x - localParent?.x;
        const distanciaTop1 = local1?.y - localParent?.y;
        const distanciaLeft2 = local2?.x - localParent?.x;
        const distanciaTop2 = local2?.y - localParent?.y;

        const widthEntrePontos = distanciaLeft2 - distanciaLeft1;
        const heightEntrePontos = distanciaTop2 - distanciaTop1;

        const distanciaEntrePontos = Math.sqrt(widthEntrePontos ** 2 + heightEntrePontos ** 2);
        const rotacao = Math.atan2(heightEntrePontos, widthEntrePontos) * (180 / Math.PI);

        const span = document.createElement('span');
        span.className = "absolute inline-block h-[2px] bg-white";

        span.style.transform = `rotate(${rotacao}deg)`;
        span.style.top = distanciaTop1 + (heightEntrePontos / 2) + (SIZE_POINTS / 2) + "px";
        span.style.width = distanciaEntrePontos + "px";

        // first left is less due to rotate
        if (!refLines.current.innerHTML.trim())
            span.style.left = distanciaLeft1 - (SIZE_POINTS / 2) + "px";
        else
            span.style.left = distanciaLeft1 + "px";

        refLines.current.appendChild(span);
    }
}

export default function LinesBetweenPoints({ container, point1, point2, point3, point4 }: LinesBetweenPointsProps) {
    const lines = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const buildLines = () => {
            if (!lines.current)
                return

            lines.current.innerHTML = '';
            lines.current.classList.remove('animate-width-full');
            calcularDistanciaEntrePontos(point1, point2, container, lines);
            calcularDistanciaEntrePontos(point2, point3, container, lines);
            calcularDistanciaEntrePontos(point3, point4, container, lines);
            lines.current.classList.add('animate-width-full');
        }

        const buildLinesAnimated = () => {
            const posicaoElemento = lines.current?.getBoundingClientRect()?.top;
            const isElementOnScreen = posicaoElemento && posicaoElemento < 200 && !lines.current?.innerHTML.trim();

            if (isElementOnScreen)
                buildLines();
        }

        window.addEventListener('scroll', buildLinesAnimated);
        window.addEventListener('resize', buildLines);

        return () => {
            window.removeEventListener('scroll', buildLinesAnimated);
            window.removeEventListener('resize', buildLines);
        }
    }, [container, point1, point2, point3, point4, lines])

    return (
        <div ref={lines} className="absolute inset-0 w-0 overflow-x-hidden -z-10"></div>
    )
}