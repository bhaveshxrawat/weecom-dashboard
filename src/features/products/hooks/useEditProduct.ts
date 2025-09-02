import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { editProduct } from "@/services/apiProducts";
import type { NewProductType } from "@/types/product";

type MutationParams = { newProductData: NewProductType } & {
	id: number;
};
export function useEditProduct() {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationFn: ({ newProductData, id }: MutationParams) =>
			editProduct(id, newProductData),
		onSuccess: () => {
			toast.success(`Your product has been edited`);
			queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});
	return { editProduct: mutate, isEditingProduct: isPending };
}
