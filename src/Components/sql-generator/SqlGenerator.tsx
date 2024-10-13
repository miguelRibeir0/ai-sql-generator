import { useState } from "react";
import { Link } from "react-router-dom";
import Output from "./Output";
import Loading from "./Loading";
import { groqRequest } from "./groqRequest";
import { SideBar } from "../side-bar/SideBar";

import { CornerDownLeft } from "lucide-react";
import { Database } from "lucide-react";
import { CircleHelp } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/Components/ui/tooltip";

export default function SqlGenerator() {
	const [prompt, setPrompt] = useState("");
	const [state, setState] = useState(false);
	const [sql, setSql] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [isTooltipVisible, setIsTooltipVisible] = useState(false);

	const model = localStorage.getItem("modelSelected") || "llama3-8b-8192";

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (prompt.trim().length === 0) {
			setError("Please insert a valid prompt!");
			return;
		}

		setError(null);
		setIsLoading(true);
		setState(true);

		try {
			const response = await groqRequest({ prompt, model });
			setSql(response.completion);
		} catch (error) {
			console.error("Error fetching SQL:", error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleTooltipToggle = () => {
		setIsTooltipVisible(!isTooltipVisible);
	};

	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full">
				<div className="relative flex flex-col items-center justify-center min-h-screen">
					<div className="absolute top-[35%] md:top-[38%] flex justify-between items-center w-full">
						<Link to={"/database"}>
							<Button size="sm" className="flex gap-x-2" variant="outline">
								<Database size="16px" />
								Check our default DB
							</Button>
						</Link>
						<TooltipProvider delayDuration={300}>
							<Tooltip
								open={isTooltipVisible}
								onOpenChange={setIsTooltipVisible}
							>
								<TooltipTrigger asChild>
									<div
										className="cursor-pointer opacity-30 hover:opacity-100 transition ease-in-out duration-300"
										onClick={handleTooltipToggle}
									>
										<CircleHelp size="18px" />
									</div>
								</TooltipTrigger>
								<TooltipContent
									side="top"
									sideOffset={5}
									className="md:w-full w-[70%] ml-6 mb-3 md:ml-0 md:mb-0"
								>
									<div className="text-sm">
										<p>
											Use Human language to generate an SQL query to our default
											Database.{" "}
										</p>
										<p>
											For more info go to the help section at the bottom of the
											sidebar.
										</p>
									</div>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<form
						className="relative overflow-hidden rounded-lg border bg-background min-w-72 lg:min-w-96 "
						onSubmit={handleSubmit}
					>
						<Label htmlFor="prompt" className="sr-only">
							prompt
						</Label>
						<Textarea
							id="prompt"
							placeholder="Type your prompt here..."
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
							className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
						/>

						<div className="flex items-center p-3 mt-3">
							<Button
								type="submit"
								size="sm"
								className="lg:ml-auto lg:mr-0 w-[80%] m-auto lg:w-fit gap-1.5"
							>
								Generate Code
								<CornerDownLeft className="size-3.5" />
							</Button>
						</div>
					</form>
					<p className="self-start opacity-50 absolute top-[61%] md:top-[58%]  text-sm">
						Current model: {model}
					</p>
					{error && (
						<div className="text-red-400 absolute top-[66%] md:top-[63%]">
							{error}
						</div>
					)}{" "}
					{state && isLoading ? (
						<Loading />
					) : state && !isLoading ? (
						<Output sql={sql} />
					) : null}
				</div>
			</div>
		</div>
	);
}
