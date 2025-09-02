import AddProduct from "@/features/products/AddProduct";
import ProductSearch from "@/features/products/ProductSearch";
import ProductTable from "@/features/products/ProductTable";
import ProductCategoryFilter from "./features/products/ProductCategoryFilter";

function DashboardApp() {
	return (
		<main className="col-start-2 -col-end-1 p-4 grid grid-rows-[auto_1fr] gap-6 rounded-2xl drop-shadow-sm bg-white max-md2:col-span-full">
			<div className="flex justify-between items-center @container">
				<h3 className="text-3xl font-bold tracking-tight text-gray-900 ml-1.5 @max-xs:font-semibold @max-xs:text-2xl">
					Products
				</h3>
				<AddProduct />
			</div>
			<div className="grid grid-rows-[auto_1fr_auto] gap-2 @container">
				<div className="flex gap-2 justify-between @max-sm:flex-col">
					<ProductSearch />
					<ProductCategoryFilter />
				</div>
				<ProductTable />
			</div>
		</main>
	);
}
export default DashboardApp;
