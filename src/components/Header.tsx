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
        <p>Lucas Machado</p>
      </Profile>
    </Container>
  )
}

const Container = styled.header`
  height: 88px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.white};
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
    width: 40px;
    height: 40px;
  }

  p {
    font-weight: 500;
    font-size: 20px;
  }
`
