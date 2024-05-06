import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/ProductSlices";

import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";

import { Pagination } from "swiper/modules";

export default function App() {
  const { shopData } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {shopData?.slice(0,5).map((el) => (
          <div key={el.id}>
            <SwiperSlide>
              <img src={el.avatar} alt="" />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
