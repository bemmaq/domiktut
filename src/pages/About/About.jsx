import React from 'react'
import Container from '../../Helpers/Container'
import about from '../../assets/svg/bg about.svg'
import vertor6 from '../../assets/svg/Vector (6).svg'
import icon1 from '../../assets/svg/icon_benefits_1.svg'
import icon2 from '../../assets/svg/icon_benefits_3.svg'
import icon3 from '../../assets/svg/icon_benefits_4.svg'


const About = () => {
  return (
    <>
      <div 
      className="bg-cover bg-center h-screen mt-5  mb-20"
      style={{ backgroundImage: `url(${about})` }}
      >
      <Container>
    <h2 className='text-3xl py-10'>О нас</h2>

    <div className='flex justify-between'>
      <div>
        <img src={vertor6} alt="" />
        <p className='pt-5'>Работаем с юридическими <br />  и физическими лицами</p>
      </div>

      <div>
        <img src={icon1} alt="" />
        <p className='pt-5'>Бесплатный подбор, честные <br /> консультации и открытость <br /> к сотрудничеству</p>
      </div>

      <div>
        <img src={icon2} alt="" />
        <p className='pt-5'>Работаем с 2014 года. Консультируем <br /> 30-80 человек в сутки, заселяем от 3 <br /> до 5 компаний в день. Помогли более <br /> 21 000 клиентам</p>
      </div>

      <div>
        <img src={icon3} alt="" />
        <p className='pt-5'>Средний рейтинг компании <br /> 4,5 из 5 (Avito, Google, Отзовик)</p>
      </div>
    </div>
      
    </Container>

  </div>
        </>
  )
}

export default About