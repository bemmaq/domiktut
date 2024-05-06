import React, { useState } from 'react'
import { FaCircleArrowLeft } from "react-icons/fa6";
import Container from '../../Helpers/Container';
import { Link } from 'react-router-dom';

const Housing = () => {
  
  return (
    <>
    <div className='ml-5 mt-5 my-8 flex justify-between'>

    <div >
      <Link to={'/'}>
      
    <FaCircleArrowLeft style={{fontSize:"25px"}}/>
          </Link>
        </div>
      <p className='pr-10 cursor-pointer' style={{color:"orange"}}>Сбросить Фильтры</p>
      </div>
      <hr />

      <Container>
        <div className='mt-5 flex justify-between'>
          <div>
            <h2 className='text-3xl'>Количество человек</h2>

            <div className='border-2 w-[230px] rounded-xl pl-4 mt-6'>
            <input className='outline-none' type="number" placeholder='Количество человек...' />

            </div>

            <div className='mt-40'>
              <h2 className='text-3xl'>Спальни и спальные места</h2>
              <p className=' mt-6'>Количество спален</p>
              <input className='outline-none border-2 w-[230px] rounded-xl pl-4 mt-2' type="number" placeholder='Количество человек...' />
            </div>

            <div>
            <p className=' mt-6'>Количество спальных мест</p>
              <input className='outline-none border-2 w-[230px] rounded-xl pl-4 mt-2' type="number" placeholder='Количество человек...' />
            </div>

            <div className='mt-20'>
              <h2 className='text-3xl'>Удобства</h2>
              <div className='flex gap-3 mt-6'>
                <input type="checkbox" />
            <p>Wi-Fi
</p>
              </div>


            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Джакузи</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Камин</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Детская лощадка</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Спортивная площадка</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Покерный стол</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Закрытая парковка</p>
              </div>


            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Сцена для артистов</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Игровая приставка</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Бассейн с подогревом</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Близость к водоему</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Беседка</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Японское фурако (чан)</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Караоке</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
            <p>Место для выездной регистрации
</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
            <p>Профессиональная кухня (подходит для кейтеринга)
</p>
              </div>

            <div className='flex gap-3'>
                <input type="checkbox" />
            <p>Световое и музыкальное оборудование
</p>
              </div>


              
            </div>


          </div>

          <div>
            <h2 className='text-3xl'>Бассейн</h2>
            <div className='flex gap-3 mt-6'>
              <input type="checkbox" />
              <p>Летний</p>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" />
              <p>Внутренний</p>
            </div>
            <div className='flex gap-3'>
              <input type="checkbox" />
              <p>Купель</p>
            </div>

            <div className='mt-[120px]'>
              <h2 className='text-3xl'>Развлечения</h2>

              <div className='flex gap-3 mt-6'>
                <input type="checkbox" />
                <p>Сауна или баня (без веников)</p>
              </div>

            <div className='flex gap-3 '>
                <input type="checkbox" />
                <p>Русская баня на дровах</p>
              </div>

            <div className='flex gap-3 '>
                <input type="checkbox" />
                <p>Хаммам</p>
              </div>

            <div className='flex gap-3 '>
                <input type="checkbox" />
                <p>Бильярд</p>
              </div>

            <div className='flex gap-3 '>
                <input type="checkbox" />
                <p>Настольный теннис</p>
              </div>
            </div>


            <div className='mt-[98px]'>
              <h2 className='text-3xl'>Расположение</h2>
              <div className='flex gap-3 mt-6'>
                <input type="checkbox" />
                <p>В городе</p>
              </div>
              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>За городом
</p>
              </div>
            </div>


            <div className='mt-10'>
              <h2 className='text-3xl'>Тип жилья</h2>

              <div className='flex gap-3 mt-6'>
                <input type="checkbox" />
                <p>Уникальное жилье

</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Деревянный/Шале

</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Вилла
</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Таунхаус

</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>За городом
</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Лофт

</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-3xl'>Период заезда</h2>
            <div className='mt-6 outline-none border-2 w-[160px] rounded-xl pl-4 '>
              <select className='outline-none '>
                <option className='mt-20' value="">Будни</option>
                <option value="">Понедельник</option>
                <option value="">Вторник</option>
                <option value="">Среда</option>
                <option value="">Четверг</option>
                <option value="">Пятница</option>
                <option value="">Cуббота</option>
                <option value="">Воскресенье</option>
              </select>
            </div>


            <div className='mt-[28rem]'>
              <h2 className='text-3xl'>Условия</h2>

              <div className='flex gap-3 mt-6'>
                <input type="checkbox" />
                <p>Все включено (нет обязательных дополнительных плат)
</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Сдается на одни сутки в выходные

</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Разрешено курение кальяна в доме

</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Разрешены вечеринки

</p>
              </div>

              <div className='flex gap-3'>
                <input type="checkbox" />
                <p>Можно парится вениками

</p>
              </div>
            </div>
          </div>

        </div>

        <button className=" w-[250px] h-[50px] rounded-3xl bg-orange-500 text-white mt-10 ml-[29rem] border-none">Показать варианты</button>

      </Container>
    </>
  )
}

export default Housing