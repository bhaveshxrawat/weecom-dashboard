import { Home, Package, Settings, ShoppingBag, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
	{
		title: "Home",
		url: "#",
		icon: Home,
	},
	{
		title: "Products",
		url: "#",
		icon: Package,
	},
	{
		title: "Orders",
		url: "#",
		icon: ShoppingBag,
	},
	{
		title: "Customers",
		url: "#",
		icon: Users,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
	},
] as const;

function DashboardSidebar() {
	return (
		<aside className="bg-white p-4 rounded-2xl drop-shadow-sm max-md2:row-start-3 max-md2:p-2">
			<nav>
				<ul className="max-md2:flex max-md2:*:flex-1 max-md2:*:text-center max-md:scrollbar-none">
					{items.map((item) => (
						<li key={item.title} className="last:mt-auto">
							<a
								href={item.url}
								className={cn(
									"flex gap-2.5 items-center px-3 py-4 rounded-xl max-md2:gap-1.5 max-md2:py-2 max-md2:px-2 max-md2:justify-center",
									item.title === "Products" && "bg-accent",
								)}
							>
								<item.icon size={18} />
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}
export default DashboardSidebar;
