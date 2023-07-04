import { ReactNode } from 'react'

import { Dashboard } from '@/components/Dashboard'

export const metadata = {
  title: 'Dashboard | Healthcare Dashboard',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <Dashboard>{children}</Dashboard>
}
