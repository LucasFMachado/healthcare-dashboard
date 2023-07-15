'use client'

import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { styled } from 'styled-components'

import { H5 } from '@/styles/components'
import { colors, shadows } from '@/styles/variables'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const series = [
  {
    name: 'Patients 2022',
    data: [27, 45, 48, 32, 34, 52, 56],
  },
  {
    name: 'Patients 2023',
    data: [31, 40, 28, 51, 42, 67, 71],
  },
]

const options: ApexOptions = {
  colors: [colors.primary.main, colors.success.main],
  chart: {
    width: '100%',
    height: '100%',
    toolbar: {
      show: false,
    },
    foreColor: colors.grey.main,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    markers: {
      radius: 0,
      width: 25,
      height: 3,
      offsetY: -2,
    },
    itemMargin: {
      horizontal: 10,
    },
  },
  grid: {
    strokeDashArray: 3,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: colors.grey.dark,
    },
    axisTicks: {
      color: colors.grey.dark,
    },
    categories: [
      '2018-09-19T00:00:00.000Z',
      '2018-09-19T01:30:00.000Z',
      '2018-09-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-09-19T04:30:00.000Z',
      '2018-09-19T05:30:00.000Z',
      '2018-09-19T06:30:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
}

export function PatientsChart() {
  return (
    <ChartContainer>
      <H5>Hospital Survey</H5>
      <Chart options={options} series={series} type="area" height={300} />
    </ChartContainer>
  )
}

const ChartContainer = styled.div`
  height: 370px;
  border-radius: 4px;
  box-shadow: ${shadows.cards};
  padding: 20px;
`
