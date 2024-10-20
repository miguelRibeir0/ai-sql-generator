import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SqlGenerator from "./Components/sql-generator/SqlGenerator";
import { DatabaseLanding } from "./Components/database/Database";
import Models from "./Components/models/Models";
import Settings from "./Components/settings/Settings";
import Help from "./Components/help/Help";
import SettingsTest from "./Components/settings/SettingsTest";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Number.POSITIVE_INFINITY,
		},
	},
});

if (!localStorage.getItem("modelSelected")) {
	localStorage.setItem("modelSelected", "llama3-8b-8192");
}

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
	{
		path: "/models",
		element: (
			<>
				<Models />
			</>
		),
	},
	{
		path: "/settings",
		element: (
			<>
				<Settings />
			</>
		),
	},
	{
		path: "/help",
		element: (
			<>
				<Help />
			</>
		),
	},
	{
		path: "/settings/test",
		element: (
			<>
				<SettingsTest />
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
