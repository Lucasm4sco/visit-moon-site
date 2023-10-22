import { LineStylesBetweenPoints, devices } from "./types";

export const getLineStylesBetweenPoints = (point1: HTMLSpanElement, point2: HTMLSpanElement, parent: HTMLDivElement, device: devices): LineStylesBetweenPoints => {
    const styles = { size: 0, rotate: 0, top: 0, left: 0, SIZE_POINTS: 0 };
    const localePoint1 = point1.getBoundingClientRect();
    const localePoint2 = point2.getBoundingClientRect();
    const localeParent = parent.getBoundingClientRect();

    styles.SIZE_POINTS = localePoint1.height || localePoint2.height;

    const leftPoint1 = localePoint1.x - localeParent.x;
    const topPoint1 = localePoint1.y - localeParent.y;
    const leftPoint2 = localePoint2.x - localeParent.x;
    const topPoint2 = localePoint2.y - localeParent.y;

    const widthBetweenPoints = leftPoint2 - leftPoint1;
    const heightBetweenPoints = topPoint2 - topPoint1;

    if (device == 'mobile') {
        styles.top = topPoint1;
        styles.size = heightBetweenPoints + styles.SIZE_POINTS;
        styles.left = leftPoint1 + (styles.SIZE_POINTS / 2);

        return styles;
    }


    styles.size = Math.sqrt(widthBetweenPoints ** 2 + heightBetweenPoints ** 2);
    styles.top = topPoint1 + (heightBetweenPoints / 2) + (styles.SIZE_POINTS / 2);

    styles.rotate = Math.atan2(heightBetweenPoints, widthBetweenPoints) * (180 / Math.PI);

    const rotateRelativeTo90 = styles.rotate % 90;
    const t = ''

    console.log(styles.rotate ,'-', rotateRelativeTo90)

    styles.left = leftPoint1;

    return styles;
}
