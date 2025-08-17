import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import NavBar from "./components/NavBar"
import TeamMemberSection from "./components/Teams"
import { useRef } from 'react';

const App = () => {

    const whatisstarel = useRef(null);
    const info = useRef(null);
    const teams = useRef(null);
    const waitlist = useRef(null);

  return (
    <div className="w-full h-auto overflow-x-hidden flex justify-center flex-wrap">
      <NavBar scroll={[whatisstarel, info, teams, waitlist]} />
      <Header scroll={waitlist}/>
      <Main ref={[whatisstarel, info]}/>
      <TeamMemberSection ref={teams} />
      <Contact ref={waitlist}/>
      <Footer />
    </div>
  )
}

export default App