import { SideBar } from "./Components/side-bar/SideBar";
import SqlGenerator from "./Components/sql-generator/SqlGenerator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
		},
	},
});

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<div className="flex">
					<SideBar />
					<div className="h-screen flex items-center justify-center w-full">
						<SqlGenerator />
					</div>
				</div>
			</QueryClientProvider>
		</>
	);
}

export default App;
