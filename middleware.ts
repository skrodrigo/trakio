import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/", "/login", "/register"];

export async function middleware(req: NextRequest) {
	const res = NextResponse.next();
	const supabase = createMiddlewareClient({ req, res });

	const {
		data: { session },
	} = await supabase.auth.getSession();

	const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);

	if (!session && !isPublicRoute) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	if (
		session &&
		(req.nextUrl.pathname === "/login" || req.nextUrl.pathname === "/register")
	) {
		return NextResponse.redirect(new URL("/dashboard", req.url));
	}

	return res;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
