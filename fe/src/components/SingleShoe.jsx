import { useLocalStorage } from "usehooks-ts";
import { formatMoney } from "../lib/utils";
import { AddToCartBtn } from "./AddToCartBtn";

export function SingleShoes({ data }) {


  return (
    <div className="py-10 first:py-0 ">
      <div style={{ backgroundColor: data.color }} className="item-image">
        <img src={data.image} className="" />
      </div>
      <div className="mt-[26px] mb-5 font-bold text-xl">{data.name}</div>
      <div className="mb-5 text-sm text-gray-500 leading-[1.8]">
        {data.description}
      </div>
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg">${formatMoney(data.price)}</div>
         <AddToCartBtn data={data}/>
      </div>
    </div>
  );
}
