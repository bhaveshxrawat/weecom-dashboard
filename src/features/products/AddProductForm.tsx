import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAddProduct } from "./hooks/useAddProduct";

export const ExtendedNewProductSchema = z.object({
	title: z
		.string()
		.min(2, {
			error: "Must be atleast two characters.",
		})
		.max(50, {
			error: "Must not exceed 50 characters.",
		}),
	price: z.coerce
		.number<number>("Must be a number")
		.int()
		.positive()
		.min(1, { message: "Price must be at least 1" }),
	category: z
		.string({ error: "Required" })
		.min(2, {
			error: "Must be atleast two characters.",
		})
		.max(50, {
			error: "Must not exceed 50 characters.",
		}),
	stock: z.coerce
		.number<number>("Must be a number")
		.int()
		.min(0, { message: "Stock must be at least 0" }),
});

type FormValues = z.infer<typeof ExtendedNewProductSchema>;

export default function AddProductForm({
	closeDialog,
}: {
	closeDialog: () => void;
}) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		defaultValues: {
			category: "",
			price: 0,
			title: "",
			stock: 0,
		},
		resolver: zodResolver(ExtendedNewProductSchema),
	});
	const { addProduct, isAddingProduct } = useAddProduct();
	function onSubmit(values: FormValues) {
		addProduct(values, {
			onSuccess: () => {
				closeDialog();
			},
		});
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
			<Button type="submit" disabled={isAddingProduct || !isValid}>
				Submit
			</Button>
		</form>
	);
}
