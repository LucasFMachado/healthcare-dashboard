'use client'

import { styled } from 'styled-components'

import {
  BankIcon,
  CrutchIcon,
  FirstAidIcon,
  MedicalOperationIcon,
} from '@/assets/icons'
import { H6, Subtitle2 } from '@/styles/components'
import { colors } from '@/styles/variables'

import { MonthAmountChart } from '../charts/MonthAmountChart'
import { PatientsChart } from '../charts/PatientsChart'
import { WeekAmountChart } from '../charts/WeekAmountChart'
import { AppointmentsTable } from '../tables/AppointmentsTable'

const summaryItems = [
  {
    name: 'Appointments',
    value: '213',
    icon: FirstAidIcon,
  },
  {
    name: 'New Patients',
    value: '104',
    icon: CrutchIcon,
  },
  {
    name: 'Operations',
    value: '24',
    icon: MedicalOperationIcon,
  },
  {
    name: 'Hospital Earnings',
    value: '$ 12,174',
    icon: BankIcon,
  },
]

export function DashboardContent() {
  return (
    <Wrapper>
      <Summary>
        {summaryItems.map(({ name, value, icon: Icon }) => (
          <SummaryItem key={name}>
            <Icon color={colors.primary.main} size={40} />
            <div>
              <Subtitle2>{name}</Subtitle2>
              <H6>{value}</H6>
            </div>
          </SummaryItem>
        ))}
      </Summary>
      <PatientsChart />
      <ChartContainer>
        <MonthAmountChart />
        <WeekAmountChart />
      </ChartContainer>
      <AppointmentsTable />
    </Wrapper>
  )
}

const ChartContainer = styled.div`
  height: 370px;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Summary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 255px);
  gap: 30px;
  justify-content: space-between;
`

const SummaryItem = styled.div`
  height: 88px;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h6 {
      color: ${colors.primary.main};
    }
  }

  svg {
    color: ${colors.primary.main};
    height: 40px;
    width: 40px;
  }
`
