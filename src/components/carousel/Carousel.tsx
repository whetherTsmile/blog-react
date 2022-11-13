import { ReactNode, useState } from "react"
import CardWrapper from "../CardWrapper"

type listType = {
  id: number
  src: string
  content: string
}
type CarouselProps = {
  lists: Array<listType>
}

const Carousel = ({ lists }: CarouselProps) => {
  const [selectId, setSelectId] = useState(0)
  const list = lists[selectId]

  const buttonActive = (exp: boolean) => {
    const s =
      " m-2 block h-3 w-3 cursor-pointer rounded-xl bg-gray-500 opacity-40 transition-all duration-300 "

    if (!exp) return s
    else
      return s.concat(
        " vs:h-8 max-vs:w-8 bg-emerald-400 opacity-100 filter-none "
      )
  }

  const switchButton = (
    <div className=" flex flex-col max-vs:mt-5 max-vs:flex-row">
      {lists.map((v) => (
        <span
          key={v.id}
          onClick={() => setSelectId(v.id)}
          className={buttonActive(v.id === selectId)}></span>
      ))}
    </div>
  )
  return (
    <CardWrapper p={4}>
      <div className=" flex  max-vs:flex-col max-vs:p-6 ">
        <DisPlayContent list={list}>{switchButton}</DisPlayContent>
      </div>
    </CardWrapper>
  )
}

const DisPlayContent = ({
  list,
  children,
}: {
  list: listType
  children?: ReactNode
}) => {
  return (
    <>
      <div className="coverImage relative h-60 w-60  max-vs:w-full ">
        <img
          className="h-full w-full rounded-3xl object-cover "
          src={list.src}
        />
      </div>
      <div className="flex flex-1 items-center max-vs:flex-col-reverse">
        <div className="content flex-1 px-12">{list.content}</div>
        {children}
      </div>
    </>
  )
}

export default Carousel
