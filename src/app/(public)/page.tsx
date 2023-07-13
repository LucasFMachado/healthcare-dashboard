'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai'
import { styled } from 'styled-components'

import { Body2, H3, Small1, Small2 } from '@/styles/components'
import { colors } from '@/styles/variables'

export default function Login() {
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <PageWrapper>
      <Form>
        <H3>Login</H3>
        <Credentials>
          <InputControl>
            <AiOutlineUser />
            <input
              id="username"
              type="text"
              value="username"
              placeholder="Type your username"
            />
          </InputControl>
          <InputControl>
            <AiOutlineLock />
            <input
              id="password"
              type="password"
              value="123456"
              placeholder="Type your password"
            />
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
        <button onClick={handleSubmit}>
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
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  flex-direction: column;
  gap: 24px;

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
  gap: 12px;
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
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    margin-left: 12px;
    height: 16px;
    width: 16px;
    color: ${colors.grey.dark};
  }

  input {
    padding: 0px 40px;
    width: 100%;
    border: none;
    background: ${colors.divider};
    height: 32px;
    border-radius: 4px;
    outline: none;
    font-size: 14px;
    color: ${colors.grey.dark};
  }
`
