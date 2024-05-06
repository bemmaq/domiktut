import React from "react";
import insta from "../../assets/insta.svg";
import tel from "../../assets/telegram .svg";
import iut from "../../assets/youtube.svg";
import wk from "../../assets/vk.svg";
import wat from "../../assets/whatsapp.svg";
import { Link } from "react-router-dom";

const IconsHome = () => {
  return (
    
<>
<div className="flex gap-[20px] pl-[105px] pt-[50px] items-center">
      <Link to={'https://www.youtube.com/'}>
        <img src={iut} alt="" />
      </Link>
      <Link to={'https://www.instagram.com/'}>
        <img src={insta} alt="" />
      </Link>
      <Link to={'https://vk.com/'}>
        <img src={wk} alt="" />
      </Link>
      <Link to={'https://wa.me/79600476911?text='}>
        <img src={wat} alt="" />
      </Link>
      <Link to={'https://t.me/barlevigor'}>
        <img src={tel} alt="" />
      </Link>
    </div>
</>
  );
};

export default IconsHome;
