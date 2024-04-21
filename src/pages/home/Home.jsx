import React, { useEffect, useState } from 'react'
import "./home.css"
import { FaArrowRight } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import axios from 'axios';
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const words=["Kitab yaz", "Öyrədərək" ,"Danışaraq", "Video çək" ,"Rəsm çək" ,"İdman et" ]

const Home = () => {
  const [index, setIndex]=useState(0)
  const [user,setUser]=useState([])
  const [questions,setQuestions]=useState([])
  const [openedQuestionId, setOpenedQuestionId] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>prevIndex === words.length - 1 ? 0 : prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval)
  }, [words])

  useEffect(()=>{
    axios("http://localhost:3001/users").then(response=>setUser(response.data))
    axios("http://localhost:3001/questions").then(response=>setQuestions(response.data))
  },[])
  
  const navigate=useNavigate()

  const goCreators=()=>{
    navigate("/creators")
  }
  return (
    <>
      <section className='section1'>
        <div className='section1-div'>
          <p>Backed by 500 brand Global</p>
          <div>
            <h1 className='changable'>{words[index]}</h1>
            <h1>, sevdiyin işlə məşğul ol,</h1>
          </div>
            <h1>izləyicilərindən dəstək qazan!</h1>
          <div className='input-div'>
            <label htmlFor="username">kofe.al/</label>
            <input type="text" name='username' placeholder='username'/>
            <button>Yarat <FaArrowRight/> </button>
          </div>
          <h4>Yarat 🎉 Paylaş 🚀 Qazan ☕</h4>
        </div>
      </section>
      <section className='section2'>
          <div className="category"  style={{backgroundImage:'urL(https://kofe.al/storage/images/categories/web-design.jpg)'}} onClick={()=>goCreators()}>
            <h3>Veb dizayn</h3>
            <p>133 Yaradici</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/graphic-design.jpg)'}}>
            <h3>Qrafik dizayn</h3>
            <p>156 Yaradici</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/personal-development.jpg'}}>
            <h3>Şəxsi inkişaf</h3>
            <p>322 Yaradıcı</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/author.png'}}> 
            <h3>Yazıçılıq</h3>
            <p>147 Yaradıcı</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/artist.png'}}>
            <h3>İncəsənət</h3>
            <p>176 Yaradıcı</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/arts.jpg'}}>
            <h3>Blog</h3>
            <p>322 Yaradıcı</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/Sport.png'}}>
            <h3>İdman</h3>
            <p>101 Yaradıcı</p>
          </div>
          <div className="category" style={{backgroundImage:'url(https://kofe.al/storage/images/categories/musician.png'}}>
            <h3>Musiqi</h3>
            <p>98 Yaradıcı</p>
          </div>
      </section>
      <section className='section3'>
        <h3 style={{marginTop:"70px"}}>ÜZVLƏRİMİZ</h3>
        <h1>Top bəxşiş toplayanlar</h1>
        <h3 style={{color:"gray"}}>Siz də öz yaradıcılıq fəaliyyətinizdən qazanan şəxslərdən olun.</h3>
        <div className='members'>
        {user && user.map(person=>(
          <div key={person.id} className='member'>
            <img src={person.image} alt="" />
            <h3>{person.name}</h3>
            <p>{person.info}</p>
            <p>{person.supporter} Dəstəkçi</p>
            <FaGlobe/>
          </div>  
        ))}
        </div>
      </section>
      <section className='section4'>
        <img src="https://kofe.al/assets/images/splash/layout/az/1_coffee-n.png" alt="" />
        <div>
          <h3>DƏSTƏK AL</h3>
          <h1>Bəxşiş qəbul edin</h1>
          <p>Kofe.al işlərinizi bəyənən insanlardan dəstək mesajları və bəxşiş almaq <br /> üçün unikal, əyləncəli və bəsit bir metodu təqdim edir! Kofealdan bəxşiş <br /> qutusu kimi istifadə edərək, dəstəkçilərinizin məşğuliyyətinizə töhfə <br /> verməsinə imkan verə bilərsiniz.</p>
          <img src="https://kofe.al/assets/images/icons/kofe-al-types.png" alt="" />
        </div>
      </section>
      <section className='section4 section5'>
        <div>
          <h3>ONLAYN MAĞAZA</h3>
          <h1>Məhsul və Xidmətlərinizi satın</h1>
          <p>Kofe.al Mağazanızı açaraq, dərhal rəqəmsal və ya fiziki əşyalar əlavə <br /> edin. Heç bir abunə və ya aktivləşdirmə haqqı yoxdur. Sadəcə məhsul və <br /> ya xidmətlərinizi yerləşdirərək, dərhal satışa başlayın!</p>
          <h2>`Nə satmaq olar?:</h2>
          <div>
            <ul>
              <li><FaRegCheckCircle/> Fiziki məhsul</li>
              <li><FaRegCheckCircle/> Digital məhsul</li>
              <li><FaRegCheckCircle/> Affiliate məhsul</li>
            </ul>
            <ul>
              <li><FaRegCheckCircle/> Xidmət</li>
              <li><FaRegCheckCircle/> Tədbirə giriş</li>
              <li><FaRegCheckCircle/> Çap işləri</li>
            </ul>
          </div>
        </div>
        <img src="https://kofe.al/assets/images/splash/layout/az/2-shop.png" alt="" />
      </section>
      <section className='section4 section6'>
        <img src="https://kofe.al/assets/images/splash/layout/az/3-membership.png" alt="" />
        <div>
          <h3>ABUNƏLİK</h3>
          <h1>Abunəlik təklif edin</h1>
          <p>Aylıq abunəlik kanalı yaradaraq, izləyicilərinizin eksklüziv üzvlərə <br /> çevrilməsinə imkan yaradın ki, sizə hər ay müxtəlif qiymət dərəcələrində <br /> dəstək ola bilsinlər. <br />
          Rollar, eksklüziv kontent və ya fiziki əşyalar kimi unikal hədiyyələrlə <br /> üzvləri mükafatlandırın.</p>
        </div>
      </section>
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
      <section className='section8' style={{backgroundColor:"#4861FF"}}>
        <div style={{backgroundImage:"url(https://kofe.al/assets/images/splash/icons/map.png)"}}>
        <h1>Yaradıcı Şəxslər üçün unikal <br /> dəstək platforma.</h1>
        <h2>Yarat 🎉 Paylaş 🚀 Qazan ☕</h2>
        <button>Qeydiyyat</button>
        </div>
      </section>
    </>
  )
}

export default Home