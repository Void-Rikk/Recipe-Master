export function debounce<T extends (...args: never[]) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return function(...args: Parameters<T>) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
            timeoutId = null;
        }, delay);
    };
}

export function getTotalPortions(totalAmount: number, portionAmount: number) {
    return Math.ceil(totalAmount / portionAmount);
}

export function getPortionAmount() {
    const isMobile = matchMedia("(width <= 768px)");

    return isMobile.matches ? 3 : 12;
}

export function constructQueryParams(entries: Record<string, string | number>) {
    let result = "";

    for (const key in entries) {
        result += encodeURIComponent(key) + "=" + encodeURIComponent(entries[key]) + "&";
    }

    return result ? "?" + result.substring(0, result.length - 1) : "";
}