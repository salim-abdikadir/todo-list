import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header"
import { useState } from "react"
function App() {

  const [active,setActive] = useState("home");
  const handleClick = function(link){
    setActive(link);
  }
  return (
    <>
      <Header active={active} handleClick = {handleClick}/>
      <Content activePage={active}/>
      <Footer/>
    </>
  )
}

export default App
