import { useState, useEffect } from "react";

import { SideBar } from "../side-bar/SideBar";

import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { Switch } from "@/Components/ui/switch";

import { customDbFetch } from "../database/dbfetch";

export default function SettingsTest() {
	const [flag, setFlag] = useState(false);
	const [activeDb, setActiveDb] = useState(false);
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState("");
	const [user, setUser] = useState("");
	const [host, setHost] = useState("");
	const [database, setDbName] = useState("");
	const [password, setPassword] = useState("");
	const [port, setPort] = useState("");
	const [table, setTable] = useState("");
	const [renderTrigger, setRenderTrigger] = useState(0); // Re-render trigger

	const switchState = () => {
		setFlag(!flag);
	};

	const dbConfig = {
		user,
		host,
		database,
		password,
		port,
		table,
	};

	// Cheching if the DB connection is successful
	const dbConnection = async () => {
		const check = await customDbFetch({
			user,
			host,
			database,
			password,
			port,
			table,
		});

		return check;
	};

	// Saving the config to local storage
	const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		localStorage.setItem("dbConfig", JSON.stringify(dbConfig));

		const check = await dbConnection();

		if (check.error) {
			setActiveDb(false);
			setError(true);
			setErrorText(check.error);
		} else setActiveDb(true);
	};

	useEffect(() => {
		// Updating content based on saved config
		const contentUpdate = async () => {
			const storedConfig = localStorage.getItem("dbConfig");
			if (storedConfig) {
				const config = JSON.parse(storedConfig);
				setUser(config.user);
				setHost(config.host);
				setDbName(config.database);
				setPassword(config.password);
				setPort(config.port);
				setTable(config.table);

				setFlag(true);

				// Waiting for state updates to complete
				await new Promise((resolve) => setTimeout(resolve, 0));

				const check = await customDbFetch({
					user: config.user,
					host: config.host,
					database: config.database,
					password: config.password,
					port: config.port,
					table: config.table,
				});

				if (check.error) {
					setActiveDb(false);
					setError(true);
					setErrorText(check.error);
				} else setActiveDb(true);
			}
		};

		contentUpdate();

		// Disconnecting from the DB
		if (!flag) {
			localStorage.removeItem("dbConfig");
			setActiveDb(false);
			setUser("");
			setHost("");
			setDbName("");
			setPassword("");
			setPort("");
			setTable("");
			setFlag(false);
			setRenderTrigger((prev) => prev + 1); // Updating state to trigger re-render
			setRenderTrigger(0); // Reseting state
		}
	}, [flag, renderTrigger]);
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full p-5">
				<div>
					<h3 className="text-2xl font-bold mb-5">Connect to your DB</h3>
					<Switch className="mb-5" onClick={switchState} checked={flag} />
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
									value={database}
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
									type="password"
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
					{flag ? (
						activeDb ? (
							<p className="mt-5 text-green-400">DB connected!</p>
						) : error ? (
							<>
								<p className="mt-5 text-red-400">Db fetch returned an error!</p>
								<p className="mt-2 text-red-400">{errorText}</p>
							</>
						) : null
					) : null}
					<p></p>
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
