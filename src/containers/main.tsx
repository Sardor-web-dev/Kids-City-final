const Main = () => {
  return (
    <>
      <div className="bg-[url('/main.jpg')] w-full h-150 bg-cover">
        <div className="flex flex-col items-center justify-center w-full h-full gap-10">
          <p className="text-white font-bold text-5xl text-center">
            Kids City – ваш надежный магазин качественной детской одежды!
          </p>
          <span className="text-white font-medium text-2xl text-center">
            👕 Мы предлагаем широкий ассортимент стильной и удобной одежды для
            детей всех
            <br /> возрастов, от малышей до подростков. Каждый предмет подобран
            с любовью, чтобы ваш
            <br /> ребенок чувствовал себя комфортно и выглядел на все 100!{" "}
            <br />
          </span>
        </div>
      </div>
    </>
  );
};

export default Main;
