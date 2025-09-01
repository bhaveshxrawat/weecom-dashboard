import { Plus } from "lucide-react";
import { Button } from "./components/ui/button";
import ProductSearch from "./features/products/ProductSearch";
import ProductTable from "./features/products/ProductTable";

function DashboardApp() {
	return (
		<main className="col-start-2 -col-end-1 p-4 flex flex-col rounded-2xl drop-shadow-sm bg-white max-md2:col-span-full">
			<div className="flex justify-between items-center @container">
				<h3 className="text-3xl font-bold tracking-tight text-gray-900 ml-1.5 @max-xs:font-semibold @max-xs:text-2xl">
					Products
				</h3>
				<Button>
					<Plus />
					Add Product
				</Button>
			</div>
			<div className="mt-6 h-full space-y-2">
				<ProductSearch />
				<ProductTable />
			</div>
		</main>
	);
}
export default DashboardApp;
