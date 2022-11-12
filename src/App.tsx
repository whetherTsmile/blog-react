import Aside from "./layout/Aside"
import Header from "./layout/Header"
import MainContext from "./layout/MainContext"

export const globalConfig = {
  siteName: "Blog-React",
}

function App() {
  return (
    <div className="App  h-full w-full overflow-auto">
      <Header siteName={globalConfig.siteName} />
      <div className="body m-auto max-w-[1400px] px-10 py-5 max-sm:p-1">
        <div className="main flex max-lg:flex-col">
          <MainContext />
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default App
