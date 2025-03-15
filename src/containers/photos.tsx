const Photos = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex mt-10 flex-col mb-8 text-center">
          <p className="text-2xl font-bold">Фотографии нашего магазина</p>
          <span className="text-xl font-medium">
            Это фотографии нашего магазина внутри и снаружи
          </span>
        </div>
        <div className="flex gap-6">
          <img className="w-90 h-100" src="/inside.jpg" alt="" />
          <img className="w-90 h-100" src="/polka.jpg" alt="" />
          <img className="w-90 h-100" src="/main.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Photos;
