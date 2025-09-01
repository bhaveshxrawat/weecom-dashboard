import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import AddProductForm from "@/features/products/AddProductForm";

export default function AddProduct() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<Plus />
					Add Product
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Product</DialogTitle>
				</DialogHeader>
				<AddProductForm />
			</DialogContent>
		</Dialog>
	);
}
