import AddDishCard from "@/components/Cards/AddDishCard";
import BranchCard from "@/components/Cards/BranchCard";
import DishCard from "@/components/Cards/DishCard";

const MenuPage = () => {
  return (
    <div className="flex justify-center items-stretch gap-6 p-8 flex-wrap">
      <AddDishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
    </div>
  );
};

export default MenuPage;
