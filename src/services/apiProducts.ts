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

type newProductType = Omit<Products, "id">;
export async function getProducts(skip = 0, search = "") {
	const fetchURL = new URL(
		`/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}&select=title,price,category,stock`,
		API_BASEURL,
	);
	if (search !== "") {
		fetchURL.pathname = "/products/search";
		fetchURL.searchParams.append("q", search);
	}
	try {
		const fetchRes = await fetch(fetchURL);
		if (!fetchRes.ok) {
			throw new Error("Encountered an issue while fetching.");
		}
		const data = await fetchRes.json();
		return data as ProductsResponse;
	} catch {
		throw new Error("Something went wrong while fetching the products.");
	}
}

export async function addProduct(data: newProductType) {
	const fetchURL = new URL(`/products/add`, API_BASEURL);
	try {
		const fetchRes = await fetch(fetchURL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (!fetchRes.ok) {
			throw new Error("Encountered an issue while adding a new product.");
		}
		const fetchData = await fetchRes.json();
		return fetchData as Products;
	} catch {
		throw new Error("Something went wrong while adding a product.");
	}
}
