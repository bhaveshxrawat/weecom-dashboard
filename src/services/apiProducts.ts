import { API_BASEURL, PRODUCTS_PER_PAGE } from "@/consts";
import type { NewProductType, OGProductType } from "@/types/product";

export type ProductsResponse = {
	products: OGProductType[];
	total: number;
	skip: number;
	limit: number;
};

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

export async function addProduct(data: NewProductType) {
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
		return fetchData as OGProductType;
	} catch {
		throw new Error("Something went wrong while adding a product.");
	}
}

export async function editProduct(id: number, data: NewProductType) {
	const fetchURL = new URL(`/products/${id}`, API_BASEURL);
	try {
		const fetchRes = await fetch(fetchURL, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (!fetchRes.ok) {
			throw new Error("Encountered an issue while editing this product.");
		}
		const fetchData = await fetchRes.json();
		return fetchData as OGProductType;
	} catch {
		throw new Error("Something went wrong while editing this product.");
	}
}

export async function deleteProduct(id: number) {
	const fetchURL = new URL(`/products/${id}`, API_BASEURL);
	try {
		const fetchRes = await fetch(fetchURL, {
			method: "DELETE",
		});
		if (!fetchRes.ok) {
			throw new Error("Encountered an issue while deleting this product.");
		}
		const fetchData = await fetchRes.json();
		return fetchData as OGProductType;
	} catch {
		throw new Error("Something went wrong while deleting this product.");
	}
}
