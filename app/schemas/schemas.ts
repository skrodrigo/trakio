import { z } from "zod";

export const userSchema = z.object({
	id: z.string(),
	email: z.string().email(),
	name: z.string().optional(),
	auth_id: z.string(),
	created_at: z.date(),
	updated_at: z.date(),
});

export const loginSchema = z.object({
	email: z.string().email("Email inválido"),
	password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export const registerSchema = loginSchema
	.extend({
		name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Senhas não conferem",
		path: ["confirmPassword"],
	});

export type User = z.infer<typeof userSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
