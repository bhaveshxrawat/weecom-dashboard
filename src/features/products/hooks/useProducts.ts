import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { getProducts } from "@/services/apiProducts";
import { usePageQueryState } from "../../../hooks/usePageQueryState";

export function useProducts() {
	const [page] = usePageQueryState();
	const [searchQuery] = useSearchQueryState();
	const debouncedSearchQuery = useDebouncedValue(searchQuery);
	const skip = Math.ceil((page - 1) * PRODUCTS_PER_PAGE);
	const { data, error, isFetching, isPending, isLoading } = useQuery({
		queryKey: ["products", page, debouncedSearchQuery],
		queryFn: () => getProducts(skip, debouncedSearchQuery),
		placeholderData: keepPreviousData,
	});
	return {
		productsData: data,
		productsError: error,
		productsLoading: isLoading,
		productsFetching: isFetching,
		productsPending: isPending,
	};
}
