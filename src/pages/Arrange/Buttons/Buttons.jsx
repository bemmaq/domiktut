import React, { useState } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Buttons = () => {
  const [click, setClick] = useState(false);

  return (
    <div>
      <h2 className='text-3xl text-center'>Повар - Кейтеринг</h2>
      <p className='text-xl text-center pt-5'>Мы можем предложить выездного</p>
      <p className='text-xl text-center'>повара или организацию</p>
      <p className='text-xl text-center'>полноценного банкета на ваше</p>
      <p className='text-xl text-center'>мероприятие.</p>
      <p className='text-xl text-center'>Напишите нашему специалисту</p>
      <p className='text-xl text-center'>напрямую. Он рассчитает стоимость</p>
      <p className='text-xl text-center'>и проконсультирует Вас по всем</p>
      <p className='text-xl text-center'>вопросам.</p>
      {!click ? (
        <button
          onClick={() => {
            setClick(true);
          }}
          className='text-xl border-2 w-[300px] mt-[30px] ml-[50px] h-[50px] rounded-3xl pb-1'>
          Написать
        </button>
      ) : (
        <div className='flex justify-around border-2 w-[300px] mt-[30px] ml-[50px] h-[50px] rounded-3xl pb-1 pt-2'>
         <a href="https://t.me/barlevigor"><FaTelegramPlane style={{ fontSize: "35px", color:"orange" }}/></a>
          
          <a href="https://wa.me/79600476911?text="> <IoLogoWhatsapp style={{ fontSize: "35px",color:"orange" }}/></a>
         
        </div>
      )}
    </div>
  );
};

export default Buttons;
