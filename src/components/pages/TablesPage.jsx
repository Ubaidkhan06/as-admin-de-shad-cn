"use client";
import TableCard from "@/components/Cards/TableCard";
import { fetcher } from "@/utils/fetcher";
import { getCookie } from "cookies-next";
import useSWR from "swr";

const TablesPage = () => {
  const branchId = getCookie("branchId");
  const token = getCookie("accessToken");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data, isLoading, error } = useSWR(
    [`${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/table/${branchId}`, config],
    ([url, config]) => fetcher(url, config)
  );

  console.log(data, error);

  return (
    <div className="flex items-center justify-center flex-wrap gap-6 p-8">
      {data?.results?.map((ele, idx) => (
        <TableCard
          tableName={ele?.name}
          guestName={ele?.active_order?.guest_name}
          orderId={ele?.active_order_id}
          tableStatus={ele?.status}
          key={idx}
        />
      ))}
    </div>
  );
};

export default TablesPage;
