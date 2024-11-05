import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	BarChart3,
	LineChart,
	Settings,
	Sparkles,
	Star,
	User,
	Users,
	Zap,
} from "lucide-react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/main/AboutSection";
import FeatureSection from "./components/main/FeatureSection";
import HeroSection from "./components/main/HeroSection";
import PricingSection from "./components/main/PricingSection";
import StartedSection from "./components/main/StartedSection";
import StepsSection from "./components/main/StepsSection";
import TestemonialsSection from "./components/main/TestemonialsSection";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-[#09090b] text-[#FFFFFF]">
			<Header />
			<main className="flex-1">
				<HeroSection />
				<FeatureSection />
				<StepsSection />
				<PricingSection />
				<AboutSection />
				<TestemonialsSection />
				<StartedSection />
			</main>
			<Footer />
		</div>
	);
}
