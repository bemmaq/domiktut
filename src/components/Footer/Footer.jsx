


const Footer = () => {
  return (
	
			<div>Footer</div>
		
	)
}

import React from "react";
import bg from "../../assets/svg/bg_photo.svg";


import Footer2 from "../Footer2/Footer2";
const Footer = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen mt-60"
        style={{
          backgroundImage: `url(${bg})`,
          height: "100vh",
        }}
      >
        <h2 className="text-white text-3xl pl-60 pt-60">Хотите сдать дом?</h2>
        <p className="text-white  pl-60 pt-5">
          Оставьте заявку и мы свяжемся <br /> с вами для уточнения деталей
        </p>
        <button className="text-white ml-60 w-[220px] h-[50px] mt-10 rounded-3xl bg-orange-500 border-none">
          Оставить заявку
        </button>
      </div>
    
    </>
  );
};


export default Footer;
