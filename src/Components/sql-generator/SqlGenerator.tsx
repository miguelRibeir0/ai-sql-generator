import { useState } from "react";
import Output from "./Output";

import { CornerDownLeft } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";

export default function SqlGenerator() {
	const [message, setMessage] = useState("");
	const [state, setState] = useState(false);
	const [sql, setSql] = useState(
		"SELECT * FROM products WHERE is_default = true",
	);

	return (
		<>
			<div className="relative flex flex-col items-center justify-center min-h-screen">
				<form
					className="relative overflow-hidden rounded-lg border bg-background min-w-96 "
					onSubmit={(e) => {
						e.preventDefault();
						setState(!state);
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
						<Button type="submit" size="sm" className="ml-auto gap-1.5">
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
