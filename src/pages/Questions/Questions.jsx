import React, { useState } from "react";
import Container from "../../Helpers/Container";

const Questions = () => {
  const [isPlus, setIsPlus] = useState(true);
  const [isPlus2, setIsPlus2] = useState(true);
  const [isPlus3, setIsPlus3] = useState(true);
  const [isPlus4, setIsPlus4] = useState(true);
  const [isPlus5, setIsPlus5] = useState(true);
  const [isPlus6, setIsPlus6] = useState(true);
  const [isPlus7, setIsPlus7] = useState(true);
  const [isPlus8, setIsPlus8] = useState(true);

  const handleClick = () => {
    setIsPlus(!isPlus);
  };
  const handleClick2 = () => {
    setIsPlus2(!isPlus2);
  };
  const handleClick3 = () => {
    setIsPlus3(!isPlus3);
  };  const handleClick4 = () => {
    setIsPlus4(!isPlus4);
  };  const handleClick5 = () => {
    setIsPlus5(!isPlus5);
  };  const handleClick6 = () => {
    setIsPlus6(!isPlus6);
  };  const handleClick7 = () => {
    setIsPlus7(!isPlus7);
  };  const handleClick8 = () => {
    setIsPlus8(!isPlus8);
  };
  


  return (
    <Container>
      <div className="mt-40 font-bold">
        <div>
          <h2 className="text-3xl">Частые вопросы</h2>
          <hr className="my-5" />
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-2xl">Как происходит бронирование?</p>
          </div>

          <div>
            <button onClick={handleClick} className="text-4xl">
              {isPlus ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus && (
          <p>
            Бронирование происходит после внесения предоплаты 50% от суммы
            аренды, предварительно можно приезать на осмотр дома или провести
            онлайн показ (при наличии такой возможности).
          </p>
        )}
        <hr className="my-5" />

        <div className="flex justify-between">
          <div>
            <p className="text-2xl">Какая сумма предоплаты нужна?</p>
          </div>
          <div>
            <button onClick={handleClick2} className="text-4xl">
              {isPlus2 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus2 && (
          <p>
            Стандарт предоплаты 50% от суммы аренды, если сумма аренды большая,
            то можно уменьшить предоплату до 30%.
          </p>
        )}
        <hr className="my-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-2xl">
              Можно ли разбить предоплату на несколько частей?
            </p>
          </div>
          <div>
            <button onClick={handleClick3} className="text-4xl">
              {isPlus3 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus3 && (
          <p>
            Можно, по возможности можно сделать все. В каждом случае нужно
            общаться индивидуально как с клиентом, так и с собственником.
          </p>
        )}

        <hr className="my-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-2xl">Как работаете с юр.лицами? </p>
          </div>
          <div>
            <button onClick={handleClick4} className="text-4xl">
              {isPlus4 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus4 && (
          <p>
            У нас открыто ИП и мы можем предложить заключить с нами агентский
            договор, на основании которого мы забронируем за Вами коттедж и
            пример оплату за дом на наш расчётный счёт. Более детально уточняйте
            у менеджера.
          </p>
        )}

        <hr className="my-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-2xl">Можно ли приехать на просмотр? </p>
          </div>
          <div>
            <button onClick={handleClick5} className="text-4xl">
              {isPlus5 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus5 && <p>Да, любой дом можно посмотреть. </p>}

        <hr className="my-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-2xl">
              Какое время заезда и выезда в дом и есть ли возможность сдвинуть
              заезд или выезд?{" "}
            </p>
          </div>
          <div>
            <button onClick={handleClick6} className="text-4xl">
              {isPlus6 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus6 && (
          <p>
            У каждого дома свой фиксированный заезд и выезд (указано в карточке
            товара), сдвинуть сроки реально, нужно обговаривать индивидуально.
          </p>
        )}

        <hr className="my-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-2xl">Зачем нужен залог? </p>
          </div>
          <div>
            <button onClick={handleClick7} className="text-4xl">
              {isPlus7 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus7 && (
          <p>
            Залог берётся администрацией коттеджа только во время заселения в
            дом и возвращается при выезде из коттеджа. Сумма залога и штраф лист
            указаны в договоре аренды.
          </p>
        )}

        <hr className="my-5" />
        <div className="flex justify-between">
          <div>
            <p className="text-2xl">Сколько стоят в Ваши услуги? </p>
          </div>
          <div>
            <button onClick={handleClick8} className="text-4xl">
              {isPlus8 ? "+" : "-"}
            </button>
          </div>
        </div>
        {!isPlus8 && (
          <p>
            Мы находимся с цене собственника и получаем комиссию только после
            вашего отдыха. Мы не накручиваем больше от цены и отдельно нам Вы
            ничего не платите.
          </p>
        )}
      </div>
    </Container>
  );
};

export default Questions;
