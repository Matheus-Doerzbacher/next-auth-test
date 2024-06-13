import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { cookies } from 'next/headers'

const handler = NextAuth({
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        if (!credentials) return null

        try {
          const response = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
            headers: { 'Content-Type': 'application/json' },
          })

          if (response.status !== 200) return null

          const data = await response.json()

          if (!data.token || !data.user.username) return null

          cookies().set('token', data.token)

          return {
            id: data.user.id,
            username: data.user.username,
            name: data.user.username,
            email: data.user.email,
          }
        } catch (err) {
          console.log(err)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ account })

      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }

      return token
    },
    async session({ session, token }) {
      console.log({ token })
      session.user = {
        name: token.name,
        email: token.email,
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
