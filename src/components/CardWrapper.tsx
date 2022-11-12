import { ReactNode } from "react"

const CardWrapper = ({
  children,
  style,
  p = 0,
}: {
  children: ReactNode
  style?: object
  p?: number
}) => {
  return (
    <div
      className={
        " mt-5   rounded-2xl bg-slate-200  bg-opacity-95  text-black  "
      }
      style={{ ...style, padding: 4 * p }}>
      {children}
    </div>
  )
}

export default CardWrapper
