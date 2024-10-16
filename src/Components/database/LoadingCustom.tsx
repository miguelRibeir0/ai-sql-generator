import { SideBar } from "../side-bar/SideBar";
import { Database } from "lucide-react";

import { Skeleton } from "@/Components/ui/skeleton";
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

const loadingRows = Array.from({ length: 5 });

export function LoadingDB2() {
	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex flex-col gap-y-20 items-center justify-center w-full mt-[90px]">
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
								{loadingRows.map((_, index) => (
									<TableRow key={index}>
										<TableCell className="font-medium py-3 md:w-[500px]">
											<Skeleton className="h-7 w-20" />
										</TableCell>
										<TableCell className="hidden md:table-cell py-3">
											<Skeleton className="h-7 w-20" />
										</TableCell>
										<TableCell className="text-center md:text-left py-3">
											<Skeleton className="h-7 w-20" />
										</TableCell>
										<TableCell className="hidden md:table-cell w-40 py-3">
											<Skeleton className="h-7 w-20" />
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
