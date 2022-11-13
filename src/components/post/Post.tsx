import CardWrapper from "../CardWrapper"
import avatar from "../../assets/avatar.jpg"

const Post = () => {
  return (
    <CardWrapper>
      <div className="h-60 w-full overflow-hidden rounded-t-2xl  ">
        <img
          src={avatar}
          className="h-full w-full transition-all duration-300 hover:origin-center hover:scale-110 "
        />
      </div>
      <div className=" mx-12 py-2 text-left max-md:mx-5">
        <h3 className=" title truncate ">title</h3>
        <div className="function break-words">ccontent</div>
        <div>123</div>
      </div>
    </CardWrapper>
  )
}

export default Post
