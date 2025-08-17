import HeaderContent from "./HeaderContent"
import SparklesBackground from "./SparklesBackground"

type scrolls = {
  scroll: HTMLDivElement | null
}

interface HeaderProps {
  scroll: scrolls
}

const Header = ({scroll}: HeaderProps) => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-[#121212] flex flex-wrap justify-center">
      <div className="w-full h-auto" style={{ width: '100vw', height: '100vh' }}>
        <div className="w-full h-screen absolute top-20 right-0 z-50 flex items-center justify-center">
          <HeaderContent scroll={scroll}/>
        </div>
        <SparklesBackground 
          color="#ffffff" 
          count={150}
          speed={3}
          className="absolute z-0 inset-0 top-0 left-0"
        />
      </div>
    </div>
  )
}

export default Header