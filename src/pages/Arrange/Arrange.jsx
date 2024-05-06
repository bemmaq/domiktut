import React, { useState } from "react";
import Container from "../../Helpers/Container";
import buffet from "../../assets/svg/buffet 1 (Traced).svg";
import chef from "../../assets/svg/chef (Traced).svg";
import cocktail from "../../assets/svg/cocktail 1 (Traced).svg";
import confetti from "../../assets/svg/confetti (Traced).svg";
import frama from "../../assets/svg/Frame 14 (Traced).svg";
import micraphone from "../../assets/svg/microphone (Traced).svg";
import Buttons from "./Buttons/Buttons";

const Arrange = () => {
  const [popup, setPopup] = useState(false);

  const handleClick = () => {
    setPopup(false);
  };
  return (
    <Container>
      <h2 className="text-3xl font-raleway">Можем организовать для Вас</h2>
      <div className="mt-10 bg-white ">
        <div className="flex justify-between">
          <div
            className="flex gap-3 w-[350px] h-[90px] rounded-xl"
            style={{ boxShadow: "0px 4px 80px 0px #05091614", zIndex: 1 }}
          >
            <div>
              <img className="pl-10 pt-5" src={buffet} alt="" />
            </div>
            <p className="pt-6 ">Кейтеринг</p>
          </div>

          <div
            className="flex gap-3 w-[350px] h-[90px] rounded-xl"
            style={{ boxShadow: "0px 4px 80px 0px #05091614", zIndex: 1 }}
          >
            <div>
              <img className="pl-10 pt-5" src={chef} alt="" />
            </div>
            <p className="pt-6 ">Выездной повар</p>
          </div>

          <div
            className="flex gap-3 w-[350px] h-[90px] rounded-xl"
            style={{ boxShadow: "0px 4px 80px 0px #05091614", zIndex: 1 }}
          >
            <div>
              <img className="pl-10 pt-5" src={cocktail} alt="" />
            </div>
            <p className="pt-6 ">Фуршет</p>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <div
            className="flex gap-3 w-[350px] h-[90px] rounded-xl"
            style={{ boxShadow: "0px 4px 80px 0px #05091614", zIndex: 1 }}
          >
            <div>
              <img className="pl-10 pt-5" src={confetti} alt="" />
            </div>
            <p className="pt-6 ">Шоу программа</p>
          </div>

          <div
            className="flex gap-3 w-[350px] h-[90px] rounded-xl "
            style={{ boxShadow: "0px 4px 80px 0px #05091614", zIndex: 1 }}
          >
            <div>
              <img className="pl-10 pt-5" src={frama} alt="" />
            </div>
            <p className="pt-6 ">Трансфер</p>
          </div>

          <div
            className="flex gap-3 w-[350px] h-[90px] rounded-xl "
            style={{ boxShadow: "0px 4px 80px 0px #05091614", zIndex: 1 }}
          >
            <div>
              <img className="pl-10 pt-5" src={micraphone} alt="" />
            </div>
            <p className="pt-6 ">Мероприятия под ключ</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          setPopup(!popup);
        }}
        className="w-[270px] h-[50px] rounded-3xl	 bg-orange-500  text-white mt-10 ml-[29rem] border-none "
      >
        Узнать подробнее
      </button>
      
      {popup && 
      
       <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-70 z-50">
        <p onClick={handleClick} className="ml-[60rem] mt-[7rem] text-3xl text-white cursor-pointer">X</p>
       <div className="w-[450px] h-[400px] bg-white rounded-xl shadow-lg p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        
         <Buttons />
       </div>
     </div>

     }
    </Container>
  );
};

export default Arrange;
