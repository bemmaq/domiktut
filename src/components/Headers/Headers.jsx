import React from 'react'
import Container from '../../Helpers/Container'

const Headers = () => {
  return (
    <div>
        <Container>
        <div className="w-[1400px] m-auto  flex justify-between pt-5 fixed ml-11 bg-white">
          <div>
            <img src={logotip} alt="" />
          </div>
          <div className="flex gap-2">
            <div>
              <img className="pt-1" src={nav} width={10} alt="" />
            </div>
            <div>
              <select className="bg-transparent text-white">
                <option>Бишкек</option>
                <option>Баткен</option>
                <option>Ыссык-Кол</option>
              </select>
            </div>
            <div className="">
              <button
                style={{
                  boxShadow: "0px 4px 6px rgba(128, 128, 128, 0.6)",
                }}
                className="border-2 text-black w-[110px] h-[30px] rounded-3xl hover:text-white hover:bg-orange-700 hover:border-transparent hover:shadow-lg"
              >
                Каталог
              </button>
            </div>
          </div>

          <div className="flex text-white gap-[30px]">
            <Link onClick={ClickString}>
              <p className="hover:text-orange-600 cursor-pointer delay-200 ease-in">
                Частые вопросы
              </p>
            </Link>

            <p className="hover:text-orange-600 cursor-pointer delay-200 ease-in">
              Сотрудничество
            </p>
          </div>
          <div className="flex gap-5">
            <div>
              <img src={love} alt="" />
            </div>
            <div className="flex gap-3">
              <div className="">
                <img
                  onClick={() => {
                    setPopup(!popup);
                  }}
                  src={search}
                  alt=""
                />
                {popup && (
                  <div className="fixed top-0 bottom-0 left-0 right-0 w-full h-full bg-black bg-opacity-70 ">
                    <div className="bg-white w-[200rem] flex gap-[650px]">
                      <input
                        className="w-[50rem] h-[60px] outline-none transition-all duration-300 ease-in-out ::placeholder pl-5"
                        type="text"
                        placeholder="Введите название коттеджа"
                      />
                      <div className="flex ">
                        <div>
                          <p className="pt-4 ml-[-50px]">
                            <Search />
                          </p>
                        </div>
                        <div>
                          <p
                            className="cursor-pointer pt-4 h-[30px] "
                            onClick={handleClear}
                          >
                            <Icons />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <p className="text-white hover:text-orange-600 delay-200 ease-in cursor-pointer">
                Поиск по названию
              </p>
            </div>
            <div className="flex gap-2">
              <div>
                <img src={tel} alt="" />
              </div>
              <p className="text-white">8 (843) 528-65-48</p>
            </div>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default Headers