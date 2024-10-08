import { useState } from "react";
import Output from "./Output";
import Loading from "./Loading";
import { groqRequest } from "./groqRequest";
import { SideBar } from "../side-bar/SideBar";

import { CornerDownLeft } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

export default function SqlGenerator() {
	const [prompt, setPrompt] = useState("");
	const [state, setState] = useState(false);
	const [sql, setSql] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	// const stringCleanUp = (str: string) => {
	// 	return str.replace(/```|;/g, "");
	// };

	const model = "llama3-8b-8192";

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (prompt.trim().length == 0) {
			return alert("Please insert a valid prompt");
		}

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

	return (
		<div className="flex">
			<SideBar />
			<div className="h-screen flex items-center justify-center w-full">
				<div className="relative flex flex-col items-center justify-center min-h-screen">
					<form
						className="relative overflow-hidden rounded-lg border bg-background min-w-72 lg:min-w-96 "
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit(e);
						}}
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
