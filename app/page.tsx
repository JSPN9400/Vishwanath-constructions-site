import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
// Marketing home is at (marketing)/page.tsx — this just handles auth redirect
export default async function RootPage() {
  const session = await getServerSession(authOptions)
  if (session) redirect('/dashboard')
  redirect('/home')
}
