import { IconProps } from '@/types/icon'

export default function PreviousPageIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / icofont / directional / simple / left" opacity="0.7">
        <path
          id="Vector"
          d="M9.71199 2.93335L4.91199 7.73335L9.71199 12.5333L11.088 11.1734L7.64799 7.73335L11.088 4.29335L9.71199 2.93335Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
