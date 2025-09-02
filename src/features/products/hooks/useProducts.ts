import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { useDebouncedValue } from "@/hooks/useDebouncedValue";
import { useProductCategoriesState } from "@/hooks/useProductCategoryState";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { getProducts } from "@/services/apiProducts";
import { usePageQueryState } from "../../../hooks/usePageQueryState";

export function useProducts() {
	const [page] = usePageQueryState();
	const [searchQuery] = useSearchQueryState();
	const [category] = useProductCategoriesState();
	const debouncedSearchQuery = useDebouncedValue(searchQuery);
	const skip = Math.ceil((page - 1) * PRODUCTS_PER_PAGE);
	const {
		data,
		error,
		isFetching,
		isPending,
		isLoading,
		refetch,
		isRefetching,
	} = useQuery({
		queryKey: ["products", page, debouncedSearchQuery, category],
		queryFn: () => getProducts(skip, debouncedSearchQuery, category),
		placeholderData: keepPreviousData,
	});
	return {
		productsData: data,
		productsError: error,
		refetchProducts: refetch,
		productsRefetching: isRefetching,
		productsLoading: isLoading,
		productsFetching: isFetching,
		productsPending: isPending,
	};
}
