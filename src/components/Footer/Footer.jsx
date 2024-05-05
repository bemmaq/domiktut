import React from "react";
import bg from "../../assets/svg/bg_photo.svg";
import Container from "../../Helpers/Container";
import logo from "../../assets/svg/logo_light.svg";
import tele from "../../assets/svg/telegram (Traced).svg";
import youtube from "../../assets/svg/logo_youtube.svg";
import vk from "../../assets/svg/logo_vk.svg";
import whatsapp from "../../assets/svg/whatsapp (Traced).svg";
import logoIns from "../../assets/svg/logo_instagram.svg";
import vertor from "../../assets/svg/Vector (5).svg";
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
      <div
        style={{
          background: "linear-gradient(180deg, #161723 0%, #161723 109.24%)",
          height: "400px",
        }}
      >
        <Container>
          <div className="flex justify-between pt-20">
            <div>
              <img src={logo} alt="" />
              <p className="pt-[140px]" style={{ color: "#404256" }}>
                Политика конфиденциальности
              </p>
              <p style={{ color: "#404256" }}>
                Согласие на обработку персональных данных
              </p>
            </div>

            <div className="text-white">
              <p className="text-2xl">Каталог</p>
              <p className="pt-10">С бассейном</p>
              <p className="pt-2">Семейные и уютные</p>
              <p className="pt-2">Хиты продаж</p>
              <p className="pt-2">Под свадьбы и корпоративы</p>
              <p className="pt-2">С русской баней на дровах</p>
            </div>

            <div className="text-white">
              <p>Сотрудничество</p>
              <p className="pt-2">Частые вопросы</p>
            </div>

            <div>
              <div className="text-white flex gap-4">
                <img className="pt-1" src={vertor} alt="" />
                <a href="tel:8 (843) 528-65-48">
                  <p>8 (843) 528-65-48</p>
                </a>
              </div>
              <div className="pt-[180px] flex gap-3">
                <a href="https://www.google.com/search?q=youtube.com&sca_esv=e8f1cfb632bd06ad&sxsrf=ADLYWIJj2B3yHa764NOKCyeQWsI5VI9c6w%3A1714889111907&ei=lyE3ZsSLN9e8wPAPrsOjoA8&udm=&ved=0ahUKEwiEs-Di6_WFAxVXHhAIHa7hCPQQ4dUDCBA&uact=5&oq=youtube.com&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3lvdXR1YmUuY29tMgkQABiwAxgHGB4yDhAAGIAEGLADGLEDGIMBMggQABiABBiwAzIOEAAYgAQYsAMYsQMYgwEyCxAAGIAEGLADGLEDMgkQABiwAxgHGB4yCBAAGIAEGLADMggQABiABBiwAzIIEAAYgAQYsAMyCBAAGIAEGLADSNiuAVAAWABwAXgAkAEAmAEAoAEAqgEAuAEDyAEAmAIBoAIOmAMAiAYBkAYKkgcBMaAHAA&sclient=gws-wiz-serp">
                  <img src={youtube} alt="" />
                </a>

                <a href="https://wa.me/79600476911?text=">
                  <img src={whatsapp} alt="" />
                </a>
                <a className="pt-1" href="https://t.me/barlevigor">
                  <img src={tele} alt="" />
                </a>
                <a href="https://www.instagram.com/">
                  <img src={logoIns} alt="" />
                </a>
                <a className="pt-1" href="https://vk.com/feed">
                  <img src={vk} alt="" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
