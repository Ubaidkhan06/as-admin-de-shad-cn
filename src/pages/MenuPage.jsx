"use client";
import AddDishCard from "@/components/Modals/AddDishModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DishCard from "@/components/Cards/DishCard";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";
import { getCookie } from "cookies-next";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ConfirmationDailog from "@/components/Modals/ConfirmationDailog";
import CuisineCard from "@/components/Cards/CuisineCard";

const MenuPage = () => {
  const branchId = getCookie("branchId");
  const token = getCookie("accessToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  // * fetching all the dishes of branch
  const {
    data,
    isLoading,
    error,
    mutate: dishMutate,
  } = useSWR(
    [`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/dish/${branchId}`, config],
    ([url, config]) => fetcher(url, config)
  );

  // * fetching all the cuisines of branch
  const { data: cuisines } = useSWR(
    [
      `${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/cuisine/${branchId}`,
      config,
    ],
    ([url, config]) => fetcher(url, config)
  );

  return (
    <div className="p-8">
      <div>
        {cuisines?.map((ele, idx) => (
          <CuisineCard key={idx} image={ele?.icon} name={ele?.name} />
        ))}
      </div>
      <div className="flex justify-center items-stretch gap-6 flex-wrap">
        <AddDishCard dishMutate={dishMutate} cuisines={cuisines} />
        {data?.results?.map((ele, idx) => (
          <DishCard
            dishMutate={dishMutate}
            id={ele?.id}
            key={idx}
            name={ele?.name}
            image={ele?.image}
            price={ele?.price}
            rating={ele?.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
