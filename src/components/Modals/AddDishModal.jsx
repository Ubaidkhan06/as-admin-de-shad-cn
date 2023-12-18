import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, PlusIcon } from "lucide-react";
import Modal from "./Modal";

const AddDishCard = ({ cuisines, dishMutate }) => {
  return (
    <Card className="w-64">
      {/* <CardHeader> */}
      {/* <CardTitle>Add Dish</CardTitle> */}
      {/* <CardDescription>Fill in the Details</CardDescription> */}
      {/* </CardHeader> */}
      <CardContent className="h-full flex justify-center items-center w-full">
        <Modal
          add
          icon
          dishMutate={dishMutate}
          cuisines={cuisines}
          trigger={<PlusIcon size={50} />}
        />
      </CardContent>
    </Card>
  );
};

export default AddDishCard;
