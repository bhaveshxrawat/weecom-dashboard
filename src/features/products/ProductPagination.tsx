import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Pagination,
	PaginationContent,
	PaginationItem,
} from "@/components/ui/pagination";
import { PRODUCTS_PER_PAGE } from "@/consts";
import { usePageQueryState } from "../../hooks/usePageQueryState";

export default function ProductPagination({ count }: { count: number }) {
	const [page, setPage] = usePageQueryState();
	const maxPossiblePage = Math.ceil(count / PRODUCTS_PER_PAGE);
	function goBack() {
		if (page <= 1) return;
		setPage((page) => page - 1);
	}
	function goNext() {
		if (page >= maxPossiblePage) return;
		setPage((page) => page + 1);
	}
	return (
		<div className="mt-3">
			<Pagination className="@container">
				<PaginationContent>
					<PaginationItem>
						<Button variant="outline" onClick={goBack} disabled={page <= 1}>
							<ArrowLeft />
							<span className="@max-xs:sr-only">Back</span>
						</Button>
					</PaginationItem>
					<PaginationItem className="px-2 py-1">
						<span className="text-sm">
							{Math.min(
								Math.max(page * PRODUCTS_PER_PAGE, PRODUCTS_PER_PAGE),
								count,
							)}
						</span>{" "}
						/ <span className="text-sm">{count}</span>
					</PaginationItem>
					<PaginationItem>
						<Button
							variant="outline"
							onClick={goNext}
							disabled={page >= maxPossiblePage}
						>
							<span className="@max-xs:sr-only">Next</span>
							<ArrowRight />
						</Button>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
}
