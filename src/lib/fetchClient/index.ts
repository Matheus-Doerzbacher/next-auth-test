'use client'

import { getCookie } from 'cookies-next'
import { signOut } from 'next-auth/react'

export const fetchClient = async (
  input: string | URL | Request,
  init?: RequestInit | undefined,
) => {
  const token = getCookie('token')

  const response = await fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  })

  if (response.status === 401) {
    await signOut()
  }

  return response
}
