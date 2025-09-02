import { useQuery } from "@tanstack/react-query";
import { getProductCategories } from "@/services/apiProducts";

export function useProductCategories() {
	const {
		data,
		error,
		isFetching,
		isLoading,
		isPending,
		isRefetching,
		refetch,
	} = useQuery({
		queryFn: getProductCategories,
		queryKey: ["categories"],
		refetchOnMount: false,
		staleTime: Infinity,
	});
	return {
		categoryData: data,
		categoryError: error,
		refetchCategory: refetch,
		categoryisRefetching: isRefetching,
		categoryIsFetching: isFetching,
		categoryIsLoading: isLoading,
		categoryIsPending: isPending,
	};
}
