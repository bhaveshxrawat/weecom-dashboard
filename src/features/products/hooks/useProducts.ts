import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { parseAsInteger, useQueryState } from "nuqs";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { getProducts } from "@/services/apiProducts";

export function useProducts() {
	const [page] = useQueryState("page", parseAsInteger.withDefault(1));
	const skip = Math.min((page - 1) * PRODUCTS_PER_PAGE);
	const { data, error, isFetching, isPending, isLoading } = useQuery({
		queryKey: ["products", page],
		queryFn: () => getProducts(skip),
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
