import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { LogoutButton } from './_components/logout_button'
import Content from './_components/content'

export default async function Page() {
  const session = await getServerSession()

  if (!session) {
    redirect('/')
  }

  return (
    <div className="text-center space-y-4">
      <h1>Olá, {session?.user?.email}</h1>
      <p>Dashboard</p>
      <Content texto="Olá mundo" />
      <LogoutButton />
    </div>
  )
}
