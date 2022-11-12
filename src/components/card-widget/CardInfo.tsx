import { globalConfig } from "../../App"
import avatar from "../../assets/avatar.jpg"
import CardWrapper from "../CardWrapper"
const CardInfo = () => {
  return (
    <CardWrapper
      p={8}
      style={{
        background:
          "linear-gradient(-45deg,#e8d8b9,#eccec5,#a3e9eb,#bdbdf0,#eec1ea)",
      }}>
      <div className="  text-center ">
        <SiteInfoHead />
        <SiteInfoData />
        <div className="mt-2 rounded-xl bg-[#3eb8be] p-1 shadow-md">
          前往小家
        </div>
      </div>
    </CardWrapper>
  )
}

const SiteInfoHead = () => {
  return (
    <div className="site-info-head">
      <div className="site-avatar ">
        <img
          src={avatar}
          className="m-auto h-28 w-28 rounded-full object-cover object-center duration-300 hover:rotate-[360deg]"
        />
      </div>
      <div className="site-name mt-2">{globalConfig.siteName}</div>
      <div>Future is now &&& 🍭</div>
    </div>
  )
}

const SiteInfoData = () => {
  return (
    <div className="site-info-data mt-3  mb-1 table w-full">
      <a className="table-cell">
        <div>文章</div>
        <div>35</div>
      </a>
      <a className="table-cell">
        <div>标签</div>
        <div>41</div>
      </a>
      <a className="table-cell">
        <div>分类</div>
        <div>6</div>
      </a>
    </div>
  )
}

export default CardInfo
