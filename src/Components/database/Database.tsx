import { SideBar } from "../side-bar/SideBar";
import { Database } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { kitchenFetch, roomFetch } from "./dbfetch";
import { LoadingDB } from "./Loading";

import { Badge } from "@/Components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/Components/ui/table";

interface products {
	name: string;
	quantity: number;
	date_added: string;
}

export function DatabaseLanding() {
	const { data: kitchen, isLoading: isKitchenLoading } = useQuery({
		queryKey: ["kitchen"],
		queryFn: kitchenFetch,
	});

	const { data: rooms, isLoading: isRoomsLoading } = useQuery({
		queryKey: ["rooms"],
		queryFn: roomFetch,
	});

	if (isKitchenLoading || isRoomsLoading) {
		return <LoadingDB />;
	}

	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex flex-col gap-y-20 items-center justify-center w-full mt-[500px]">
				<Card className="w-[90%] md:w-[70%]">
					<CardHeader>
						<CardTitle className="flex items-center gap-x-3">
							<Database /> Kitchen Stock
						</CardTitle>
						<CardDescription>
							This is where we keep track of all products available and needed
							in the kitchen.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow className="w-fit">
									<TableHead>Name</TableHead>
									<TableHead className="hidden md:table-cell">Status</TableHead>
									<TableHead>Quantity</TableHead>
									<TableHead className="hidden md:table-cell">
										Added/Modified
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{kitchen.map((item: products, index: number) => (
									<TableRow key={index}>
										<TableCell className="font-medium py-3 md:w-[500px]">
											{item.name}
										</TableCell>
										<TableCell className="hidden md:table-cell py-3">
											<Badge
												variant="outline"
												className={`${item.quantity < 10 ? "border-red-500" : ""}`}
											>
												{item.quantity >= 10 ? "Ok" : "Low"}
											</Badge>
										</TableCell>
										<TableCell className="text-center md:text-left py-3">
											{item.quantity}
										</TableCell>
										<TableCell className="hidden md:table-cell w-40 py-3">
											{item.date_added}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
				<Card className="w-[90%] md:w-[70%]">
					<CardHeader>
						<CardTitle className="flex items-center gap-x-3">
							<Database /> Rooms Stock
						</CardTitle>
						<CardDescription>
							This is where we keep track of all products available and needed
							for the rooms.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow className="w-fit">
									<TableHead>Name</TableHead>
									<TableHead className="hidden md:table-cell">Status</TableHead>
									<TableHead>Quantity</TableHead>
									<TableHead className="hidden md:table-cell">
										Added/Modified
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{rooms.map((item: products, index: number) => (
									<TableRow key={index}>
										<TableCell className="font-medium py-3 md:w-[500px]">
											{item.name}
										</TableCell>
										<TableCell className="hidden md:table-cell py-3">
											<Badge
												variant="outline"
												className={`${item.quantity < 10 ? "border-red-500" : ""}`}
											>
												{item.quantity >= 10 ? "Ok" : "Low"}
											</Badge>
										</TableCell>
										<TableCell className="text-center md:text-left py-3">
											{item.quantity}
										</TableCell>
										<TableCell className="hidden md:table-cell w-40 py-3">
											{item.date_added}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
