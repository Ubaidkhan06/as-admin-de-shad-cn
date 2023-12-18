"use client";

import useSWR from "swr";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import { getCookie } from "cookies-next";
import { fetcher } from "@/utils/fetcher";
import { getConfigSwr } from "@/utils/getConfig";

const Navbar = () => {
  const branchId = getCookie("branchId");
  const accessToken = getCookie("accessToken");

  const config = getConfigSwr(accessToken);

  const { data, isLoading, error } = useSWR(
    [
      `${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/api/branch/${branchId}/`,
      config,
    ],
    ([url, config]) => fetcher(url, config)
  );

  return (
    <>
      <div className="w-full flex justify-between items-end p-2">
        {isLoading ? (
          <h1 className="h-10 w-44 animate-pulse bg-muted " ></h1>
        ) : (
          <h1 className="text-lg">
            {data?.name}, {data?.address?.country}
          </h1>
        )}
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button size="sm" variant="default">
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
