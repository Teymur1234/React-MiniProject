import React, { useState } from 'react'
import "./creatorpage.css"
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { buyCoffee } from '../../Slice/coffeeSlice'
import { FaUsers } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";

const number=1
const number2=3
const number3=5

const CreatorPage = () => {
  // const {id}=useParams()
  const location=useLocation()
  const {member}=location.state
  const dispatch=useDispatch()

  const [click,setClick]=useState(true)
  const [click1,set1Click]=useState(false)
  const [click2,set2Click]=useState(false)
  
  const[bloq,setBloq]=useState(true)

  const clickedFirst=()=>{
    setClick(true)
    set1Click(false)
    set2Click(false)
    setValue(number)
  }
  const clickedSecond=()=>{
    setClick(false)
    set1Click(true)
    set2Click(false)
    setValue(number2)
  }

  const clickedThird=()=>{
    setClick(false)
    set1Click(false)
    set2Click(true)
    setValue(number3)

  }

  const [value,setValue]=useState(1)
  return (
      <>
      <section className='section1-creator'>
        <div className='creator-infos' style={{backgroundImage:"url(https://kofe.al/defaults/user-cover.jpg)"}}>
              <img src={member.image} alt="" />
              <div>
                  <h1>{member.name}</h1>
                  <h2>{member.info}</h2>
                  <p>{member.supporter} Dəstəkçi</p>
              </div>
          </div>
      </section>
      <section className='section2-creator'>
        <div className='section2-main'>
          <div className='money-part'>
            <h2 style={{color:"#788090"}}>{member.name} üçün kofe al</h2>
            <div>
              <img src="https://kofe.al/storage/images/icons_for_donations/coffee.svg" alt="" />
              <p style={{fontSize:"20px", color:"#6B7385"}}>x</p>
              <span style={{backgroundColor:click && value===number ? "#2F57EF": "white" , border: click && value===number ? "none" : "1px solid #E6E3F1", color: click && value===number ? "white" : " #E6E3F1" }} onClick={()=>clickedFirst()}>{number}</span>
              <span style={{backgroundColor:click1 && value===number2 ? "#2F57EF": "white" , border: click1 && value===number2 ? "none" : "1px solid #E6E3F1", color: click1 && value===number2 ? "white" : " #E6E3F1"}} onClick={()=>clickedSecond()}>{number2}</span>
              <span style={{backgroundColor:click2 && value===number3 ? "#2F57EF": "white" , border: click2 && value===number3 ? "none" : "1px solid #E6E3F1", color: click2 && value===number3 ? "white" : " #E6E3F1"}} onClick={()=>clickedThird()}>{number3}</span>
              <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <input type="email" placeholder='Email'/>
            <input type="text"  placeholder='Mesaj...'/>
            <button className='kofeal'>{value} AZN kofe al</button>
          </div>
          <div className='about-part'>
            <div>
            <button style={{borderBottom: bloq ? "1px solid #3F64F0" : "1 px solid black", color: bloq ? "#3F64F0" : "black"}} onClick={()=>setBloq(true)}>Haqqimda</button>
            <button style={{borderBottom: bloq ? "1px solid black" : "1px solid #3F64F0", color: bloq ? "black" : "#3F64F0"}} onClick={()=>setBloq(false)}>Bloq</button>
            </div>
            <div className='member-name' style={{display:bloq? "flex":"none"}}>
              <h3>{member.name}</h3>
              <div>
                <img src="https://kofe.al/storage/images/icons_for_donations/coffee.svg" alt="" /> 
                <p>601 kofe</p>
              </div>
              <div>
                <FaUsers/>
                <p>70 FaUsers</p>
              </div>
              <div>
                <FaBook/>
                <p>0 Bloq</p>
              </div>
            </div>
              <p style={{display:bloq? "block":"none"}}>{member.info}</p>
              <p style={{display:bloq? "block":"none"}}>4 Ilden Coxdur Ki Azerbaycanda Mobil Oyun Yayınçısıyam</p>
          </div>
          <div style={{display: bloq ? "none": "inline-block"}}>
            <h2 style={{display:"block",position:"relative", top:"70px", backgroundColor:"#FFF3CD"}}>Məlumat yoxdur</h2>
          </div>
        </div>
      </section>
      </>
  )
}

export default CreatorPage