import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom";

const Products = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-30 mt-12">
        <div className="text-center flex flex-col gap-3">
          <p className="text-4xl font-bold">Наши товары</p>
          <span className="text-2xl font-normal">
            Самая лучшая и высококачественная детская одежда в Самарканде!
          </span>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="flex flex-col w-100 h-120 items-center justify-center gap-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img className="rounded-2xl" src="/clothes.jpg" alt="" />
              <p className="text-blue-600">одежда для мальчиков</p>
            </div>
            <Button onClick={() => navigate('/catalog')} className="cursor-pointer">Посмотреть в каталоге</Button>
          </div>
          <div className="flex w-100 h-120  flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-2 items-center justify-center">
              <img className="rounded-2xl" src="/paijamas.jpg" alt="" />
              <p className="text-pink-400">одежда для девочек</p>
            </div>
            <Button onClick={() => navigate('/catalog')} className="cursor-pointer">Посмотреть в каталоге</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
