
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Cards = ({data}) => {
 const {background , name ,profileImage , profession , description} = data
 console.log(background)
  return (
   <> 
  
    
    <div  className="w-[350px] ">
    <div className="rounded-xl">
      <img className="w-full  h-32 object-cover" src={background} alt="" />
    </div>
    <div>
      <img className="w-[90px] h-[90px] border-2 rounded-full mt-[-20px] mx-auto " src={profileImage} alt="" />
    </div>
    <div>
      <h1 className="text-center mt-6">{name}</h1>
      <p  className="text-center  mt-6">{profession}</p>
      <p  className="text-center  mt-6">{description}</p>
    </div>
    <div className="w-[200px] m-auto h-10 flex justify-around items-center mt-6 mb-6 text-2xl">
      <FaFacebook/>
      <FaLinkedin/>
      <FaInstagramSquare/>
      <FaYoutube/>
      <FaTwitterSquare/>
    </div>
   
    <div className="flex justify-center">
      <button className="w-56 h-10 bg-blue-600 rounded-lg text-white">View Profile</button>
    </div>
   </div>
    
 
          
    
 
   </>
  )
}

export default Cards


