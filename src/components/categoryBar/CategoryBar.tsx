import CardWrapper from "../CardWrapper"
import lq from "../../assets/lq.jpg"
import { MdOutlineLibraryBooks } from "react-icons/md"

const CategoryBar = () => {
  return (
    <CardWrapper p={2}>
      <div className="h-48 overflow-auto">
        <ul className="grid grid-cols-4 gap-2  max-sm:grid-cols-2">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </div>
    </CardWrapper>
  )
}

const CategoryItem = () => {
  return (
    <li
      className="group/title relative inline-block h-48 overflow-hidden rounded-lg bg-cover bg-center  p-4 text-white"
      style={{ backgroundImage: `url(${lq})` }}>
      <span className="group/category underline decoration-white decoration-solid decoration-1">
        |Category
        <div className=" category mt-1 h-1 w-0 rounded-xl bg-white group-hover/category:w-full group-hover/category:transition-[width] group-hover/category:duration-500"></div>
      </span>
      <span className="count block">
        <MdOutlineLibraryBooks className="mr-4" />
        count
      </span>
      <span className="title absolute left-full block group-hover/title:left-4 group-hover/title:transition-[left] group-hover/title:duration-500">
        title
      </span>
    </li>
  )
}

export default CategoryBar
