import { Link } from "react-router-dom";

import {
	Bot,
	LifeBuoy,
	Settings2,
	SquareTerminal,
	PackageSearch,
	Database,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
	TooltipProvider,
} from "@/Components/ui/tooltip";

export function SideBar() {
	return (
		<TooltipProvider delayDuration={300}>
			<div className="grid h-screen pl-[56px]">
				<aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
					<div className="border-b p-2">
						<Button variant="outline" size="icon" aria-label="Home">
							<PackageSearch className="size-5" />
						</Button>
					</div>
					<nav className="grid gap-1 p-2">
						<Tooltip>
							<TooltipTrigger asChild>
								<Link to={"/"}>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-lg bg-muted"
										aria-label="Playground"
									>
										<SquareTerminal className="size-5" />
									</Button>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								SQL Generator
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg"
									aria-label="Models"
								>
									<Bot className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Models
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link to={"/database"}>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-lg"
										aria-label="API"
									>
										<Database className="size-5" />
									</Button>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Database
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="rounded-lg"
									aria-label="Settings"
								>
									<Settings2 className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Settings
							</TooltipContent>
						</Tooltip>
					</nav>
					<nav className="mt-auto grid gap-1 p-2">
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="mt-auto rounded-lg"
									aria-label="Help"
								>
									<LifeBuoy className="size-5" />
								</Button>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Help
							</TooltipContent>
						</Tooltip>
					</nav>
				</aside>
			</div>
		</TooltipProvider>
	);
}
