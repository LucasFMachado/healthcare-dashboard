import {
  ChartIcon,
  CreditCardIcon,
  DoctorIcon,
  NurseryIcon,
  PatientIcon,
  StethoscopeIcon,
} from '@/assets/icons'

export const pages = [
  {
    route: '/dashboard',
    name: 'Dashboard',
    icon: ChartIcon,
  },
  {
    route: '/appointments',
    name: 'Appointments',
    icon: StethoscopeIcon,
  },
  {
    route: '/doctors',
    name: 'Doctors',
    icon: DoctorIcon,
  },
  {
    route: '/departments',
    name: 'Departments',
    icon: NurseryIcon,
  },
  {
    route: '/patients',
    name: 'Patients',
    icon: PatientIcon,
  },
  {
    route: '/payments',
    name: 'Payments',
    icon: CreditCardIcon,
  },
]
