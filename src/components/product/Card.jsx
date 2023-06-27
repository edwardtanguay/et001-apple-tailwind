import { useContext } from "react";
import { getProductsItem } from "../data";
import { AppContext } from "../Context";

const Card = () => {
  const productsItems = getProductsItem();
  const {filter}=useContext(AppContext)
  return (
    <div className="flex flex-wrap justify-around gap-5 bg-slate-400 py-12">
      {productsItems.filter((item)=>(
        item.name.toLowerCase().includes(filter.toLowerCase())
      ))
     .map((item) => (
        <div
          className=" flex flex-col justify-center items-center p-5 ml-6 text-white bg-gray-500 h-[500px] w-[400px] gap-5 rounded-xl"
          key={item.id}
        >
          <img className="rounded-2xl " src={`images/${item.imageUrl}`} />
          <h3 className="text-xl">{item.name}</h3>
          <p className=" text-center text-sm ">{item.desc}</p>
          <p className="text-xl font-bold text-red-500 ">{item.price}</p>
          <p>{item.productCount}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
