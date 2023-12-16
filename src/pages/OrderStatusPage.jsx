import ViewOrderDetails from "@/components/Modals/ViewOrderDetailsModal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderStatusPage = () => {
  const tableHeads = [
    "Sr.",
    "Table",
    "Order ID",
    "Name",
    "Status",
    "Payment",
    "Trasaction",
    "Amount",
    "Ratings",
  ];

  const dummyData = [
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
    {
      no: 1,
      table: "Table 1",
      orderId: <ViewOrderDetails link trigger={"Order_321"} />,
      name: "Name",
      status: "Booked",
      payment: "Cash",
      transaction: "Paid",
      amount: "324",
      ratings: "4",
    },
  ];

  return (
    <div className="p-8">
      <Table className="">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {tableHeads?.map((ele, idx) => (
              <TableHead className="text-center" key={idx}>
                {ele}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyData?.map((ele, idx) => (
            <TableRow key={idx}>
              {Object?.values(ele).map((item, idx) => (
                <TableCell className="text-center" key={idx}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderStatusPage;
