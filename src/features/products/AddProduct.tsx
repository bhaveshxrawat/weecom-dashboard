import { Plus } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import AddProductForm from "@/features/products/AddProductForm";

export default function AddProduct() {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>
					<Plus />
					Add Product
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Product</DialogTitle>
					<DialogDescription className="sr-only">
						Add your new product details here. Click submit when you&apos;re
						done.
					</DialogDescription>
				</DialogHeader>
				<AddProductForm closeDialog={() => setOpen(false)} />
			</DialogContent>
		</Dialog>
	);
}
