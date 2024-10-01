import { SideBar } from "./Components/side-bar/SideBar";
import SqlGenerator from "./Components/sql-generator/SqlGenerator";

function App() {
	return (
		<>
			<div className="flex">
				<SideBar />
				<div className="h-screen flex items-center justify-center w-full">
					<SqlGenerator />
				</div>
			</div>
		</>
	);
}

export default App;
