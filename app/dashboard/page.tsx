"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/useAuth";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CalendarDateRangePicker } from "./_components/date-range-picker";
import { MainNav } from "./_components/main-nav";
import { Overview } from "./_components/overview";
import { RecentSales } from "./_components/recent-sales";
import TeamSwitcher from "./_components/team-switcher";
import { UserNav } from "./_components/user-nav";

export default function DashboardPage() {
	const { user, isLoading, signOut } = useAuth();
	const router = useRouter();

	// Redirect to login if not authenticated
	useEffect(() => {
		if (!isLoading && !user) {
			router.push("/login");
		}
	}, [isLoading, user, router]);

	return (
		<>
			<div className="flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center px-4">
						<TeamSwitcher />
						<MainNav className="mx-6" />
						<div className="ml-auto flex items-center space-x-4">
							<Search />
							<UserNav />
						</div>
					</div>
				</div>
				<div className="flex-1 space-y-4 p-8 pt-6">
					<div className="flex items-center justify-between space-y-2">
						<h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
						<div className="flex items-center space-x-2">
							<CalendarDateRangePicker />
							<Button>Download</Button>
						</div>
					</div>
					<Tabs defaultValue="overview" className="space-y-4">
						<TabsList>
							<TabsTrigger value="overview">Overview</TabsTrigger>
							<TabsTrigger value="analytics" disabled>
								Analytics
							</TabsTrigger>
							<TabsTrigger value="reports" disabled>
								Reports
							</TabsTrigger>
							<TabsTrigger value="notifications" disabled>
								Notifications
							</TabsTrigger>
						</TabsList>
						<TabsContent value="overview" className="space-y-4">
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Total Revenue
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">$45,231.89</div>
										<p className="text-xs text-muted-foreground">
											+20.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Subscriptions
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+2350</div>
										<p className="text-xs text-muted-foreground">
											+180.1% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">Sales</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+12,234</div>
										<p className="text-xs text-muted-foreground">
											+19% from last month
										</p>
									</CardContent>
								</Card>
								<Card>
									<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
										<CardTitle className="text-sm font-medium">
											Active Now
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="text-2xl font-bold">+573</div>
										<p className="text-xs text-muted-foreground">
											+201 since last hour
										</p>
									</CardContent>
								</Card>
							</div>
							<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
								<Card className="col-span-4">
									<CardHeader>
										<CardTitle>Overview</CardTitle>
									</CardHeader>
									<CardContent className="pl-2">
										<Overview />
									</CardContent>
								</Card>
								<Card className="col-span-3">
									<CardHeader>
										<CardTitle>Recent Sales</CardTitle>
										<CardDescription>
											You made 265 sales this month.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<RecentSales />
									</CardContent>
								</Card>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</>
	);
}
