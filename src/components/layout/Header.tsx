'use client'

import { FiMenu } from 'react-icons/fi'
import { styled } from 'styled-components'

import { NotificationIcon } from '@/assets/icons'
import { useMenu } from '@/contexts/MenuContext'
import { Body2 } from '@/styles/components'
import { colors } from '@/styles/variables'

export function Header() {
  const { toggleMenu } = useMenu()

  return (
    <Container>
      <Title>
        <button onClick={toggleMenu} aria-label="Toggle menu button">
          <FiMenu size={24} />
        </button>
        <Body2>Dashboard</Body2>
      </Title>
      <Profile>
        <NotificationIcon size={24} color={colors.grey.light} />
        <img src="profile.png" />
        <Body2>Lucas Machado</Body2>
      </Profile>
    </Container>
  )
}

const Container = styled.header`
  height: 50px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
  position: fixed;
  width: inherit;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 8px 0px;
  z-index: 999;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;

  button {
    border-radius: 50%;
    height: auto;
    width: auto;
    padding: 5px;
    color: ${colors.grey.dark};

    &:hover {
      background-color: ${colors.grey.lightest};
      color: ${colors.primary.main};
    }
  }

  span {
    font-size: 24px;
    font-weight: 300;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  img {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
`
