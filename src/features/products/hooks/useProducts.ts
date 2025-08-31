import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/apiProducts";

export function useProducts() {
	const { data, error, isFetching } = useQuery({
		queryKey: ["products"],
		queryFn: () => getProducts(),
	});
	return {
		productsData: data,
		productsError: error,
		productsLoading: isFetching,
	};
}
