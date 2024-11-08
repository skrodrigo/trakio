import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";
import Link from "next/link";

export async function AnimatedShinyTextDemo() {
	return (
		<div className="z-10 flex h-32 items-center justify-center">
			<div
				className={cn(
					"group rounded-full border border-zinc-800 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
				)}
			>
				<Link href="/register" className="w-full">
					<AnimatedShinyText className="inline-flex gap-2 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
						<span>+ de 100 empresas usando</span>
						<Activity className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
					</AnimatedShinyText>
				</Link>
			</div>
		</div>
	);
}
