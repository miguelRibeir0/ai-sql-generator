import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SqlGenerator from "./Components/sql-generator/SqlGenerator";
import { DatabaseLanding } from "./Components/database/Database";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
		},
	},
});

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<SqlGenerator />
			</>
		),
	},
	{
		path: "/database",
		element: (
			<>
				<DatabaseLanding />
			</>
		),
	},
]);

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</>
	);
}

export default App;
