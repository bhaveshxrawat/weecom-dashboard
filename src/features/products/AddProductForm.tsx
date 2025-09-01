import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddProduct } from "./hooks/useAddProduct";

//This is file has many @ts-expect-error; not proud of it. Deadline's near. Will come back to this
// TODO remove ts-expect-error

export const newProductSchema = z.object({
	title: z
		.string({ error: "This is required" })
		.min(2, {
			error: "Title must be atleast two characters.",
		})
		.max(50, {
			error: "Title must not exceed 50 characters.",
		}),
	price: z.coerce.number<string>({ error: "This is required" }).min(1, {
		error: "Product must have a price",
	}),
	category: z.string({ error: "This is required" }).min(2, {
		error: "Category must be atleast two characters.",
	}),
	stock: z.coerce.number<string>({ error: "This is required" }),
});

function AddProductForm({ closeDialog }: { closeDialog: () => void }) {
	const form = useForm<z.infer<typeof newProductSchema>>({
		// @ts-expect-error
		resolver: zodResolver(newProductSchema),
	});
	const { addProduct, isAddingProduct } = useAddProduct();
	function onSubmit(values: z.infer<typeof newProductSchema>) {
		addProduct(values, {
			onSuccess: () => {
				closeDialog();
			},
		});
	}
	return (
		<Form {...form}>
			{/* @ts-ignore */}
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
				<FormField
					// @ts-expect-error
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input placeholder="MacBook M4" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					// @ts-expect-error
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<Input placeholder="electronics" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex gap-3 items-start">
					<FormField
						// @ts-expect-error
						control={form.control}
						name="price"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Price</FormLabel>
								<FormControl>
									<Input
										type="number"
										inputMode="numeric"
										placeholder="1299"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						// @ts-expect-error
						control={form.control}
						name="stock"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Stock</FormLabel>
								<FormControl>
									<Input
										type="number"
										inputMode="numeric"
										placeholder="99"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type="submit" disabled={isAddingProduct}>
					Submit
				</Button>
			</form>
		</Form>
	);
}
export default AddProductForm;
