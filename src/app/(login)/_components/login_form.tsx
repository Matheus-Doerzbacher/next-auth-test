'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { Alert, AlertTitle } from '@/components/ui/alert'

export function LoginForm() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  async function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      username: formData.get('username') as string,
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
        <Label htmlFor="email">Username</Label>
        <Input
          id="username"
          type="text"
          placeholder="seu_nome_de_usuario"
          name="username"
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
      {error && (
        <Alert variant="destructive">
          <AlertTitle className="text-center">
            {error === 'CredentialsSignin' ? 'Erro no login' : error}
          </AlertTitle>
        </Alert>
      )}
    </form>
  )
}
