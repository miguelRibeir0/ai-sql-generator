import { useState } from "react";

import { SideBar } from "../side-bar/SideBar";

import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";

export default function SettingsTest() {
	const [flag, setFlag] = useState(false);

	console.log(flag);

	const switchState = () => {
		setFlag(!flag);
		localStorage.setItem("customDB", (!flag).toString());
	};
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full p-5">
				<div>
					<h3 className="text-2xl font-bold mb-5">Connect to your DB</h3>
					<Switch className="mb-5" onClick={switchState} />
					<form className="w-full flex flex-col gap-y-5">
						<div
							className={`flex items-center justify-center gap-x-7 ${flag ? "" : "opacity-50"}`}
						>
							<div className="w-full">
								<Label htmlFor="user">User:</Label>
								<input
									type="text"
									name="user"
									id="user"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
							<div className="w-full">
								<Label htmlFor="user">Host:</Label>
								<input
									type="text"
									name="host"
									id="host"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
						</div>
						<div
							className={`flex items-center justify-center gap-x-7 ${flag ? "" : "opacity-50"}`}
						>
							<div className="w-full">
								<Label htmlFor="user">Db name:</Label>
								<input
									type="text"
									name="Db Name"
									id="Db Name"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
							<div className="w-full">
								<Label htmlFor="user">Password:</Label>
								<input
									type="text"
									name="Password"
									id="Password"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
						</div>
						<div
							className={`flex items-center justify-center gap-x-7 ${flag ? "" : "opacity-50"}`}
						>
							<div className="w-full">
								<Label htmlFor="user">Port:</Label>
								<input
									type="text"
									name="Port"
									id="Port"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
							<div className="w-full flex self-end">
								<Button className="w-full" type="submit" disabled={!flag}>
									Submit
								</Button>
							</div>
						</div>
					</form>
					<img
						src="https://personal-static-files-cdn.fra1.cdn.digitaloceanspaces.com/Portfolio/SVGS/PostgresSQL.svg"
						alt="PostgresSql Icon"
						className="w-10 mt-10 opacity-75 absolute"
					/>
				</div>
			</div>
		</div>
	);
}
