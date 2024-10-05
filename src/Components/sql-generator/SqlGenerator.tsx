import { useState } from "react";
import Output from "./Output";
import { groqRequest } from "./groqRequest";

import { CornerDownLeft } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

export default function SqlGenerator() {
	const [message, setMessage] = useState("");
	const [state, setState] = useState(false);
	const [sql, setSql] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const stringCleanUp = (str: string) => {
		return str.replace(/```|;/g, "");
	};

	const prompt =
		"Give me a SQL query that returns the entirity of the Kitchen Stock table.";
	const model = "llama3-8b-8192";

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await groqRequest({ prompt, model });
			setSql(stringCleanUp(response.completion));
		} catch (error) {
			console.error("Error fetching SQL:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<div className="relative flex flex-col items-center justify-center min-h-screen">
				<form
					className="relative overflow-hidden rounded-lg border bg-background min-w-72 lg:min-w-96 "
					onSubmit={(e) => {
						e.preventDefault();
						setState(!state);
						handleSubmit(e);
					}}
				>
					<Label htmlFor="message" className="sr-only">
						Message
					</Label>
					<Textarea
						id="message"
						placeholder="Type your message here..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
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
				{state ? <Output sql={sql} /> : null}
			</div>
		</>
	);
}
