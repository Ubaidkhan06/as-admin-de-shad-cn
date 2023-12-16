import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusCircle, PlusIcon } from "lucide-react";
import Modal from "../Modals/Modal";

const AddDishCard = () => {
  return (
    <Card className="w-64">
      {/* <CardHeader> */}
        {/* <CardTitle>Add Dish</CardTitle> */}
        {/* <CardDescription>Fill in the Details</CardDescription> */}
      {/* </CardHeader> */}
      <CardContent className="h-full flex justify-center items-center w-full">
        <Modal icon trigger={<PlusIcon size={50} />} />
      </CardContent>
    </Card>
  );
};

export default AddDishCard;
