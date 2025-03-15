const Best = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-50">
        <p className="text-4xl font-bold">Почему мы лучшие?</p>
        <span className="text-2xl font-medium">
          Три преимущества нашего магазина
        </span>
        <div className="flex gap-11 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <img
              className="w-50 h-50"
              src="https://cdn-icons-png.flaticon.com/512/5499/5499068.png"
              alt=""
            />
            <p>Высококачеставенная импортная одежда</p>
            <span>
              У нас широкий ассортимент <br /> высококачественной одежды по{" "}
              <br /> хорошим ценнам, из Китая, США и Турции.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <img className="w-60 h-60" src="/delievery.png" alt="" />
            <p>Доставка по всей Республике</p>
            <span>
              Нашу одежду можно заказывать онлайн <br /> и можно приехать в
              магазин и <br /> примерить понравившеюся вам <br /> одежду, а
              также имеется доставка по <br /> всей республике и не только
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <img className="w-60 h-60" src="/discount.png" alt="" />
            <p>Постоянные скидки и акции</p>
            <span>
              В нашем магазине постоянно <br /> проводятся разные акции и скидки
              в <br /> связи с какими нибудь праздниками <br /> либо просто при
              покупке более 2 <br /> вещей
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
