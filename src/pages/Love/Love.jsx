import React, { useEffect, useState } from "react";
import Container from "../../Helpers/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../store/slice/cardSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import iconsfavourite from "../../assets/svg/Vector.svg";
import iconsfavourite2 from "../../assets/svg/icon_favourite.svg";
import iconsUsers from "../../assets/svg/Vector (4).svg";
import icon1 from "../../assets/svg/bed (Traced).svg";
import icon2 from "../../assets/svg/icon_entertainment.svg";
import icon3 from "../../assets/svg/icon_waterpool.svg";
import icon4 from "../../assets/svg/Vector 6 (Stroke).svg";
import { Parallax, Pagination, Navigation } from "swiper/modules";


const Love = () => {
    const { dataCard } = useSelector((state) => state.card);
    const [bgColor, setBgColor] = useState("#FFFFFF80");
    const [isRed, setIsRed] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getCard());
    }, []);

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
  return (
    <Container>
      <div>
        <div className="love-header">
            <h1 style={{color:"#333333", fontSize:"36px", fontWeight:"700", padding:"50px 0px"}}>Избранное</h1>
            
        </div>
        <div className="love-content">
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
        </div>
      
    </Container>
  );
};

export default Love;
