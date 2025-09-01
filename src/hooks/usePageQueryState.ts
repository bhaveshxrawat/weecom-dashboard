import { parseAsInteger, useQueryState } from "nuqs";

export function usePageQueryState() {
	const pageQueryStateOptions = useQueryState(
		"page",
		parseAsInteger.withDefault(1),
	);
	return pageQueryStateOptions;
}
