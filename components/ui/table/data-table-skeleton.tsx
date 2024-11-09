import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ScrollArea, ScrollBar } from "../scroll-area";

export function DataTableSkeleton({
	columnCount = 1,
	rowCount = 10,
	searchableColumnCount = 0,
	filterableColumnCount = 0,
	showViewOptions = false,
}) {
	return (
		<div className="w-full space-y-3 overflow-auto">
			{(searchableColumnCount > 0 || filterableColumnCount > 0) && (
				<div className="flex w-full items-center justify-between space-x-2 overflow-auto p-1">
					<div className="flex flex-1 items-center space-x-2 space-y-4">
						{Array.from({ length: searchableColumnCount }).map((_, index) => (
							<Skeleton
								key={`search-${searchableColumnCount}`}
								className="h-10 w-[150px] lg:w-[250px]"
							/>
						))}
						{Array.from({ length: filterableColumnCount }).map((_, index) => (
							<Skeleton
								key={`filter-${filterableColumnCount}`}
								className="h-10 w-[70px] border-dashed"
							/>
						))}
					</div>
					{showViewOptions && (
						<Skeleton className="ml-auto hidden h-7 w-[70px] lg:flex" />
					)}
				</div>
			)}
			<div className="rounded-md border">
				<ScrollArea className="h-[calc(80vh-220px)] rounded-md border md:h-[calc(90dvh-220px)]">
					<Table>
						<TableHeader>
							<TableRow>
								{Array.from({ length: columnCount }).map(() => (
									<TableHead key={`header-${columnCount}`}>
										<Skeleton className="h-8 w-full" />
									</TableHead>
								))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{Array.from({ length: rowCount }).map((_, rowIndex) => (
								<TableRow key={`row-${rowCount}`}>
									{Array.from({ length: columnCount }).map(() => (
										<TableCell key={`cell-${rowIndex}-${rowCount}`}>
											<Skeleton className="h-8 w-full" />
										</TableCell>
									))}
								</TableRow>
							))}
						</TableBody>
					</Table>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>
			<div className="flex w-full flex-col items-center justify-between gap-4 overflow-auto px-2 py-1 sm:flex-row sm:gap-8">
				<div className="flex-1">
					<Skeleton className="h-8 w-40" />
				</div>
				<div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:gap-8">
					<div className="flex items-center space-x-2">
						<Skeleton className="h-8 w-24" />
						<Skeleton className="h-8 w-[70px]" />
					</div>
					<div className="flex w-[100px] items-center justify-center text-sm font-medium">
						<Skeleton className="h-8 w-20" />
					</div>
					<div className="flex items-center space-x-2">
						<Skeleton className="hidden size-8 lg:block" />
						<Skeleton className="size-8" />
						<Skeleton className="size-8" />
						<Skeleton className="hidden size-8 lg:block" />
					</div>
				</div>
			</div>
		</div>
	);
}
