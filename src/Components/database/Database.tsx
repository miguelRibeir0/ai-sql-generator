import { SideBar } from "../side-bar/SideBar";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {
	kitchenFetch,
	roomFetch,
	customQueryFetch,
	customDbFetch,
	DBSettingProps,
	customDBQuery,
} from "./dbfetch";
import { LoadingDB } from "./Loading";
import { LoadingDB2 } from "./LoadingCustom";
import { Button } from "../ui/button";
import { PackageSearch } from "lucide-react";
import { KitchenStockCard } from "./KitchenTable";
import { RoomsStockCard } from "./RoomTable";
import { CustomTable } from "./CustomTable";

export function DatabaseLanding() {
	// Flag to enable custom query
	const [flag, setFlag] = useState(false);
	// Flag to check if custom db is enabled
	const [customFlag, setCustomFlag] = useState(false);
	const [dbConfig, setDbConfig] = useState<DBSettingProps>({
		user: "",
		host: "",
		database: "",
		password: "",
		port: "",
		table: "",
	});
	const [query, setQuery] = useState("");

	// Kitchen Data
	const { data: kitchen, isLoading: isKitchenLoading } = useQuery({
		queryKey: ["kitchen"],
		queryFn: kitchenFetch,
	});
	// Rooms Data
	const { data: rooms, isLoading: isRoomsLoading } = useQuery({
		queryKey: ["rooms"],
		queryFn: roomFetch,
	});
	// Custom Db Data
	const { data: customDB, isLoading: isCustomDBLoading } = useQuery({
		queryKey: ["customDB", dbConfig],
		queryFn: ({ queryKey }) => customDbFetch(queryKey[1] as DBSettingProps),
		enabled: customFlag,
	});
	// Local Query
	const { data: custom, isLoading: isCustomLoading } = useQuery({
		queryKey: ["custom", query],
		queryFn: ({ queryKey }) => customQueryFetch(queryKey[1]),
		enabled: flag,
	});
	// Custom Db Query
	const { data: customDbQuery, isLoading: iscustomDbQueryLoading } = useQuery({
		queryKey: ["customDbQuery", query, dbConfig],
		queryFn: ({ queryKey }) => {
			const [_, query, dbConfig] = queryKey as [string, string, DBSettingProps];
			return customDBQuery({
				query,
				user: dbConfig.user,
				host: dbConfig.host,
				database: dbConfig.database,
				password: dbConfig.password,
				port: dbConfig.port,
			});
		},
		enabled: flag && customFlag,
	});

	// Checking if there is a stored config
	useEffect(() => {
		const storedConfig = localStorage.getItem("dbConfig");
		if (storedConfig) {
			const config = JSON.parse(storedConfig);
			setDbConfig(config);
			setCustomFlag(true);
		}
	}, []);

	const handleSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault();
		setFlag(true);
	}, []);

	const handleInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setQuery(e.target.value);
		},
		[],
	);

	const customTable = useMemo(
		() => (
			<CustomTable
				customQuery={
					customFlag && flag ? customDbQuery : customFlag ? customDB : custom
				}
			/>
		),
		[custom, customDB, customFlag],
	);
	const kitchenStockCard = useMemo(
		() => <KitchenStockCard kitchenQuery={kitchen} />,
		[kitchen],
	);
	const roomsStockCard = useMemo(
		() => <RoomsStockCard roomsQuery={rooms} />,
		[rooms],
	);

	if (isKitchenLoading || isRoomsLoading) {
		return <LoadingDB />;
	}
	if (isCustomLoading || isCustomDBLoading || iscustomDbQueryLoading) {
		return <LoadingDB2 />;
	}

	return (
		<div className="flex">
			<SideBar />
			<div className="min-h-screen flex flex-col gap-y-20 items-center justify-normal w-full mb-20">
				<div className="w-[90%] md:w-[70%] mt-10 md:mt-40">
					<form className="flex items-center gap-x-7" onSubmit={handleSubmit}>
						<input
							type="text"
							className="rounded-lg border bg-card text-card-foreground shadow w-full h-14 p-3"
							placeholder="Place your SQL query here..."
							value={query}
							onChange={handleInputChange}
						/>
						<Button type="submit" className="w-20 h-full p-3 border">
							<PackageSearch />
						</Button>
					</form>
				</div>
				{flag || customFlag ? (
					customTable
				) : (
					<>
						{kitchenStockCard}
						{roomsStockCard}
					</>
				)}
			</div>
		</div>
	);
}
