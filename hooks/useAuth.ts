import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(shouldRedirect?: boolean) {
    const { data: session } = useSession();
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signOut({ callbackUrl: '/giris', redirect: shouldRedirect });
        }

        if (session === null) {
            if (router.route !== '/giris') {
                router.replace('/giris');
            }
            setIsAuthenticated(false);
        } else if (session !== undefined) {
            if (router.route === '/giris') {
                router.replace('/');
            }
            setIsAuthenticated(true);
        }
    }, [session]);

    return isAuthenticated;
}