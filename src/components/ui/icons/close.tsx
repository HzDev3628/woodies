import { SVGProps } from 'react'

export const Close = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M3.2 32L0 28.8L12.8 16L0 3.2L3.2 0L16 12.8L28.8 0L32 3.2L19.2 16L32 28.8L28.8 32L16 19.2L3.2 32Z"
        fill="#999999"
      />
      <defs>
        <clipPath id="clip0_3226_36749">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
