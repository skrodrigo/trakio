"use client";

import { Icons } from "@/app/components/icons";
import { supabase } from "@/app/lib/supabase";
import { loginSchema } from "@/app/schemas/schemas";
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
		<div className="w-full bg-[#18181b] max-w-md p-10 bg-card rounded-lg shadow-md space-y-8 border border-zinc-800">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										placeholder="Seu Endereço de Email"
										{...field}
										aria-invalid={!!form.formState.errors.email}
										aria-describedby="email-error"
										className="border py-6 border-input focus-visible:ring-2 focus-visible:ring-primary"
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
								<FormLabel>Senha</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Sua Senha"
										{...field}
										aria-invalid={!!form.formState.errors.password}
										aria-describedby="password-error"
										className="border  p-6 border-input focus-visible:ring-2 focus-visible:ring-primary"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					{form.formState.errors.root && (
						<p id="login-error" className="text-sm text-destructive">
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
							"Entrar"
						)}
					</Button>
				</form>
			</Form>
			<div className="text-center">
				<p className="text-muted-foreground mt-2">
					Não tem uma conta?{" "}
					<Link href="/register" className="text-primary hover:underline">
						Registre-se
					</Link>
				</p>
			</div>
		</div>
	);
}
