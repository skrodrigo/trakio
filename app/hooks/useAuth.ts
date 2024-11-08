import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "../shared/supabase";
import type { AuthState, AuthUser } from "../types/auth";

export function useAuth() {
	const [authState, setAuthState] = useState<AuthState>({
		user: null,
		isLoading: true,
		error: null,
	});
	const router = useRouter();

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				setAuthState((prev) => ({
					...prev,
					user: session?.user as AuthUser | null,
					isLoading: false,
				}));

				if (event === "SIGNED_OUT") {
					router.push("/login");
					router.refresh();
				}
			},
		);

		return () => {
			authListener?.subscription.unsubscribe();
		};
	}, [router]);

	const signOut = async () => {
		try {
			await supabase.auth.signOut();
		} catch (error) {
			setAuthState((prev) => ({
				...prev,
				error: error as Error,
			}));
		}
	};

	return {
		user: authState.user,
		isLoading: authState.isLoading,
		error: authState.error,
		signOut,
	};
}
