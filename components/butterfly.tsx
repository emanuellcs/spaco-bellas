interface ButterflyProps {
  size?: number
  color?: string
}

export function Butterfly({ size = 60, color = "#8c0082" }: ButterflyProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-pulse"
    >
      <path
        d="M50 50C50 50 35 35 25 30C15 25 10 25 10 35C10 45 15 50 25 50C35 50 45 45 50 50Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M50 50C50 50 65 35 75 30C85 25 90 25 90 35C90 45 85 50 75 50C65 50 55 45 50 50Z"
        fill={color}
        opacity="0.6"
      />
      <path
        d="M50 50C50 50 35 65 25 70C15 75 10 75 10 65C10 55 15 50 25 50C35 50 45 55 50 50Z"
        fill={color}
        opacity="0.8"
      />
      <path
        d="M50 50C50 50 65 65 75 70C85 75 90 75 90 65C90 55 85 50 75 50C65 50 55 55 50 50Z"
        fill={color}
        opacity="0.8"
      />
      <ellipse cx="50" cy="50" rx="3" ry="15" fill={color} />
    </svg>
  )
}
