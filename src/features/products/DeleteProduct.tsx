import { Trash } from "lucide-react";
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

export default function DeleteProduct({ id }: { id: number }) {
	return (
		<Dialog>
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
					<Button variant="default">
						<Trash aria-label="Delete this product" />
						Yes, delete!
					</Button>
					<DialogClose asChild>
						<Button type="button" variant="ghost">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
