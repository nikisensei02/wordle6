
import { useState } from "react"
import { Link } from 'react-router-dom'
import Rule from "../rules/Rule";


export default function Navbar() {
  const [showContactInfo, setShowContactInfo] = useState("hidden");
  const [showRules, setShowRules] = useState("hidden");
  const showRule = () => {
    setShowRules(prevState => prevState === "hidden" ? "block" : "hidden");
  }
  const showContact = () => {
    setShowContactInfo(prevState => prevState === "hidden" ? "block" : "hidden");
  };
  return (

    <nav className="bg-gray-800 text-white p-4 ">

      <div className="bg-gray-800 container mx-auto flex items-center justify-between">

        {/* Title */}
        <div className="bg-gray-800 text-xl font-semibold"><Link to="/" className="bg-gray-800">Wordle</Link></div>
        {/* Icons and Subscribe text */}
        <div className="bg-gray-800 flex items-center">
          <span className="material-symbols-outlined cursor-pointer hover:text-black bg-inherit" onClick={showRule}>
            help
          </span>
          <button className="ml-4 py-2 px-3 border border-white rounded hover:bg-gray-700" onClick={showContact}>contact info</button>
        </div>
      </div>
      <div className={`${showContactInfo} contact_popup border-[1px] w-[95vw] md:w-fit bg-inherit h-fit absolute md:right-0 mt-[8vh] md:mx-[4vw]`}>
        <div className="p-2 flex justify-between">
          <p>nikshepch2001@gmail.com</p>
          <button className="text-black w-[10vw] md:w-[5vw] border-[1px] rounded-full bg-slate-100  hover:bg-black"><a href="mailto:nikshepch2001@gmail.com" className="bg-slate-100 hover:text-white hover:bg-black">mail</a></button></div>
        <div className="p-2 flex justify-between">
          <p>nikisensei02@gmail.com</p>
          <button className="text-black w-[10vw] md:w-[5vw] border-[1px] rounded-full bg-slate-100  hover:bg-black"><a href="mailto:nikisensei02@gmail.com" className="bg-slate-100 hover:text-white hover:bg-black">mail</a></button></div>
        <div className="flex justify-between p-2"><p>contact:</p><p>+9188820001271</p></div>
      </div>
      <div className={`flex justify-center ${showRules} `}>
        <div className="absolute  mt-[10vh] border-[1px] bg-gray-800">
        <span className="material-symbols-outlined hover:text-gray-400 cursor-pointer p-2 bg-gray-800" onClick={showRule}>
                    close
                </span>
          <Rule />
          </div>
      </div>
    </nav>
  )
}




