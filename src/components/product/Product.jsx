import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/ProductSlices";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.svg";
import { Link } from "react-router-dom";

const Product = () => {
  const { shopData } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div>
      <div>
        <p className="text-3xl font-semibold pl-[35px]">
          Популярное в каталоге
        </p>
      </div>
      <div className=" w-[1450px] flex flex-wrap gap-[40px] m-auto mt-[50px]">
        {shopData?.slice(6, 12).map((el) => (
          <div key={el.id} className=" border-2 rounded-3xl ">
            <div className="h-[580px] ">
              <img
                className="h-[250px] w-[450px] rounded-tl-3xl rounded-tr-3xl"
                src={el.avatar.avatar1}
                alt=""
              />

              <div className="ml-[30px] pt-[30px]">
                <p className="text-2xl font-bold">{el.name}</p>
                <br />
                <div>
                  
                    <div className="flex gap-5 text-gray-500">
                      <img src={icon1} alt="" />
                      <p>5 спальных мест</p>
                    </div>
                    <br />
                    <div className="flex gap-5 text-gray-500">
                      <img src={icon2} alt="" />
                      <p>Настольный теннис</p>
                    </div>
                    <br />
                    <div className="flex gap-5 text-gray-500">
                      <img src={icon3} alt="" />
                      <p>Баня</p>
                    </div>
                    <br />
                    <div className="flex gap-5 text-gray-500">
                      <img src={icon4} alt="" />
                      <p>Бассейн</p>
                    </div>
                  </div>
                  <div className="flex gap-[100px]">
                    <p className="pt-5 text-xl font-bold">{el.price}</p>
                   <Link to={''}>
                   <p className="pt-[20px] text-orange-600 font-semibold text-xl">Подробнее</p>
                   </Link>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
