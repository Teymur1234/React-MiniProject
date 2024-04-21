import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";

const Navbar = () => {
  const [open,setOpen]=useState(false)
  const [showNavbar, setShowNavbar] = useState(true);
  const [higher,setHigher]= useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
  
      setHigher(currentScrollPos >= 200)
      setShowNavbar(currentScrollPos === 0 || currentScrollPos >= 200);
      setPrevScrollPos(currentScrollPos);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  return (
    <>
    <section className='nav-section' style={{ display: showNavbar ? 'flex' : 'none', position: 'fixed', top: higher ? '15px' : '0px' }} >
    <nav >  
            <img src="https://kofe.al/assets/images/logo/logo.png?v=1.0" className='logo' alt="" />
            <div className="menulinks">
                <ul>
                    <li>
                        <Link to={"/"}>Üzvlərimiz</Link>
                    </li>
                    <li>
                        <Link to={"/shop"}>Bloq</Link>
                    </li>
                    <li>
                        <Link to={"/featured"}>FAQ</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-buttons">
              <div className="language">
                <img src="https://kofe.al/assets/images/icons/az.png" alt="" /><p>Azərbaycan</p>
              </div>
              <button>Daxil ol</button>
              <div className="wrapper">
                 <Link href="#" className='qeydiyyat'><span>Qeydiyyat</span></Link>
              </div>
            </div>
            <div className="menuicon" onClick={()=>setOpen(true)}>
            <div className="vl"></div>
                <IoMenu/>
            </div>
        </nav>
    </section>
    <div className={`sidebar-menu ${open ? "open" : ""}`}>
      <div>
      <img className='logo' src="https://kofe.al/assets/images/logo/logo.png?v=1.0" alt="" />
         <IoMdClose onClick={()=> setOpen(false)}/>
      </div>
         <p>Sevdiyin işlə məşğul ol, <br /> izləyicilərdən dəstək qazan!</p>
         <div className="language1">
                   <img src="https://kofe.al/assets/images/icons/az.png" alt="" /><p>Azərbaycan</p>
          </div>
           <ul>
                    <li>
                        <Link to={"/"}>Üzvlərimiz</Link>
                    </li>
                    <hr/>
                    <li>
                        <Link to={"/shop"}>Bloq</Link>
                    </li>
                    <hr />
                    <li>
                        <Link to={"/featured"}>FAQ</Link>
                    </li>
                </ul>
               <div>
                <button>Daxil ol</button>
                <button>Qeydiyyat</button>
               </div>
               <p>BİZİ İZLƏYİN</p>
               <div>
                 <SlSocialFacebook/>
                 <IoLogoInstagram/>
               </div>
            </div>
    </>
  )
}

export default Navbar