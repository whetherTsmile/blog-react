import { FaChevronDown } from "react-icons/fa"
import MenuItem from "../components/MenuItem"
import { MenuSettings } from "../components/MenuSettings"

const Header = ({ siteName }: { siteName: string }) => {
  return (
    <header className="show-page relative h-screen text-2xl">
      <nav className="nav fixed  flex h-16 w-full items-center px-10 filter">
        <span className="blog-name flex h-12 flex-1 items-center">
          {siteName}🥝
        </span>
        <div className="menus">
          <div className="menus-items absolute left-1/2 inline w-fit -translate-x-1/2 max-md:hidden ">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <MenuSettings />
        </div>
      </nav>
      <div className="site-info absolute top-2/4 w-full text-center text-7xl">
        info
      </div>
      <div className="scroll-down absolute bottom-0 w-full text-center  text-4xl">
        <FaChevronDown className="inline" />
      </div>
    </header>
  )
}

export default Header
