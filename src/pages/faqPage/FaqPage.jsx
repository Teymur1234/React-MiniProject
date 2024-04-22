import React, { useEffect, useState } from 'react'
import "./faq.css"
import axios from 'axios';


const FaqPage = () => {

  const [questions,setQuestions]=useState([])
  const [openedQuestionId, setOpenedQuestionId] = useState(null);

  useEffect(()=>{
    axios("http://localhost:3001/questions").then(response=>setQuestions(response.data))
  },[])
  

  return (
    <>
     <section className='section7'>
        <h4>FAQ</h4>
        <h1>Sizi Maraqlandıran Suallara Cavablar</h1>
        <div className='questions'>
          {questions && questions.map(question => (
            <div key={question.id} style={{padding:"10px"}} className='question'>
              <div>
                <h2 style={{color: openedQuestionId===question.id ? "#2F57EF" : "black"}}>{question.question}</h2>
                {openedQuestionId === question.id ? (
                  <button style={{color:"#2F57EF"}} onClick={() => setOpenedQuestionId(null)}>-</button>
                ) : (
                  <button onClick={() => setOpenedQuestionId(question.id)}>+</button>
                )}
              </div>
              <div style={{ display: openedQuestionId === question.id ? 'block' : 'none',borderTop:"1px solid gray" }}>
                {question.answer}
              </div>  
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default FaqPage