import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { UserService } from '@/services/userServices'
import { SingInFormValues } from '@/types/user'

export const useLogin = () => {
  const router = useRouter()

  const signInFormSchema = yup.object().shape({
    username: yup.string().required('Required field'),
    password: yup.string().required('Required field'),
    remember: yup.boolean().required('Required field'),
  })

  const { register, handleSubmit, formState } = useForm<SingInFormValues>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      username: 'username',
      password: '123456',
      remember: true,
    },
  })

  async function handleLogin(values: SingInFormValues) {
    UserService.login(values)
    router.push('/dashboard')
  }

  return {
    register,
    handleSubmit,
    handleLogin,
    formState,
  }
}
