"use client";

import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useTokenAuth = () => {
  const accessToken = getCookie("accessToken");
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      router?.replace("/login");
    }
  }, []);

  return;
};

export default useTokenAuth;
