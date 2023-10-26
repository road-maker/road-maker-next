// export async function GET(request: Request) {}
import { axiosInstance } from "@/axiosInstance";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import Email from "next-auth/providers/email";
// import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "myemail@mydomain.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch(
        //   `${process.env.SERVER_HOST}/members/signin` as string,
        //   {
        //     method: "POST",
        //     body: JSON.stringify(credentials),
        //     headers: { "Content-Type": "application/json" },
        //   }
        // );
        // const user = await res.json();
        const res = await axiosInstance({
          url: `${process.env.SERVER_HOST}/members/signin`,
          method: "POST",
          data: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });

        // If no error and we have user data, return it
        // if (res.data) {
        if (res.data) {
          return res.data;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
