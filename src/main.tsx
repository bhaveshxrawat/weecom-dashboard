import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { NuqsAdapter } from "nuqs/adapters/react";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

createRoot(document.getElementById("root") as HTMLDivElement).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<NuqsAdapter>
				<App />
			</NuqsAdapter>
			<ReactQueryDevtools initialIsOpen={false} />
			<Toaster position="top-center" offset={"1rem"} richColors />
		</QueryClientProvider>
	</StrictMode>,
);
