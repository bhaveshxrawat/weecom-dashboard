import { Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

function ProductTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow className="">
					<TableHead className="w-1/4 font-semibold">Title</TableHead>
					<TableHead className="font-semibold">Price</TableHead>
					<TableHead className="font-semibold">Category</TableHead>
					<TableHead className="font-semibold">Stock</TableHead>
					<TableHead aria-hidden="true"></TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell className="font-medium">
						Essence Mascara Lash Princess
					</TableCell>
					<TableCell className="text-gray-700">9.99</TableCell>
					<TableCell className="text-gray-700">beauty</TableCell>
					<TableCell className="text-gray-700">99</TableCell>
					<TableCell className="text-right space-x-2">
						<Button variant="ghost">
							<Edit aria-label="Edit this product details" />
						</Button>
						<Button variant="destructive">
							<Trash aria-label="Delete this product details" />
						</Button>
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	);
}
export default ProductTable;
