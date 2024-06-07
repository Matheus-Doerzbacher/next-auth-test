'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'

export function LoginForm() {
  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }

    console.log(data)

    signIn('credentials', {
      ...data,
      callbackUrl: '/dashboard',
    })
  }
  return (
    <form onSubmit={login} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="m@exemplo.com"
          name="email"
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" name="password" required />
      </div>
      <Button type="submit" className="w-full">
        Entrar
      </Button>
    </form>
  )
}
