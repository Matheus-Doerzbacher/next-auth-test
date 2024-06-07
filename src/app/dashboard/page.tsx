import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { LogoutButton } from './_components/logout_button'

export default async function Page() {
  const session = await getServerSession()

  if (!session) {
    redirect('/')
  }
  return (
    <div>
      <h1>Olá, {session?.user?.email}</h1>
      <p>Dashboard</p>
      <LogoutButton />
    </div>
  )
}
