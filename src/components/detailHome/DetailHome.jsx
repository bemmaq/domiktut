import React from "react";
import group from '../../assets/group.svg'

import Swipers from "../Swiper/Swipers";

const DetailHome = () => {
  return (
    <div className="flex gap-[290px]">
      <div className="text-white pt-[9rem]">
        <p className="text-6xl font-semibold pl-[105px] leading-snug">
          Аренда коттеджей <br />
          и домов в Бишкеке
        </p>
        <p className="pl-[105px] text-xl pt-6">
          Найдите идеальный вариант сами <br />
          или предоставьте это нам
        </p> 
      </div>
      <div className="pl-8 pt-[10rem]">
        <div className="mt-16 w-80 h-96 border-2 rounded-xl bg-white">
          <div className="ml-12 mt-6">
            <div className="flex gap-24 pl-5">
              <p>Въезд</p>
              <p>Отъезд</p>
            </div>
            <div className="flex border-2 w-56 rounded-xl h-12 items-center mt-4">
              <input
                className="w-24 rounded-xl pl-2 outline-none"
                type="text"
                placeholder="от"
              />
              <span className="w-px h-8 border-2 "></span>
              <input
                className="w-24 rounded-xl pl-2 outline-none"
                type="text"
                placeholder="до"
              />
            </div>
            <div className="mt-4">
              <p>Количество человек</p>
              <input
                className="border-2 w-56 rounded-xl h-12 pl-2 outline-none"
                type="text"
                placeholder="12"
              />
            </div>
         <div className="w-[220px] mt-[30px]">
          <img src={group} alt="" />
         </div>
         <div className="mt-[30px]">
          <button className="border-2 w-[220px] rounded-3xl h-[40px] bg-orange-600 text-white">Найти</button>
         </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHome;
