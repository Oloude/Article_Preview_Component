import Image from "./Image"
import avatar from '../assets/avatar-michelle.jpg'
import shareIcon from '../assets/icon-share.svg'
import Share from "./Share"
import { useState } from "react"

 

function Article() {

   const [toggleShare, setToggleShare] = useState(false)

 function  handleToggle(){
    setToggleShare(prev => !prev)
   }


  return (
    <section className="rounded-2xl   max-w-4xl mx-auto bg-white flex flex-col relative lg:flex-row">
        <Image/>
        <div className="p-6 flex flex-col lg:basis-2/3 lg:justify-center">
        <div className="flex flex-col gap-3 mb-12">
            <h1 className="text-xl font-semibold text-darkBlue ">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p className="text-sm text-desaturatedBlue font-medium"> Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete. </p>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <div className="flex gap-3 items-center">
            <img src={avatar} alt=""  className="w-12 h-12 rounded-full"/>
            <div>
                <h3 className="text-base font-semibold text-darkBlue ">Michelle Appleton  </h3>
                <p className="text-sm text-desaturatedBlue  ">28 Jun 2020</p>
            </div>
          </div>
          <div onClick={handleToggle} className="w-10 h-10 rounded-full flex justify-center items-center z-40 relative bg-lightBlue">
            <img src={shareIcon} alt="" />
          </div>
        </div>
        </div>
       {toggleShare && <Share/>}
    </section>
  )
}

export default Article