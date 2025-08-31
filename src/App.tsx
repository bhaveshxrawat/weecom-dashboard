import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardApp from "./DashboardApp";

function App() {
	return (
		<div className="grid min-h-[100svh] grid-rows-[auto_1fr] grid-cols-[18.75rem_1fr] p-4 gap-4 max-w-480 mx-auto">
			<DashboardHeader />
			<DashboardSidebar />
			<DashboardApp />
		</div>
	);
}

export default App;
