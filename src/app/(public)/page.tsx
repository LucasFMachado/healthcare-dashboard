import Link from 'next/link'

import { PageWrapper } from '@/components/layout/PageWrapper'

export default function Login() {
  return (
    <PageWrapper>
      <p>Login</p>
      <Link href="/dashboard">Dashboard</Link>
    </PageWrapper>
  )
}
