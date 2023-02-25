import { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";

type NextAuthUserWithStringId = {
  id: string;
  name: string;
  email: string;
  image: string;
};

const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
        } as NextAuthUserWithStringId;
      },
    }),
  ],
  secret: process.env.SECRET as string,
};

export default (req: NextApiRequest, res: NextApiResponse) =>
  NextAuth(req, res, options);

//   Providers.GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//       profile(profile) {
//         return {
//           id: profile.id.toString(),
//           name: profile.name || profile.login,
//           email: profile.email,
//           image: profile.avatar_url,
//         } as NextAuthUserWithStringId
//       },
//     }),
