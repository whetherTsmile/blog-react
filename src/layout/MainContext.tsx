import Carousel from "../components/carousel/Carousel"
import lq from "../assets/lq.jpg"
import CategoryBar from "../components/categoryBar/CategoryBar"

const data = [
  { id: 0, src: lq, content: "123123213123" },
  { id: 1, src: lq, content: "22323232" },
  { id: 2, src: lq, content: "dfhajfhjka" },
]
const MainContext = () => {
  return (
    <div className="main-left flex flex-1 flex-col">
      <Carousel lists={data} />
      <CategoryBar />
    </div>
  )
}

export default MainContext
