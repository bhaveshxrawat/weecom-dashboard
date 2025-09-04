import { Info, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useProductCategoriesState } from "@/hooks/useProductCategoryState";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { usePageQueryState } from "../../hooks/usePageQueryState";

function ProductSearch() {
	const [searchQuery, setSearchQuery] = useSearchQueryState();
	const [page, setPage] = usePageQueryState();
	const [category] = useProductCategoriesState();
	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (page !== 1) setPage(1);
		if (searchQuery !== "") {
			setSearchQuery(e.target.value);
		} else {
			if (e.target.value.trim() === "") return;
			setSearchQuery(e.target.value);
		}
	}
	return (
		<search className="flex items-center">
			<div className="relative">
				<Input
					type="text"
					className="rounded-xl pl-8.5 peer"
					placeholder="Search your products"
					value={searchQuery}
					onChange={handleSearchChange}
					disabled={Boolean(category)}
				></Input>
				<Search
					size={18}
					className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2 peer-disabled:opacity-50"
				/>
			</div>
			{!!category && (
				<Popover>
					<PopoverTrigger className="p-2">
						<Info className="text-muted-foreground" size={20} />
					</PopoverTrigger>
					<PopoverContent className="bg-accent">
						<p className="text-sm">
							The API this app consumes doesn't let you query when you have
							categories. Hence, the search is disabled.
						</p>
					</PopoverContent>
				</Popover>
			)}
		</search>
	);
}
export default ProductSearch;
