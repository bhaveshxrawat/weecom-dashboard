import { Edit } from "lucide-react";
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
import EditProductForm from "./EditProductForm";

export default function EditProduct({ id }: { id: number }) {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="ghost">
					<Edit aria-label="Edit this product details" />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Product</DialogTitle>
					<DialogDescription className="sr-only">
						Make changes to Product here. Click submit when you&apos;re done.
					</DialogDescription>
				</DialogHeader>
				<EditProductForm closeDialog={() => setOpen(false)} id={id} />
			</DialogContent>
		</Dialog>
	);
}
