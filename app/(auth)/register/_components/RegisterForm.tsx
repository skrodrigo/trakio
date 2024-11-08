"use client";

import { registerSchema } from "@/app/schemas/schemas";
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
import type z from "zod";

export default function RegisterForm() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	async function onSubmit(values: z.infer<typeof registerSchema>) {
		console.log("Dados recebidos para registro:", values);

		try {
			setIsLoading(true);
			const { data: authData, error: authError } = await supabase.auth.signUp({
				email: values.email,
				password: values.password,
				options: {
					data: {
						name: values.name,
					},
					emailRedirectTo: `${window.location.origin}/auth/callback`,
				},
			});
			console.log("Dados da autenticação:", authData);
			console.error("Erro de autenticação:", authError);

			if (authError) {
				if (authError.message.includes("User already registered")) {
					form.setError("email", {
						message: "Este email já está registrado",
					});
				} else {
					form.setError("root", {
						message: "Erro ao criar conta. Tente novamente.",
					});
				}
				return;
			}

			router.push("/login?registered=true");
			router.refresh();
		} catch (error) {
			console.error(error);
			form.setError("root", {
				message: "Erro ao criar conta. Tente novamente.",
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="w-full max-w-md space-y-8">
			<div className="text-center">
				<h2 className="text-2xl font-bold">Criar uma conta</h2>
				<p className="text-muted-foreground mt-2">
					Já tem uma conta?{" "}
					<Link href="/login" className="text-primary hover:underline">
						Faça login
					</Link>
				</p>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nome</FormLabel>
								<FormControl>
									<Input placeholder="Seu nome" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

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

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirmar Senha</FormLabel>
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
						{isLoading ? "Criando conta..." : "Criar conta"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
