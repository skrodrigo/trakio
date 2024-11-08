import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient({ req, res });
	const {
		data: { session },
	} = await supabase.auth.getSession();

	// Se não houver sessão e o usuário não estiver na página de login ou registro, redireciona para a página de login
	if (
		!session &&
		req.url !== new URL("/login", req.url).toString() &&
		req.url !== new URL("/register", req.url).toString()
	) {
		return;
	}

	// Redireciona para o dashboard se o usuário já estiver autenticado e tentar acessar login, registro ou a página inicial
	if (
		session &&
		["/login", "/register", "/"].includes(new URL(req.url).pathname)
	) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	return res;
}

// Configuração do matcher para aplicar o middleware a todas as rotas
export const config = {
	matcher: [
		"/((?!_next|api|static|favicon.ico).*)", // Aplica o middleware a todas as rotas, exceto as especificadas
	],
};
