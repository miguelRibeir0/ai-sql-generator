import { Clipboard } from "lucide-react";
import { ClipboardPaste } from "lucide-react";

import { Fade } from "react-awesome-reveal";
import { Toaster } from "@/Components/ui/toaster";
import { Label } from "@/Components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/Components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

export default function Output({ sql }: { sql: string }) {
	const { toast } = useToast();

	const copyTextToClipboard = async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<section
						className="absolute top-[58%] mt-4 overflow-hidden rounded-lg border bg-background w-fit focus-within:ring-1 focus-within:ring-ring hover:bg-white hover:bg-opacity-5 transition ease-in-out duration-150 cursor-pointer"
						onClick={() => {
							toast({
								description: (
									<div className="flex items-center gap-2">
										<ClipboardPaste className="size-4" />
										<span>Your code has been copied to the clipboard!</span>
									</div>
								),
							});
							copyTextToClipboard(sql);
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
								{sql} <br />
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
	);
}
