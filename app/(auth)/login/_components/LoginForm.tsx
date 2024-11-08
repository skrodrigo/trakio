"use client";

import { loginSchema } from "@/app/schemas/schemas";
import { supabase } from "@/app/shared/supabase";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";

export default function LoginForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		try {
			setIsLoading(true);
			const { error } = await supabase.auth.signInWithPassword({
				email: values.email,
				password: values.password,
			});

			if (error) {
				form.setError("root", {
					message: "Credenciais inválidas. Tente novamente.",
				});
				return;
			}

			router.push("/dashboard");
			router.refresh();
		} catch (error) {
			console.error(error);
			form.setError("root", {
				message: "Erro ao fazer login. Tente novamente.",
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="w-full max-w-md space-y-8">
			<div className="text-center">
				<h2 className="text-2xl font-bold">Entrar na sua conta</h2>
				<p className="text-muted-foreground mt-2">
					Não tem uma conta?{" "}
					<Link href="/register" className="text-primary hover:underline">
						Registre-se
					</Link>
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="seu@email.com" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Senha</FormLabel>
								<FormControl>
									<Input type="password" placeholder="••••••" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{form.formState.errors.root && (
						<p className="text-sm text-destructive">
							{form.formState.errors.root.message}
						</p>
					)}

					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? "Entrando..." : "Entrar"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
