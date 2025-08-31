import { API_BASEURL, PRODUCTS_PER_PAGE } from "@/consts";

type Products = {
	id: number;
	title: string;
	price: number;
	category: string;
	stock: number;
};
type ProductsResponse = {
	products: Products[];
	total: number;
	skip: number;
	limit: number;
};
export async function getProducts(skip = 0) {
	try {
		const fetchRes = await fetch(
			`${API_BASEURL}/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}&select=title,price,category,stock`,
		);
		if (!fetchRes.ok) {
			throw new Error("Encountered an issue while fetching.");
		}
		const data = await fetchRes.json();
		return data as ProductsResponse;
	} catch {
		throw new Error("Something went wrong while fetching the products.");
	}
}
