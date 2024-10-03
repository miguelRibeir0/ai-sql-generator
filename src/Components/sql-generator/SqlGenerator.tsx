import { useState } from "react";

import { CornerDownLeft } from "lucide-react";
import { ClipboardPaste } from "lucide-react";
import { Clipboard } from "lucide-react";

import { Fade } from "react-awesome-reveal";

import { Button } from "@/Components/ui/button";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Toaster } from "@/Components/ui/toaster";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/Components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

export default function SqlGenerator() {
	const [message, setMessage] = useState("");
	const [state, setState] = useState(false);

	const { toast } = useToast();

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
				{state ? (
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<section
									className="absolute top-[58%] mt-4 overflow-hidden rounded-lg border bg-background w-fit focus-within:ring-1 focus-within:ring-ring hover:bg-white hover:bg-opacity-5 transition ease-in-out duration-150 cursor-pointer"
									onClick={() => {
										toast({
											description: (
												<div className="flex items-center gap-2">
													<ClipboardPaste className="size-4" />
													<span>
														Your code has been copied to the clipboard!
													</span>
												</div>
											),
										});
									}}
								>
									<Fade>
										<Label htmlFor="message" className="sr-only">
											Message
										</Label>
										<p
											id="message"
											className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 origin-top select-none"
										>
											SELECT * FROM products WHERE is_default = true <br />
										</p>
									</Fade>
								</section>
							</TooltipTrigger>
							<TooltipContent side="bottom" sideOffset={7}>
								<div className="flex items-center justify-center gap-2">
									<span>Click to copy</span>
									<Clipboard className="size-3" />
								</div>
							</TooltipContent>
						</Tooltip>
						<Toaster />
					</TooltipProvider>
				) : null}
			</div>
		</>
	);
}
