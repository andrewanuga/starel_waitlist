import CountDown from "./CountDown"
import AwardWinningScrollAnimation from "./WhatWeOffer"

const Main = ({ref}) => {
  return (
    <div className="w-full h-auto space-y-10 bg-[#ebe9f3]">
      <AwardWinningScrollAnimation ref={ref}/>
    </div>
  )
}

export default Main