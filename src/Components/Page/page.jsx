import React from 'react'
import Cards from '../Cards/Cards.jsx'
import { UserData } from '../../constant/utlis/app.js'

const Page = () => {
  return (
    <>
    
     <div className="flex flex-wrap gap-10">
     {
       UserData.map((item)=>{
        return(
       <Cards  data={item} />
        )
        
       })
    }
     </div>
    
    </>
  )
}

export default Page