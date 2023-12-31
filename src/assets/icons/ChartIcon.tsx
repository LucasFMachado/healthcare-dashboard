import { IconProps } from '@/types/icon'

export default function ChartIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / icofont / web / other / pie chart">
        <path
          id="Vector"
          d="M7.2192 2.20646C3.7856 2.20646 1 4.99046 1 8.42566C1 11.8609 3.784 14.6465 7.2192 14.6465C10.6544 14.6465 13.4384 11.8625 13.4384 8.42566H7.2192V2.20646ZM15 7.71366C15 5.99686 14.304 4.44166 13.1792 3.31686L8.7808 7.71366H15ZM8.0064 1.35046V7.56806L12.4032 3.17126C11.1888 1.95686 9.5968 1.35046 8.0064 1.35046Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
