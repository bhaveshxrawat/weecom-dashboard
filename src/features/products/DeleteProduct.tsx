import { Trash } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteProduct } from "./hooks/useDeleteProduct";

export default function DeleteProduct({ id }: { id: number }) {
	const [open, setOpen] = useState(false);
	const { deleteProduct, isDeletingProduct } = useDeleteProduct();
	function handleProductDelete() {
		deleteProduct(
			{ id },
			{
				onSuccess: () => {
					setOpen(false);
				},
			},
		);
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="default">
					<Trash aria-label="Delete this product" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>This action cannot be undone.</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button variant="default" onClick={handleProductDelete}>
						<Trash aria-label="Delete this product" />
						Yes, delete!
					</Button>
					<DialogClose asChild>
						<Button type="button" variant="ghost" disabled={isDeletingProduct}>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
