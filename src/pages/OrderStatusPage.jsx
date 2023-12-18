"use client";
import ViewOrderDetails from "@/components/Modals/ViewOrderDetailsModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { fetcher } from "@/utils/fetcher";
import { getConfigSwr } from "@/utils/getConfig";
import { getCookie } from "cookies-next";
import { Star } from "lucide-react";
import useSWR from "swr";
import { useState } from "react";
import { DatePickerDemo } from "@/components/DatePicker";
import { format } from "date-fns";

const OrderStatusPage = () => {
  const token = getCookie("accessToken");
  const branchId = getCookie("branchId");
  const config = getConfigSwr(token);

  const [filterbyTableId, setFilterByTableId] = useState(null);
  const [filterbyOrderStatus, setFilterByOrderStatus] = useState(null);
  const [filterbyDate, setFilterByDate] = useState();

  const [pageNo, setPageNo] = useState(1);

  // * generate query string
  const generateQueryString = () => {
    let queryString = "";

    // Check and append the table part
    if (filterbyTableId) {
      queryString += `&table=${filterbyTableId}`;
    }

    // Check and append the status part
    if (filterbyOrderStatus) {
      queryString += `&order_status=${filterbyOrderStatus}`;
    }

    // Check and append the date part
    if (filterbyDate) {
      queryString += `&date=${filterbyDate}`;
    }

    // Remove the leading "&" if the string is not empty
    // if (queryString.length > 0) {
    //   queryString = queryString.substring(1);
    // }

    return queryString;
  };

  // Example usage
  const result = generateQueryString();
  console.log(result);

  // * fetching all order-status
  const { data, isLoading, error } = useSWR(
    [
      `${
        process?.env?.NEXT_PUBLIC_API_ENDPOINT
      }/api/branch-order/${branchId}/?page_size=8&page=${pageNo}${generateQueryString()}`,
      config,
    ],
    ([url, config]) => fetcher(url, config)
  );

  // *fetching all tables
  const { data: tables } = useSWR(
    [
      `${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/table/${branchId}/`,
      config,
    ],
    ([url, config]) => fetcher(url, config)
  );
  console.log(filterbyDate);

  // *formatting date
  const fomrattedDate = filterbyDate
    ? format(filterbyDate, "yyyy-MM-dd")
    : null;

  console.log(fomrattedDate);

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

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrev = () => {
    setPageNo(pageNo - 1);
  };

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    <div className="p-8">
      <div className="flex justify-start gap-8">
        <div className="w-full">
          <Label htmlFor="table">Table</Label>
          <Select onValueChange={(val) => setFilterByTableId(val)}>
            <SelectTrigger id="table">
              <SelectValue placeholder="Select table" />
            </SelectTrigger>
            <SelectContent>
              {tables?.results?.map((ele, idx) => (
                <SelectItem key={idx} value={ele?.id} className="capitalize">
                  {ele?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full  flex flex-col justify-end gap-1">
          <Label htmlFor="role">Date</Label>
          <DatePickerDemo date={filterbyDate} setDate={setFilterByDate} />
        </div>
        <div className="w-full">
          <Label htmlFor="status">Status</Label>
          <Select onValueChange={(val) => setFilterByOrderStatus(val)}>
            <SelectTrigger id="status">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={null}>All</SelectItem>
              <SelectItem value="Booked">Booked</SelectItem>
              <SelectItem value="Cooked">Cooked</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label htmlFor="payment">Payment</Label>
          <Select>
            <SelectTrigger id="payment">
              <SelectValue placeholder="Select payment status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
      </div>
      <Table className="mt-8">
        <TableCaption>
          <div className="flex items-center justify-between">
            <Button size="sm" disabled={!data?.previous} onClick={handlePrev}>
              Previous
            </Button>
            <p>A list of all your orders</p>
            <Button size="sm" disabled={!data?.next} onClick={handleNext}>
              Next
            </Button>
          </div>
        </TableCaption>
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
          {data?.results?.map((ele, idx) => (
            <TableRow key={idx}>
              <TableCell className="text-center">{idx + 1}</TableCell>
              <TableCell className="text-center">{ele?.table?.name}</TableCell>
              <TableCell className="text-center">
                <ViewOrderDetails trigger={ele?.order_id} link icon />
              </TableCell>
              <TableCell className="text-center">{ele?.guest_name}</TableCell>
              <TableCell className="text-center">{ele?.order_status}</TableCell>
              <TableCell className="text-center">
                {ele?.payment_method}
              </TableCell>
              <TableCell className="text-center">
                {ele?.is_paid ? "Paid" : "Not Paid"}
              </TableCell>
              <TableCell className="text-center">{ele?.amount}</TableCell>
              <TableCell className="text-center flex justify-center items-center gap-4">
                4 <Star size={15} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderStatusPage;
