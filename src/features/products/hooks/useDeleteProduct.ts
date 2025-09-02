import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteProduct } from "@/services/apiProducts";

type MutationParams = {
	id: number;
};
export function useDeleteProduct() {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationFn: ({ id }: MutationParams) => deleteProduct(id),
		onSuccess: () => {
			toast.success(`Your product has been deleted`);
			queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
	return { deleteProduct: mutate, isDeletingProduct: isPending };
}
