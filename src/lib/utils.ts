import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// biome-ignore lint/suspicious/noExplicitAny: <needed>
export function debounce<T, U extends any[]>(
	fn: (...args: U) => T,
	delay = 300,
) {
	let timer: ReturnType<typeof setTimeout>;
	return (...args: U) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
}
