import { useState } from "react"

 

const File = () => {

         const [price,setPrice]=useState(2);

         const increasehande=()=>{
            const newPrice=price+1;
            setPrice(newPrice)
         }

         const decreasehandle=()=>{
            const newPrice=price-1;
            setPrice(newPrice);
         }



  return (
     <>
        <div>
            <h1>Price:{price}</h1>
            <button onClick={increasehande} className="bg-amber-200 py-0.5 px-1 ">increasebtn</button> &nbsp; &nbsp;
            <button onClick={decreasehandle} className="bg-amber-300 py-0.5 px-1">decreasebtn</button>
        </div>
     </>
  )
}

export default File