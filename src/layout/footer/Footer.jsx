import React from 'react'
import "./footer.css"
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footparts">
          <img src="https://kofe.al/assets/images/logo/logo.png?v=1.0" className='logo' alt="" />
          <p>Biz hər zaman istedadlı və yaradıcı insanların <br /> axtarışındayıq. Özünüzü tanıtmaqdan çəkinməyin!</p>
          <div>
            <div>
            <SlSocialFacebook/>
            </div>
            <div>
            <IoLogoInstagram/>
            </div>
            
          </div>
        </div>
        <div className="footparts">
          <h3>Xüsusiyyətlər</h3>
          <ul>
            <li>Destek</li>
            <li>Abunəlik</li>
            <li>Mağaza</li>
            <li>QR kodlar</li>
            <li>Patreon Alternativi</li>
          </ul>
        </div>
        <div className="footparts">
          <h3>İnteqrasiyalar</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Telegram</li>
            <li>Wordpress</li>
          </ul>
        </div>
        <div className="footparts">
          <h3>Kofeal</h3>
          <ul>
            <li>Haqqımızda</li>
            <li>Qaydalar</li>
            <li>Məxfilik</li>
          </ul>
        </div>
      </footer>
      <div className='foot-last'>
        <p>Copyright © 2024 BONPARA layihəsi. Bütün hüquqlar qorunur.</p>
      </div>
    </>
  )
}

export default Footer