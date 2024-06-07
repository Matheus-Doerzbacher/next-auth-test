/**
 * v0 por Vercel.
 * @veja https://v0.dev/t/1EAMnaaNE0w
 * Documentação: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Bem-vindo de volta!
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Faça login na sua conta para continuar.
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@exemplo.com"
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
            prefetch={false}
          >
            Não tem uma conta? Inscreva-se
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-900 hover:underline dark:text-gray-50"
            prefetch={false}
          >
            Esqueceu a senha?
          </Link>
        </div>
      </div>
    </div>
  )
}
