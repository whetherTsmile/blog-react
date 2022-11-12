import { useState } from "react"
import { BiAddToQueue } from "react-icons/bi"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./index.scss"

const MenuItem = () => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div
      onMouseMove={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="menus-item relative inline-block px-2 text-lg">
      <div className="inline-block">
        <BiAddToQueue />
        <span>社交</span>
        <span className="p-1">
          {!isHover ? <FaChevronDown /> : <FaChevronUp />}
        </span>
      </div>
      <ul className="absolute mt-9 hidden p-0">
        <li>123</li>
        <li>123</li>
        <li>123</li>
        <li>123</li>
      </ul>
    </div>
  )
}

export default MenuItem
