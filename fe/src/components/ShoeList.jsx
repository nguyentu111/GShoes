import { axiosClient } from "../lib/axiosClient";
import { useQuery } from "react-query";
import { SingleShoes } from "./SingleShoe";

export const ShoeList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["shoes"],
    queryFn: () => axiosClient.get("/shoes.json"),
  });
  if (!isLoading && data.data) {

    return (
      <div className="card">
    
          <img src="/nike.png" className="w-[50px] my-3 z-10 relative" />
          <div className="text-[24px] font-bold relative my-4">Our Products</div>
          <div className="card-body relative">
            {data.data.shoes.map((shoe) => {
              return <SingleShoes key={shoe.id} data={shoe} />;
            })}
          </div>
      </div>
    );
  }
  return null;
};
