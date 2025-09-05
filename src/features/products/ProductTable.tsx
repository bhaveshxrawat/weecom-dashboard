import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import { useProducts } from "./hooks/useProducts";
import ProductPagination from "./ProductPagination";

function ProductTable() {
	const {
		productsData,
		productsError,
		refetchProducts,
		productsLoading,
		productsPending,
		productsFetching,
		productsRefetching,
	} = useProducts();
	console.log({ productsLoading, productsFetching, productsRefetching });
	return (
		// <div className="overflow-x-auto">
		<>
			<div className="border rounded-xl overflow-hidden ">
				<Table tccn="scrollbar-thin [contain:size] h-full">
					<TableHeader className="sticky top-0 isolate bg-white">
						<TableRow className="">
							<TableHead className="w-1/4 font-semibold">Title</TableHead>
							<TableHead className="font-semibold">Price</TableHead>
							<TableHead className="font-semibold">Category</TableHead>
							<TableHead className="font-semibold">Stock</TableHead>
							<TableHead aria-hidden="true"></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{productsError ? (
							<div className="grid justify-items-center p-4">
								<p className="py-5 px-3 text-center text-red">{`Uh oh! ${productsError.message}`}</p>
								<Button
									variant="outline"
									onClick={() => refetchProducts({ throwOnError: true })}
								>
									<RotateCcw />
									Retry
								</Button>
							</div>
						) : productsPending ||
							productsLoading ||
							productsFetching ||
							productsRefetching ? (
							Array.from({ length: 10 }).map((_, idx) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <fine for this use case>
								<TableRow key={idx}>
									<TableCell className="font-medium">
										<Skeleton className="h-5 w-9/12" />
									</TableCell>
									<TableCell className="text-gray-700">
										<Skeleton className="h-5 w-9/12" />
									</TableCell>
									<TableCell className="text-gray-700">
										<Skeleton className="h-5 w-9/12" />
									</TableCell>
									<TableCell className="text-gray-700">
										<Skeleton className="h-5 w-9/12" />
									</TableCell>
									<TableCell className="text-right space-x-2"></TableCell>
								</TableRow>
							))
						) : productsData && productsData.products.length > 0 ? (
							productsData.products.map((product) => (
								<TableRow key={product.id}>
									<TableCell className="font-medium">{product.title}</TableCell>
									<TableCell className="text-gray-700">
										{product.price}
									</TableCell>
									<TableCell className="text-gray-700">
										{product.category}
									</TableCell>
									<TableCell className="text-gray-700">
										{product.stock}
									</TableCell>
									<TableCell className="text-right space-x-2">
										<EditProduct id={product.id} />
										<DeleteProduct id={product.id} />
									</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell className="font-medium" colSpan={4}>
									<p className="py-5 px-3 text-center">No items here.</p>
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<ProductPagination count={productsData?.total ?? 0} />
		</>
	);
}
export default ProductTable;
