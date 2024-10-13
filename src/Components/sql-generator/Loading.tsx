import { Skeleton } from "@/Components/ui/skeleton";
import { Fade } from "react-awesome-reveal";

export default function Loading() {
	return (
		<Fade className="absolute top-[63%] mt-4">
			<div className="overflow-hidden rounded-lg p-1 border bg-background w-60 h-12 focus-within:ring-1 focus-within:ring-ring flex items-center justify-center">
				<Skeleton className="h-full w-full" />
			</div>
		</Fade>
	);
}
