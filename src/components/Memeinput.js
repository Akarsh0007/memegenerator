import React from 'react'
import { useState,useEffect } from 'react';
import Finalimg from './Finalimg';
function Memeinput() {
   const def={
    "top-text" :"",
    "bottom-text" :"",
    "random-img" : "",
   }
  
  const [meme,setmeme]=useState(def)
  const [apidata,setapidata]=useState([])
  useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(data=>setapidata(data))   
  }, [])
  console.log(apidata)
   function getmemeimg(){
      let memes=apidata.data.memes;
      let newurl=memes[Math.floor(Math.random()*memes.length)].url
      setmeme((prevmeme)=>({
         ...prevmeme,
         "random-img" : newurl    
      }))
   }
    const handlechange = event => {
      setmeme(prevmeme =>({
        ...prevmeme,
        [event.target.name]:event.target.value
      }))
      console.log(meme)
    }

  return (
    <div className='Memeinput'>
         <div className='formcontainer'>
        <input type="text" placeholder='top text'name="top-text" onChange={handlechange}/>
        <input type="text" placeholder='bottomtext' name="bottom-text" onChange={handlechange}/>
        <button type="submit" className='memebtn' name="random-img"onClick={getmemeimg}>Get a new meme image 🖼</button>
        </div>
         <Finalimg toptext={meme['top-text']} bottomtext={meme['bottom-text']} img={meme['random-img']}/>
        
    </div>
  )
  }
export default Memeinput;