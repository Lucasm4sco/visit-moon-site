import { useEffect, useMemo, useRef } from "react"
import { LinesBetweenPointsProps, devices } from "./types";
import desktop from "./desktop";
import mobile from "./mobile";

const useDevice = (device: devices) => {
    const devices = { desktop, mobile }
    return devices[device];
}

export default function LinesBetweenPoints({ container, points, device }: LinesBetweenPointsProps) {
    const devices = useDevice(device);
    const lines = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const buildLines = () => {
            const hasNullValues = container.current == null || lines.current == null || points.some(point => point.current == null);

            if (hasNullValues)
                return

            lines.current.innerHTML = '';
            devices.connectLines({ points, container, lines });
        };

        const animateLines = () => devices.animateLines({ points, container, lines });

        buildLines();
        window.addEventListener('resize', buildLines);
        window.addEventListener('scroll', animateLines);
        
        return () => {
            window.removeEventListener('resize', buildLines);
            window.removeEventListener('scroll', animateLines);
        }
    }, [container, points, lines])

    return (
        <div ref={lines} className={`absolute inset-0 overflow-x-hidden -z-10 ${device === 'desktop' ? 'w-0 overflow-x-hidden' : 'w-full overflow-y-hidden'}`}></div>
    )
}