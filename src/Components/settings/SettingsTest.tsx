import { useState } from "react";

import { SideBar } from "../side-bar/SideBar";

import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";

import { dbCheck } from "./dbcheck";

export default function SettingsTest() {
	const [flag, setFlag] = useState(false);
	const [user, setUser] = useState("");
	const [host, setHost] = useState("");
	const [dbName, setDbName] = useState("");
	const [password, setPassword] = useState("");
	const [port, setPort] = useState("");
	const [table, setTable] = useState("");

	const switchState = () => {
		setFlag(!flag);
	};

	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const dbConfig = {
			user,
			host,
			dbName,
			password,
			port,
			table,
		};

		localStorage.setItem("dbConfig", JSON.stringify(dbConfig));

		const check = await dbCheck({
			user,
			host,
			database: dbName,
			password,
			port,
			table,
		});

		console.log(check);
	};
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full p-5">
				<div>
					<h3 className="text-2xl font-bold mb-5">Connect to your DB</h3>
					<Switch className="mb-5" onClick={switchState} />
					<form
						className="w-full flex flex-col gap-y-5"
						onSubmit={submitHandler}
					>
						<div
							className={`flex items-center justify-center gap-x-7 ${flag ? "" : "opacity-50"}`}
						>
							<div className="w-full">
								<Label htmlFor="user">User:</Label>
								<input
									type="text"
									name="user"
									value={user}
									onChange={(e) => setUser(e.target.value)}
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
									value={host}
									onChange={(e) => setHost(e.target.value)}
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
									value={dbName}
									onChange={(e) => setDbName(e.target.value)}
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
									value={password}
									onChange={(e) => setPassword(e.target.value)}
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
									value={port}
									onChange={(e) => setPort(e.target.value)}
									id="Port"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
							<div className="w-full">
								<Label htmlFor="user">Table Name:</Label>
								<input
									type="text"
									name="table"
									value={table}
									onChange={(e) => setTable(e.target.value)}
									id="table"
									className="w-full rounded-md mt-1 border border-input bg-transparent px-3 py-1 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
									required
									disabled={!flag}
								/>
							</div>
						</div>
						<div className="w-full">
							<Button className="w-full" type="submit" disabled={!flag}>
								Submit
							</Button>
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
