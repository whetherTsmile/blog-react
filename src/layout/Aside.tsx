import CardInfo from "../components/card-widget/CardInfo"

const Aside = () => {
  return (
    <div className="main-right aside grow-1 max-[880px]:w-full relative w-[300px] shrink-0 pl-4 max-[880px]:pl-0 ">
      <CardInfo />
      <CardInfo />
      <div className="sticky top-7">
        <CardInfo />
        <CardInfo />
        <CardInfo />
      </div>
    </div>
  )
}

export default Aside
