import { SideBar } from "../side-bar/SideBar";

export default function Settings() {
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full"></div>
		</div>
	);
}
