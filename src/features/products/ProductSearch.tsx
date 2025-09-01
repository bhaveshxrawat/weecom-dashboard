import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSearchQueryState } from "@/hooks/useSearchQueryState";
import { usePageQueryState } from "../../hooks/usePageQueryState";

function ProductSearch() {
	const [searchQuery, setSearchQuery] = useSearchQueryState();
	const [page, setPage] = usePageQueryState();
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
		<search className="relative">
			<Input
				type="text"
				className="rounded-xl pl-8.5"
				placeholder="Search your products"
				value={searchQuery}
				onChange={handleSearchChange}
			></Input>
			<Search
				size={18}
				className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-1/2"
			/>
		</search>
	);
}
export default ProductSearch;
