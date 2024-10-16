import { SideBar } from "../side-bar/SideBar";
import { useState, useCallback, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { kitchenFetch, roomFetch, customFetch } from "./dbfetch";
import { LoadingDB } from "./Loading";
import { LoadingDB2 } from "./LoadingCustom";
import { Button } from "../ui/button";
import { PackageSearch } from "lucide-react";
import { KitchenStockCard } from "./KitchenTable";
import { RoomsStockCard } from "./RoomTable";
import { CustomTable } from "./CustomTable";

export function DatabaseLanding() {
	const [flag, setFlag] = useState(false);
	const [query, setQuery] = useState("");

	const { data: kitchen, isLoading: isKitchenLoading } = useQuery({
		queryKey: ["kitchen"],
		queryFn: kitchenFetch,
	});

	const { data: rooms, isLoading: isRoomsLoading } = useQuery({
		queryKey: ["rooms"],
		queryFn: roomFetch,
	});

	const { data: custom, isLoading: isCustomLoading } = useQuery({
		queryKey: ["custom", query],
		queryFn: ({ queryKey }) => customFetch(queryKey[1]),
		enabled: flag,
	});

	const handleSubmit = useCallback((e: React.FormEvent) => {
		e.preventDefault();
		setFlag(true);
	}, []);

	const customTable = useMemo(
		() => <CustomTable customQuery={custom} />,
		[custom],
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
	if (isCustomLoading) {
		return <LoadingDB2 />;
	}

	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex flex-col gap-y-20 items-center justify-normal w-full">
				<div className="w-[90%] md:w-[70%] mt-10 md:mt-40">
					<form className="flex items-center gap-x-7" onSubmit={handleSubmit}>
						<input
							type="text"
							className="rounded-lg border bg-card text-card-foreground shadow w-full h-14 p-3"
							placeholder="Place your SQL query here..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
						<Button type="submit" className="w-20 h-full p-3 border">
							<PackageSearch />
						</Button>
					</form>
				</div>
				{flag ? (
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
