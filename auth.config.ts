import type { NextAuthConfig } from "next-auth";

export const authConfig = {
   pages: {
      signIn: "/login",
   },
   callbacks: {
      authorized({ auth, request: { nextUrl } }) {
         console.log("Auth Secret loaded:", process.env.AUTH_SECRET?.slice(0, 5), "...");
         console.log("authorized running 🫸🥳");
         console.log("auth is: ❣️❣️", auth);

         const isLoggedIn = !!auth?.user;
         const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
         // const isOnAdmin = nextUrl.pathname.startsWith("/admin");
         const isOnAuthPage = nextUrl.pathname.startsWith("/login") || nextUrl.pathname.startsWith("/register");

         // const isAdmin = auth?.user?.admin;
         // const isAdmin = auth?.token?.admin; // ✅ pull from token

         // 🔒 Admin-only pages
         // if (isOnAdmin) {
         //    if (isLoggedIn && isAdmin) return true;
         //    return false; // => redirects to /login
         // }

         // 🔒 Dashboard requires login
         if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; // => redirects to /login
         }

         // 🚫 Logged-in users shouldn't see login/register
         if (isOnAuthPage && isLoggedIn) {
            return Response.redirect(new URL("/", nextUrl));
         }

         // ✅ Public pages: always allow
         return true;
      },
   },
   providers: [],
} satisfies NextAuthConfig;
