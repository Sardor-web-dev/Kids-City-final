import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="w-full h-10 flex items-center justify-center gap-18">
        <Link to="/">О нас</Link>
        <Link to="/">Почему мы</Link>
        <img src="/logo.png" alt="" />
        <Link to="/">Услуги и товары</Link>
        <Link to=">">Контакты</Link>
      </div>
    </>
  );
};

export default Header;
