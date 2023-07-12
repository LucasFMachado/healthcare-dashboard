import { IconProps } from '@/types/icon'

export default function NextPageIcon({ color, size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="icon / icofont / directional / simple / right">
        <path
          id="Vector"
          d="M6.28799 12.5333L11.088 7.73335L6.28799 2.93335L4.92799 4.29335L8.35199 7.73335L4.91199 11.1734L6.28799 12.5333Z"
          fill={color}
        />
      </g>
    </svg>
  )
}
