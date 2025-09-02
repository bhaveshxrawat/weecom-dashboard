import { parseAsString, useQueryState } from "nuqs";

export function useProductCategoriesState() {
	const productCategoryState = useQueryState("category", parseAsString);
	return productCategoryState;
}
