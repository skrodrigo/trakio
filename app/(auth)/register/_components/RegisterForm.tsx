"use client";

import { Icons } from "@/app/components/icons";
import { registerSchema } from "@/app/schemas/schemas";
import { supabase } from "@/app/supabase/supabase";
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
				form.setError(
					authError.message.includes("User already registered")
						? "email"
						: "root",
					{
						message: authError.message.includes("User already registered")
							? "Este e-mail já está registrado"
							: "Erro ao criar conta. Tente novamente.",
					},
				);
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
		<div className="w-full max-w-md p-8 bg-card rounded-lg shadow-md space-y-8 border border-zinc-800 ">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-zinc-200">Nome</FormLabel>
								<FormControl>
									<Input
										placeholder="Seu nome"
										{...field}
										aria-invalid={!!form.formState.errors.name}
										aria-describedby="name-error"
										className="border py-6 bg-zinc-800 border-input focus-visible:ring-2 focus-visible:ring-primary"
									/>
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
								<FormLabel className="text-zinc-200">Email</FormLabel>
								<FormControl>
									<Input
										placeholder="seu@email.com"
										{...field}
										aria-invalid={!!form.formState.errors.email}
										aria-describedby="email-error"
										className="border py-6 bg-zinc-800 border-input focus-visible:ring-2 focus-visible:ring-primary"
									/>
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
								<FormLabel className="text-zinc-200">Senha</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Sua Senha"
										{...field}
										aria-invalid={!!form.formState.errors.password}
										aria-describedby="password-error"
										className="border py-6 bg-zinc-800 border-input focus-visible:ring-2 focus-visible:ring-primary"
									/>
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
								<FormLabel className="text-zinc-200">Confirmar Senha</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Sua Senha"
										{...field}
										aria-invalid={!!form.formState.errors.confirmPassword}
										aria-describedby="confirmPassword-error"
										className="border py-6  bg-zinc-800 border-input focus-visible:ring-2 focus-visible:ring-primary"
									/>
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

					<Button
						type="submit"
						className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
						disabled={isLoading}
					>
						{isLoading ? (
							<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
						) : (
							"Criar conta"
						)}
					</Button>
				</form>
			</Form>
			<div className="text-center">
				<p className="text-zinc-700 mt-2">
					Já tem uma conta?{" "}
					<Link href="/login" className="text-blue-500 hover:underline">
						Faça login
					</Link>
				</p>
			</div>
		</div>
	);
}
