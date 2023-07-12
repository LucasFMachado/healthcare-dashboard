'use client'

import { styled } from 'styled-components'

import { NextPageIcon, PreviousPageIcon } from '@/assets/icons'
import { Body2, H5, Small1, Subtitle2 } from '@/styles/components'
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
    avatar: 'avatars/avatar_1.png',
  },
  {
    id: 2,
    name: 'Ronald Richards',
    email: 'ronald.richards@example.com',
    date: '10/12/2020',
    visitTime: '12:00-12:45pm',
    doctor: 'Dr. Theresa Webb',
    condition: 'Depression',
    avatar: 'avatars/avatar_2.png',
  },
  {
    id: 3,
    name: 'Jane Cooper',
    email: 'jane.cooper@example.com',
    date: '10/13/2020',
    visitTime: '01:15-01:45pm',
    doctor: 'Dr. Jacob Jones',
    condition: 'Arthritis',
    avatar: 'avatars/avatar_3.png',
  },
  {
    id: 4,
    name: 'Robert Fox',
    email: 'robert.fox@gmail.com',
    date: '10/14/2020',
    visitTime: '02:00-02:45pm',
    doctor: 'Dr. Arlene McCoy',
    condition: 'Fracture',
    avatar: 'avatars/avatar_4.png',
  },
  {
    id: 5,
    name: 'Jenny Wilson',
    email: 'jenny.wilson@example.com',
    date: '10/15/2020',
    visitTime: '12:00-12:45pm',
    doctor: 'Dr. Esther Howard',
    condition: 'Depression',
    avatar: 'avatars/avatar_5.png',
  },
  {
    id: 6,
    name: 'Marshall Cook',
    email: 'marshall.cook@example.com',
    date: '10/17/2020',
    visitTime: '01:15-01:45pm',
    doctor: 'Dr. Jacob Jones',
    condition: 'Dyslexia',
    avatar: 'avatars/avatar_6.png',
  },
  {
    id: 7,
    name: 'Stephanie Cook',
    email: 'stephanie.cook@example.com',
    date: '10/17/2020',
    visitTime: '02:00-02:45pm',
    doctor: 'Dr. Theresa Webb',
    condition: 'Hypothermia',
    avatar: 'avatars/avatar_7.png',
  },
  {
    id: 8,
    name: 'Marion James',
    email: 'marion.james@example.com',
    date: '10/18/2020',
    visitTime: '09:15-09:45am',
    doctor: 'Dr. Esther Howard',
    condition: 'Sunburn',
    avatar: 'avatars/avatar_8.png',
  },
  {
    id: 9,
    name: 'Teresa Holland',
    email: 'teresa.holland@example.com',
    date: '10/19/2020',
    visitTime: '12:00-12:45pm',
    doctor: 'Dr. Arlene McCoy',
    condition: 'Fracture',
    avatar: 'avatars/avatar_9.png',
  },
  {
    id: 10,
    name: 'Zachary Marshall',
    email: 'zachary.marshall@example.com',
    date: '10/20/2020',
    visitTime: '09:15-09:45am',
    doctor: 'Dr. Arlene McCoy',
    condition: 'Arthritis',
    avatar: 'avatars/avatar_10.png',
  },
]

export function AppointmentsTable() {
  return (
    <TableContainer>
      <H5>Appointment Activity</H5>
      <Table>
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
              <td>
                <div>
                  <img src={user.avatar} />
                  <Body2>{user.name}</Body2>
                </div>
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
        <Pagination>
          <PaginationItem disabled>
            <PreviousPageIcon color={colors.grey.dark} size={16} />
          </PaginationItem>
          <PaginationItem active>
            <Small1>1</Small1>
          </PaginationItem>
          <PaginationItem>
            <Small1>2</Small1>
          </PaginationItem>
          <PaginationItem>
            <Small1>3</Small1>
          </PaginationItem>
          <PaginationItem>
            <NextPageIcon color={colors.grey.dark} size={16} />
          </PaginationItem>
        </Pagination>
      </Table>
    </TableContainer>
  )
}

const TableContainer = styled.div`
  height: 100%;
  border-radius: 4px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;

  h5 {
    padding: 0 12px 12px 12px;
  }
`

export const Table = styled.table`
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
        div {
          display: flex;
          align-items: center;
          gap: 12px;
          width: max-content;

          img {
            height: 32px;
            width: 32px;
            border-radius: 50%;
          }
        }
      }
    }
  }
`

const Pagination = styled.tfoot`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  padding: 12px;
`

const PaginationItem = styled.button<{ active?: boolean }>`
  height: 32px;
  width: 32px;
  border: 1px solid ${colors.grey.lightest};
  border-radius: 4px;
  background-color: ${props =>
    props.active ? colors.primary.main : 'initial'};
  color: ${props => (props.active ? colors.white : 'initial')};
`
