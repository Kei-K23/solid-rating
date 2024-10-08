interface StarProps {
  filled: boolean
  halfFilled: boolean
  onMouseMove: (event: MouseEvent) => void
  onMouseLeave: () => void
  onClick: () => void
  size?: number
  color?: string
  readOnly?: boolean
  activeColor?: string
  customIcon?: string
}

export default function Star(props: StarProps) {
  return <div></div>
}
