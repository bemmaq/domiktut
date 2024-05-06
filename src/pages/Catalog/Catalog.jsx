import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Catalog.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "../../Helpers/Container";
import iconsFilter from "../../assets/svg/Frame.svg";
import iconsStrelka from "../../assets/svg/arrow down.svg";
import iconsfavourite from "../../assets/svg/Vector.svg";
import iconsfavourite2 from "../../assets/svg/icon_favourite.svg";
import iconsUsers from "../../assets/svg/Vector (4).svg";
import icon1 from "../../assets/svg/bed (Traced).svg";
import icon2 from "../../assets/svg/icon_entertainment.svg";
import icon3 from "../../assets/svg/icon_waterpool.svg";
import icon4 from "../../assets/svg/Vector 6 (Stroke).svg";
import iconRectange from "../../assets/svg/Rectangle 10.svg";
import iconTop from "../../assets/svg/arrow right.svg";
import iconplus from "../../assets/svg/icon_plus.svg"
import iconminus from "../../assets/svg/icon_minus.svg"


import { Parallax, Pagination, Navigation } from "swiper/modules";
import { getCard } from "../../store/slice/cardSlice";

const Catalog = () => {
  const { dataCard } = useSelector((state) => state.card);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCard());
  }, []);

  // console.log(dataCard);

  const [popup, Setpopup] = useState(false);
  const [popup2, Setpopup2] = useState(false);
  const [popup3, Setpopup3] = useState(false);
  const [popup4, Setpopup4] = useState(false);

  const [isvpop, setIsvpop] = useState(false);
  const [bgColor, setBgColor] = useState("#FFFFFF80");
  const [isRed, setIsRed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleFavouriteClick = (id) => {
    console.log(id);
    setIsActive(!isActive);
    if (isRed) {
      setBgColor("#FFFFFF80");
    } else {
      setBgColor("white");
    }
    setIsRed(!isRed);
  };

  const clickDiv = (e) => {
    let authDiv = e.target.closest("#test");

    if (!authDiv) {
      return Setpopup(!popup);
    }

    if (authDiv.classList.value === styles.auth) {
    }
  };

  const clickDiv2 = (e) => {
    let authDiv2 = e.target.closest("#test2");

    if (!authDiv2) {
      return setIsvpop(!isvpop);
    }

    if (authDiv2.classList.value === styles.auth) {
    }
  };
  const clickDiv3 = (e) => {
    let authDiv2 = e.target.closest("#test3");

    if (!authDiv2) {
      return Setpopup2(!popup2);
    }

    if (authDiv2.classList.value === styles.auth) {
    }
  };
  const clickDiv4 = (e) => {
    let authDiv2 = e.target.closest("#test4");

    if (!authDiv2) {
      return Setpopup3(!popup3);
    }

    if (authDiv2.classList.value === styles.auth) {
    }
  };
  const clickDiv5 = (e) => {
    let authDiv2 = e.target.closest("#test4");

    if (!authDiv2) {
      return Setpopup4(!popup4);
    }

    if (authDiv2.classList.value === styles.auth) {
    }
  };

  return (
    <Container>
      <div className="Catalog-header">
        <div className="Catalog-header-price">
          <button
            onClick={() => {
              Setpopup(!popup);
            }}
          >
            <span>Цена</span>
            <img width={30} src={popup ? iconTop : iconsStrelka} alt="" />
          </button>
          {popup && (
            <div className="overlay" onClick={(e) => clickDiv(e)}>
              <div className="popup" id="test">
                <hr />
                <img
                  src={iconRectange}
                  style={{ marginTop: "-13px", marginLeft: "46px" }}
                  alt=""
                />
                <p style={{ display: "flex", justifyContent: "end" }}>
                  <img
                    src={iconRectange}
                    style={{ marginTop: "-22.3px" }}
                    alt=""
                  />
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2
                    style={{
                      marginTop: "7px",
                      marginLeft: "22px",
                      color: "#444444",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    13 253 ₽
                  </h2>
                  <h2
                    style={{
                      textAlign: "end",
                      marginTop: "7px",
                      color: "#444444",
                      fontSize: "16px",
                      fontWeight: "600",
                      marginRight: "-24px",
                    }}
                  >
                    150 000 ₽
                  </h2>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#727488",
                      }}
                    >
                      мин. цена
                    </p>
                    <button
                      style={{
                        border: " 1px solid #C0C2D7",
                        borderRadius: "200px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333333",
                        padding: "7px 20px 9px 20px",
                        marginTop: "10px",
                      }}
                    >
                      13 253 ₽
                    </button>
                  </div>

                  <div>
                    <p
                      style={{
                        fontWeight: "600",
                        textAlign: "center",
                        fontSize: "14px",
                        color: "#727488",
                      }}
                    >
                      макс. цена
                    </p>
                    <button
                      style={{
                        border: " 1px solid #C0C2D7",
                        borderRadius: "200px",
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#333333",
                        padding: "7px 27px 9px 20px",
                        marginTop: "10px",
                      }}
                    >
                      150 000 ₽
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                    alignItems: "center",
                    marginLeft: "4px",
                  }}
                >
                  <div>
                    <h2
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#727488",
                      }}
                    >
                      Сбросить
                    </h2>

                    <hr style={{ width: "72px" }} />
                  </div>
                  <div>
                    <button
                      style={{
                        padding: "10px 37px",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: "600",
                        background: "#F4683F",
                        borderRadius: "200px",
                      }}
                    >
                      Найти
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="Catalog-header-input-all">
            <div className="Catalog-header-input">
              <input
                style={{ width: "100px", marginLeft: "4px" }}
                className=""
                type="date"
                placeholder="Въезд"
              />
              <span></span>
              <input
                style={{ width: "60px" }}
                className=""
                type="text"
                placeholder="Отъезд"
              />
            </div>
            <br />
            <p style={{ textAlign: "center" }}> Сбросить</p>
          </div>
        </div>

        <div className="Catalog-header-category">
          <button
            onClick={() => {
              setIsvpop(!isvpop);
            }}
          >
            <span>С бассейном</span>
            <img width={25} src={isvpop ? iconTop : iconsStrelka} alt="" />
          </button>
          {isvpop && (
            <div className="overlay2" onClick={(e) => clickDiv2(e)}>
              <div className="pop2" id="test2">
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    летний
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    внутренний
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    купель
                  </label>
                </div>
                <button
                  style={{
                    background: "#F4683F",
                    marginTop: "30px",
                    padding: "10px 30px",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    setIsvpop(!isvpop);
                  }}
                >
                  Сохранить
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              Setpopup2(!popup2);
            }}
          >
            <span>Развлечения</span>
            <img width={25} src={popup2 ? iconTop : iconsStrelka} alt="" />
          </button>

          {popup2 && (
            <div className="overlay2" onClick={(e) => clickDiv3(e)}>
              <div className="pop3" id="test3">
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    сауна или баня (без веников)
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    русская баня на дровах
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    хаммам
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    бильярд
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ width: "18px", height: "18px" }}
                    id="horns"
                    name="horns"
                  />
                  <label
                    for="horns"
                    style={{
                      fontWeight: "600",
                      color: "#333333",
                      fontSize: "16px",
                    }}
                  >
                    настольный теннис
                  </label>
                </div>
                <button
                  style={{
                    background: "#F4683F",
                    marginTop: "30px",
                    padding: "10px 30px",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    Setpopup2(!popup2);
                  }}
                >
                  Сохранить
                </button>
              </div>
            </div>
          )}
          <button
            onClick={() => {
              Setpopup4(!popup4);
            }}
          >
            <span>Количество спал...</span>
            <img width={25} src={popup4 ? iconTop : iconsStrelka} alt="" />
          </button>
          {popup4 && (
            <div className="overlay2" onClick={(e) => clickDiv5(e)}>
              <div className="pop5" id="test4">
                <div style={{display:"flex", alignItems:"center", gap:"15px"}}> 

                    <div>
                          <p style={{fontSize:"16px", fontWeight:"600", color:"#727488"}}>Количество спален</p>
                          <br />
                          <div style={{display:"flex", alignItems:"center",justifyContent:"space-between", gap:"10px", border:"1px solid #C0C2D7", borderRadius:"200px", padding:"4px 7px", width:"121px"}}>
                               <button style={{border:"none", fontSize:"20px"}}>-</button>
                               <p style={{fontSize:"18px", fontWeight:"600", color:"#333333"}}>3</p>
                               <button style={{border:"none", fontSize:"20px"}}>+</button>
                          </div>
                    </div>

                    <div >
                    <p style={{fontSize:"16px", fontWeight:"600", color:"#727488"}}>Количество спальных мест</p>
                    <br />
                          <div  style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px", border:"1px solid #C0C2D7", borderRadius:"200px", padding:"4px 7px", width:"121px"}}>
                               <button style={{border:"none", fontSize:"20px"}}>-</button>
                               <p style={{fontSize:"18px", fontWeight:"600", color:"#333333"}}>14</p>
                               <button style={{border:"none", fontSize:"20px"}}>+</button>
                          </div>

                    </div>
                    

                </div>
                <button
                  style={{
                    background: "#F4683F",
                    marginTop: "30px",
                    padding: "10px 30px",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                  onClick={() => {
                    Setpopup4(!popup4);
                  }}
                >
                  Сохранить
                </button>
              </div>
            </div>
          )}

          <button
            onClick={() => {
              Setpopup3(!popup3);
            }}
          >
            <span>Подборки</span>
            <img width={25} src={popup3 ? iconTop : iconsStrelka} alt="" />
          </button>
          {popup3 && (
            <div className="overlay2" onClick={(e) => clickDiv4(e)}>
              <div className="pop4" id="test4">
                <p id="pop-p">С бассейном</p>
                <p id="pop-p">Семейные и уютные</p>
                <p id="pop-p">Хиты продаж</p>
                <p id="pop-p">Под свадьбы и корпоративы</p>
                <p id="pop-p">С русской баней на дровах</p>
              </div>
            </div>
          )}
        </div>

        <div className="Catalog-header-filter">
          <button id="zakaz">Заявка на подбор</button>
          <button>
            <img src={iconsFilter} alt="" />
          </button>
        </div>
      </div>

      <div className="Catalog-hero">
        <div className="Catalog-house-card-all">
          {dataCard.slice(6, 16).map((el) => (
            <div key={el.id} className="Catalog-house-card">
              <div className="Catalog-house-card-img">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  lazy={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide
                    style={{
                      backgroundImage: `url(${el.avatar.avatar1})`,

                      borderRadius: "20px 0px 0px 20px",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="Catalog-favourite"
                      style={{ background: bgColor }}
                      onClick={() => handleFavouriteClick(el.id)}
                    >
                      <img
                        src={isActive ? iconsfavourite2 : iconsfavourite}
                        alt=""
                      />
                    </div>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      backgroundImage: `url(${el.avatar.avatar1})`,
                      borderRadius: "20px 0px 0px 20px",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="Catalog-favourite"
                      style={{ background: bgColor }}
                      onClick={() => handleFavouriteClick(el.id)}
                    >
                      <img
                        src={isActive ? iconsfavourite2 : iconsfavourite}
                        alt=""
                      />
                    </div>
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      backgroundImage: `url(${el.avatar.avatar1})`,
                      borderRadius: "20px 0px 0px 20px",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="Catalog-favourite"
                      style={{ background: bgColor }}
                      onClick={() => handleFavouriteClick(el.id)}
                    >
                      <img
                        src={isActive ? iconsfavourite2 : iconsfavourite}
                        alt=""
                      />
                    </div>

                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      backgroundImage: `url(${el.avatar.avatar1})`,
                      borderRadius: "20px 0px 0px 20px",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="Catalog-favourite"
                      style={{ background: bgColor }}
                      onClick={() => handleFavouriteClick(el.id)}
                    >
                      <img
                        src={isActive ? iconsfavourite2 : iconsfavourite}
                        alt=""
                      />
                    </div>

                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                  <SwiperSlide
                    style={{
                      backgroundImage: `url(${el.avatar.avatar1})`,
                      borderRadius: "20px 0px 0px 20px",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    <div
                      className="Catalog-favourite"
                      style={{ background: bgColor }}
                      onClick={() =>
                        handleFavouriteClick(el.id, el.avatar.avatarId)
                      }
                    >
                      <img
                        src={isActive ? iconsfavourite2 : iconsfavourite}
                        alt=""
                      />
                    </div>

                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="Catalog-house-card-text">
                <div className="Catalog-house-card-text-name">
                  <h2>{el.name} </h2>
                  <button>
                    <img src={iconsUsers} /> <span>до 30</span>
                  </button>
                </div>
                <div className="Catalog-house-card-text-icons">
                  <img src={icon1} /> <p>5 спальных мест</p>
                </div>
                <div className="Catalog-house-card-text-icons">
                  <img src={icon2} /> <p>Настольный теннис</p>
                </div>
                <div className="Catalog-house-card-text-icons">
                  <img src={icon3} /> <p>Бассейн</p>
                </div>
                <div className="Catalog-house-card-text-icons">
                  <img src={icon4} /> <p>Сауна</p>
                </div>
                <div className="Catalog-house-card-text-price">
                  <h1>{el.price} </h1>
                  <h4>Подробнее</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8984.556418289128!2d49.2648649!3d55.738712!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1714875057917!5m2!1sru!2skg"
          width="400"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="Catalog-map"></div>
      </div>
    </Container>
  );
};

export default Catalog;
