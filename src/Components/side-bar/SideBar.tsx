import { Link, useLocation } from "react-router-dom";

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
	const location = useLocation();

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
										className={
											location.pathname == "/"
												? "rounded-lg bg-muted"
												: "rounded-lg"
										}
										aria-label="SQL Generator"
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
								<Link to={"/models"}>
									<Button
										variant="ghost"
										size="icon"
										className={
											location.pathname == "/models"
												? "rounded-lg bg-muted"
												: "rounded-lg"
										}
										aria-label="Models"
									>
										<Bot className="size-5" />
									</Button>
								</Link>
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
										className={
											location.pathname == "/database"
												? "rounded-lg bg-muted"
												: "rounded-lg"
										}
										aria-label="Database"
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
								<Link to={"/settings"}>
									<Button
										variant="ghost"
										size="icon"
										className={
											location.pathname == "/settings"
												? "rounded-lg bg-muted"
												: "rounded-lg"
										}
										aria-label="Settings"
									>
										<Settings2 className="size-5" />
									</Button>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right" sideOffset={5}>
								Settings
							</TooltipContent>
						</Tooltip>
					</nav>
					<nav className="mt-auto grid gap-1 p-2">
						<Tooltip>
							<TooltipTrigger asChild>
								<Link to={"/help"}>
									<Button
										variant="ghost"
										size="icon"
										className={
											location.pathname == "/help"
												? "rounded-lg bg-muted mt-auto"
												: "rounded-lg mt-auto"
										}
										aria-label="Help"
									>
										<LifeBuoy className="size-5" />
									</Button>
								</Link>
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
