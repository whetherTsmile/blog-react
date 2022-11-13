import Aside from "./layout/Aside"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import MainContext from "./layout/MainContext"

export const globalConfig = {
  siteName: "Blog-React",
}

function App() {
  return (
    <div className="App  h-full w-full overflow-auto">
      <Header siteName={globalConfig.siteName} />
      <div className="body m-auto max-w-[1400px] px-3 py-5 max-md:p-1">
        <div className="main flex max-[880px]:flex-col">
          <MainContext />
          <Aside />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App
