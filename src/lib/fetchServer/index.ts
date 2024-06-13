import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const fetchServer = async (
  input: string | URL | Request,
  init?: RequestInit | undefined,
) => {
  const token = cookies().get('token')

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(token && { Authorization: `Bearer ${token.value}` }),
    },
  })

  if (response.status === 401) {
    await redirect('/')
  }

  return response
}
