'use client'

import { ApexOptions } from 'apexcharts'
import dynamic from 'next/dynamic'
import { styled } from 'styled-components'

import { H5, Small2 } from '@/styles/components'
import { colors } from '@/styles/variables'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const series = [
  {
    name: 'Income in current month',
    data: [59000, 80000, 51000, 70000, 61000],
  },
]

const options: ApexOptions = {
  colors: [colors.success.main],
  chart: {
    width: '100%',
    height: '100%',
    toolbar: {
      show: false,
    },
    foreColor: colors.grey.main,
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 3,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    width: 3,
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
      '2018-07-01',
      '2018-07-08',
      '2018-07-16',
      '2018-07-24',
      '2018-07-31',
    ],
  },
  yaxis: {
    labels: {
      formatter: val => `$ ${val}`,
    },
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy',
    },
  },
}

export function MonthAmountChart() {
  return (
    <div>
      <ChartInfo>
        <H5>$ 100,000</H5>
        <Small2>Income in current month</Small2>
      </ChartInfo>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  )
}

const ChartInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 12px 12px 12px;

  span {
    color: ${colors.grey.main};
  }
`
