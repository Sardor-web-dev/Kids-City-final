import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="w-full p-4 mt-10 text-white h-full flex flex-col items-center justify-center bg-[#9f887e]">
        <p className="text-2xl font-bold">Контакты</p>
        <br />
        <br />
        <span className="text-xl font-medium">Телефон: +998 97 397 00 34</span>
        <Link
          className="text-xl font-medium"
          to="https://www.instagram.com/kids_city_sam/"
        >
          Instagram: @kids_city_sam
        </Link>
        <Link className="text-xl font-medium" to="https://t.me/kids_city_sam">
          Telegram: t.me/kids_city_sam
        </Link>
        <br />
        <br />
        <span className="text-xl font-medium">
          Адрес: Ул.Бустонсарой(Бирлик 24)
        </span>
      </div>
      <div className="w-full h-full">
        <iframe
          className="w-full h-70"
          src="https://yandex.uz/map-widget/v1/?display-text=kids%20city&ll=66.964099%2C39.661719&mode=search&oid=157073967785&ol=biz&sctx=ZAAAAAgBEAAaKAoSCXHjFvNzvlBAETEnaJPD00NAEhIJJGO1%2BX8dJ0ARe8A8ZMqHE0AiBgABAgMEBSgKOABA3lBIAWoCdXqdAc3MzD2gAQCoAQC9ARx8XCjCAQapldqSyQSCAglraWRzIGNpdHmKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=66.964099%2C39.661719&sspn=0.000705%2C0.000298&text=kids%20city&z=21"
        ></iframe>
      </div>
    </>
  );
};

export default Footer;
