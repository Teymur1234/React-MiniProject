import React, { useEffect, useState } from 'react'
import "./creators.css"
import axios from 'axios'
import { FaGlobe } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const CreatorsPage = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios("http://localhost:3001/users").then(response=>setUsers(response.data))
    },[])

  
    const navigate=useNavigate()
    const goCreator=(person)=>{
        navigate(`/creator/${person.id}` , {state: {member:person}})
    }
  return (
    <>
        <section className='section1-creators'>
            <div>
                <h1>Üzvlərimiz</h1>
                <button>🎉  128 Yaradıcı </button>
            </div>
            <p>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</p>
        </section>
        <section className='section2-creators'>
            <div className='search'>
                <button>Veb Dizayn</button>
                <input type="text" placeholder='Axtar...' />
            </div>
            <div className='members'>
        {users && users.map(person=>(
          <div key={person.id} className='member'>
            <img src={person.image} onClick={()=>goCreator(person)} alt="" />
            <h3>{person.name}</h3>
            <p>{person.info}</p>
            <p>{person.supporter} Dəstəkçi</p>
            <FaGlobe/>
          </div>  
        ))}
        </div>
        </section>
    </>
  )
}

export default CreatorsPage