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

          console.log('Response: ' + response)
          if (response.status !== 200) return null

          const data = await response.json()
          console.log('Data: ', data)

          if (!data.token || !data.username) return null

          cookies().set('token', data.token)

          return {
            id: data.id,
            name: data.username,
            email: '',
          }
        } catch (err) {
          console.log(err)
          return null
        }
      },
    }),
  ],
})

export { handler as GET, handler as POST }
