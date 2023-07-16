'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { BsKeyFill, BsPersonFill } from 'react-icons/bs'
import { styled } from 'styled-components'
import * as yup from 'yup'

import { Body2, H3, Small1, Small2, Small3 } from '@/styles/components'
import { colors, shadows } from '@/styles/variables'

interface SingInFormValues {
  username: string
  password: string
}

const signInFormSchema = yup.object().shape({
  username: yup.string().required('Required field'),
  password: yup.string().required('Required field'),
})

export default function LoginContent() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<SingInFormValues>({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      username: 'username',
      password: '123456',
    },
  })

  async function handleSignIn(values: SingInFormValues) {
    console.log('Login form values: ', values)
    router.push('/dashboard')
  }

  return (
    <PageWrapper>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <H3>Login</H3>
        <Credentials>
          <InputControl>
            <InputControl>
              <BsPersonFill />
              <input
                type="text"
                placeholder="Type your username"
                {...register('username')}
              />
            </InputControl>
            <ErrorMessage hasError={Boolean(errors.username)}>
              {errors?.username?.message}
            </ErrorMessage>
          </InputControl>
          <InputControl>
            <InputControl>
              <BsKeyFill />
              <input
                type="password"
                placeholder="Type your password"
                {...register('password')}
              />
            </InputControl>
            <ErrorMessage hasError={Boolean(errors.password)}>
              {errors?.password?.message}
            </ErrorMessage>
          </InputControl>
        </Credentials>
        <AccountActions>
          <div>
            <input id="remember" type="checkbox" checked />
            <label htmlFor="remember">
              <Small2>Remember me</Small2>
            </label>
          </div>
          <Link href="/#">
            <Small1>Forgot you password?</Small1>
          </Link>
        </AccountActions>
        <button type="submit" disabled={!isValid || isSubmitting}>
          <Body2>Login</Body2>
        </button>
      </Form>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgb(56, 189, 248), rgb(186, 230, 253));
`

const Form = styled.form`
  width: 400px;
  background-color: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: ${shadows.cards};
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    color: ${colors.primary.main};
    text-align: center;
    margin-bottom: 12px;
  }

  button {
    width: 100%;
    background-color: ${colors.primary.main};
    height: 32px;
    border-radius: 4px;
    color: ${colors.white};
    transition: 0.3s;

    &:hover {
      background-color: ${colors.primary.hover};
    }
  }
`

const Credentials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const AccountActions = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-align: center;
    color: ${colors.grey.main};
    transition: 0.3s;

    &:hover {
      color: ${colors.grey.dark};
    }
  }

  > div {
    display: flex;
    gap: 6px;
    color: ${colors.grey.main};

    &:hover {
      color: ${colors.grey.dark};
    }
  }
`

const InputControl = styled.div`
  > div {
    position: relative;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
      left: 16px;
      height: 16px;
      width: 16px;
      color: ${colors.grey.dark};
    }

    input {
      padding: 0px 50px;
      width: 100%;
      border: none;
      background: ${colors.divider};
      height: 32px;
      border-radius: 4px;
      outline: none;
      font-size: 14px;
      color: ${colors.grey.dark};
    }
  }
`

const ErrorMessage = styled(Small3)<{ hasError: boolean }>`
  color: ${colors.error.main};
  display: block;
  height: ${props => (props.hasError ? 'initial' : '12px')};
`
