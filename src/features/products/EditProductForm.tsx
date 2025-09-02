import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePageQueryState } from "@/hooks/usePageQueryState";
import { useProductCategoriesState } from "@/hooks/useProductCategoryState";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import type { ProductsResponse } from "@/services/apiProducts";
import type { OGProductType } from "@/types/product";
import { ExtendedNewProductSchema } from "./AddProductForm";
import { useEditProduct } from "./hooks/useEditProduct";

type FormValues = z.infer<typeof ExtendedNewProductSchema>;

function EditForm({
	product,
	id,
	closeDialog,
}: {
	product: OGProductType;
	id: number;
	closeDialog: () => void;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty },
	} = useForm<FormValues>({
		defaultValues: {
			category: product.category,
			price: product.price,
			title: product.title,
			stock: product.stock,
		},
		resolver: zodResolver(ExtendedNewProductSchema),
	});
	const { editProduct, isEditingProduct } = useEditProduct();

	function onSubmit(values: FormValues) {
		editProduct(
			{ newProductData: values, id },
			{
				onSuccess: () => {
					closeDialog();
				},
			},
		);
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
			<div className="grid gap-2">
				<Label htmlFor="title">Title</Label>
				<Input
					id="title"
					type="text"
					placeholder="MacBook M4"
					{...register("title")}
				/>
				<p className="text-sm text-red-500">{errors.title?.message}</p>
			</div>
			<div className="grid gap-2">
				<Label htmlFor="category">Category</Label>
				<Input
					id="category"
					type="text"
					placeholder="electronics"
					{...register("category")}
				/>
				<p className="text-sm text-red-500">{errors.category?.message}</p>
			</div>
			<div className="flex gap-3 items-start">
				<div className="grid gap-2">
					<Label htmlFor="price">Price</Label>
					<Input
						id="price"
						type="number"
						step="any"
						placeholder="399"
						{...register("price", { valueAsNumber: true })}
					/>
					<p className="text-sm text-red-500">{errors.price?.message}</p>
				</div>
				<div className="grid gap-2">
					<Label htmlFor="stock">Stock</Label>
					<Input
						id="stock"
						type="number"
						placeholder="399"
						{...register("stock", { valueAsNumber: true })}
					/>
					<p className="text-sm text-red-500">{errors.stock?.message}</p>
				</div>
			</div>
			<Button type="submit" disabled={isEditingProduct || !isDirty}>
				Submit
			</Button>
		</form>
	);
}
export default function EditProductForm({
	id,
	closeDialog,
}: {
	id: number;
	closeDialog: () => void;
}) {
	const queryClient = useQueryClient();
	const [page] = usePageQueryState();
	const [searchQuery] = useSearchQueryState();
	const [category] = useProductCategoriesState();
	const queryCache = queryClient.getQueryCache();
	const query = queryCache.find({
		queryKey: ["products", page, searchQuery, category],
	});
	const data = query?.state.data as ProductsResponse;
	const productData = data?.products.find((item) => item.id === id);

	if (!productData) {
		toast.error("Please refresh and try again");
		closeDialog();
		return null;
	}
	return <EditForm product={productData} closeDialog={closeDialog} id={id} />;
}
