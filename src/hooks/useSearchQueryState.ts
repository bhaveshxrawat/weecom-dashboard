import { parseAsString, useQueryState } from "nuqs";

export function useSearchQueryState() {
	const searchQueryStateOptions = useQueryState(
		"q",
		parseAsString.withDefault(""),
	);
	return searchQueryStateOptions;
}
