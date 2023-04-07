import { NextAuthOptions, Profile } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

interface ProfileWithLogin extends Profile {
  login: string | null | undefined;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
