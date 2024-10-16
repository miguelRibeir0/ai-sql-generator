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
	if (!customQuery || !Array.isArray(customQuery)) {
		return <div>No data available</div>;
	}
	return (
		<>
			<Card className="w-[90%] md:w-[70%]">
				<CardHeader>
					<CardTitle className="flex items-center gap-x-3">
						<Database /> Custom Table
					</CardTitle>
					<CardDescription>
						Your requested products will appear bellow.
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
			<a href="/database">
				<Button className="w-40 h-14">Reset</Button>
			</a>
		</>
	);
}
