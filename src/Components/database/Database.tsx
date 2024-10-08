import { SideBar } from "../side-bar/SideBar";
import { Database } from "lucide-react";

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

export function DatabaseLanding() {
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full">
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
								<TableRow>
									<TableCell className="font-medium">
										Laser Lemonade Machine
									</TableCell>
									<TableCell className="hidden md:table-cell">
										<Badge variant="outline">Ok</Badge>
									</TableCell>
									<TableCell className="text-center md:text-left">25</TableCell>
									<TableCell className="hidden md:table-cell w-40">
										2023-07-12 10:42 AM
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
