'use client'

import { styled } from 'styled-components'

import { Body2, H5, Subtitle2 } from '@/styles/components'
import { colors } from '@/styles/variables'

const usersData = [
  {
    id: 1,
    name: 'Leslie Alexander',
    email: 'lesie.alexander@example.com',
    date: '10/10/2020',
    visitTime: '09:15-09:45am',
    doctor: 'Dr. Jacob Jones',
    condition: 'Mumps Stage II',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    email: 'lesie.alexander@example.com',
    date: '10/10/2020',
    visitTime: '09:15-09:45am',
    doctor: 'Dr. Jacob Jones',
    condition: 'Mumps Stage II',
  },
]

export function AppointmentsTable() {
  return (
    <TableContainer>
      <H5>Appointment Activity</H5>
      <table>
        <thead>
          <tr>
            <th>
              <Subtitle2>Name</Subtitle2>
            </th>
            <th>
              <Subtitle2>Email</Subtitle2>
            </th>
            <th>
              <Subtitle2>Date</Subtitle2>
            </th>
            <th>
              <Subtitle2>Visit Time</Subtitle2>
            </th>
            <th>
              <Subtitle2>Doctor</Subtitle2>
            </th>
            <th>
              <Subtitle2>Conditions</Subtitle2>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map(user => (
            <tr key={user.id}>
              <td className="user_information">
                <img src="profile.png" />
                <Body2>{user.name}</Body2>
              </td>
              <td>
                <Body2>{user.email}</Body2>
              </td>
              <td>
                <Body2>{user.date}</Body2>
              </td>
              <td>
                <Body2>{user.visitTime}</Body2>
              </td>
              <td>
                <Body2>{user.doctor}</Body2>
              </td>
              <td>
                <Body2>{user.condition}</Body2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  )
}

const TableContainer = styled.div`
  height: 370px;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;

  h5 {
    padding: 0 12px 12px 12px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    tr {
      border-bottom: 1px solid ${colors.divider};

      th {
        padding: 12px;
        text-align: left;
      }

      td {
        padding: 12px;
        color: ${colors.grey.dark};

        &:first-child {
        }
      }

      .user_information {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }
      }
    }
  }
`
