import { useState, useEffect } from "react";
import { Database } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "../ui/button";
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

interface Products {
	name: string;
	quantity: number;
	date_added: string;
}

interface CustomCardProps {
	customQuery: Products[];
}

export function CustomTable({ customQuery }: CustomCardProps) {
	const [flag, setFlag] = useState(false);

	if (!customQuery || !Array.isArray(customQuery)) {
		return <div>No data available</div>;
	}

	useEffect(() => {
		const storedConfig = localStorage.getItem("dbConfig");
		if (storedConfig) {
			setFlag(true);
		}
	});

	return (
		<>
			<Card className="w-[90%] md:w-[70%]">
				<CardHeader>
					<CardTitle className="flex items-center gap-x-3">
						<Database /> {flag ? "This is your DB" : "Custom Table"}
					</CardTitle>
					<CardDescription>
						{flag
							? " This is your available products"
							: " Your requested products will appear bellow."}
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
							{customQuery.map((item: Products, index: number) => (
								<TableRow key={index}>
									<TableCell
										className={`font-medium py-3 md:w-[500px] ${item.name ? "" : "text-opacity-50"}`}
									>
										{item.name ? item.name : "Unknown"}
									</TableCell>
									<TableCell className="hidden md:table-cell py-3">
										<Badge
											variant="outline"
											className={`${item.quantity < 10 ? "border-red-500" : ""}`}
										>
											{item.quantity >= 10 ? "Ok" : "Low"}
										</Badge>
									</TableCell>
									<TableCell
										className={`text-center md:text-left py-3 ${item.quantity ? "" : "text-opacity-50"}`}
									>
										{item.quantity ? item.quantity : "Unknown"}
									</TableCell>
									<TableCell
										className={`hidden md:table-cell w-40 py-3 ${item.date_added ? "" : "text-muted-foreground"}`}
									>
										{item.date_added ? item.date_added : "Unknown"}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
			<a href="/database">
				<Button className="w-28 h-10">Reset</Button>
			</a>
		</>
	);
}
