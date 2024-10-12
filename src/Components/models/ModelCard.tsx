import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

import { Bot } from "lucide-react";

interface ModelCardProps {
	model: string;
	developer: string;
	context: string;
	selectedModel: string | null;
	handleModel: (model: string) => void;
}

export default function ModelCard({
	model,
	developer,
	context,
	selectedModel,
	handleModel,
}: ModelCardProps) {
	return (
		<Card
			className={`md:w-[70%] w-[90%] box-border ${selectedModel === model ? "border-4 border-slate-100" : ""}`}
		>
			<CardHeader>
				<CardTitle>{model}</CardTitle>
				<CardDescription>Developer: {developer}</CardDescription>
			</CardHeader>
			<CardContent className="flex items-center justify-center">
				<Bot size={"100px"} />
			</CardContent>
			<CardFooter className="flex flex-col gap-y-3">
				<CardDescription>Context Window: {context}</CardDescription>
				<Button
					className="w-full"
					onClick={() => handleModel(model)}
					disabled={selectedModel === model}
				>
					{selectedModel === model ? "Active" : "Select"}
				</Button>
			</CardFooter>
		</Card>
	);
}
