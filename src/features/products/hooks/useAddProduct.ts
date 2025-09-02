import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { addProduct } from "@/services/apiProducts";

export function useAddProduct() {
	const queryClient = useQueryClient();
	const { mutate, isPending } = useMutation({
		mutationFn: addProduct,
		onSuccess: (data) => {
			toast.success(`Yay! ${data.title} has been created.`);
			queryClient.invalidateQueries({
				queryKey: ["products"],
			});
		},
	});
	return { addProduct: mutate, isAddingProduct: isPending };
}
