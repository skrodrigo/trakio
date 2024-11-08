import type { User as SupabaseUser } from "@supabase/supabase-js";

export interface AuthUser extends SupabaseUser {
	id: string;
	email: string;
	user_metadata: {
		name?: string;
	};
}

export interface AuthState {
	user: AuthUser | null;
	isLoading: boolean;
	error: Error | null;
}
