import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { usePageQueryState } from "@/hooks/usePageQueryState";
import { useProductCategoriesState } from "@/hooks/useProductCategoryState";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { useProductCategories } from "./hooks/useProductCategories";

export default function ProductCategoryFilter() {
	const { categoryData, categoryError, categoryIsFetching, categoryIsLoading } =
		useProductCategories();
	const [searchQuery, setSearchQuery] = useSearchQueryState();
	const [category, setCategory] = useProductCategoriesState();
	const [page, setPage] = usePageQueryState();
	if (categoryError) {
		return (
			<div className="flex flex-col items-baselinecenter">
				<p>Couldn't fetch the categories</p>
				<Button variant="outline" size={"sm"}>
					<RotateCcw />
					Retry
				</Button>
			</div>
		);
	}
	function handleValueChange(val: string) {
		if (page !== 1) setPage(1);
		if (searchQuery !== "") setSearchQuery("");
		setCategory(val === "All" ? null : val);
	}
	return (
		<Select
			onValueChange={(val) => handleValueChange(val)}
			defaultValue={category ?? undefined}
		>
			<SelectTrigger className="max-w-60 capitalize">
				<SelectValue placeholder="Select a Category" className="capitalize" />
			</SelectTrigger>
			<SelectContent className="max-h-90">
				{categoryIsFetching || categoryIsLoading ? (
					<ul>
						{Array.from({ length: 6 }).map((_, idx) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <shushhh, it is fine here>
							<li key={idx}>
								<Skeleton className="w-10/12 h-5" />
							</li>
						))}
					</ul>
				) : categoryData && categoryData.length > 0 ? (
					<SelectGroup>
						<SelectLabel>Categories</SelectLabel>
						<SelectItem value="All" className="capitalize" defaultChecked>
							All
						</SelectItem>
						{categoryData.map((item) => (
							<SelectItem key={item} value={item} className="capitalize">
								{item.replace("-", " ")}
							</SelectItem>
						))}
					</SelectGroup>
				) : (
					<p>No categories were found.</p>
				)}
			</SelectContent>
		</Select>
	);
}
