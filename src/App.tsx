import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardApp from "./DashboardApp";

function App() {
	return (
		<div className="grid min-h-[100svh] grid-rows-[auto_1fr] grid-cols-[minmax(12.5rem,18.75rem)_1fr] p-4 gap-4 max-w-480 mx-auto max-md2:grid-cols-1 max-md2:grid-rows-[auto_1fr_auto]">
			<DashboardHeader />
			<DashboardSidebar />
			<DashboardApp />
		</div>
	);
}

export default App;
