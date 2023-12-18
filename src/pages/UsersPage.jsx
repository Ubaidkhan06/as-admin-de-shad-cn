"use client";

import AddUserModal from "@/components/Modals/AddUserModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetcher } from "@/utils/fetcher";
import { getConfigSwr } from "@/utils/getConfig";
import { getCookie } from "cookies-next";
import { User, UserCircle } from "lucide-react";
import useSWR from "swr";

const UsersPage = () => {
  const branchId = getCookie("branchId");
  const token = getCookie("accessToken");
  const config = getConfigSwr(token);

  const { data, isLoading, error } = useSWR(
    [
      `${process?.env?.NEXT_PUBLIC_API_ENDPOINT}/auth/user/${branchId}/`,
      config,
    ],
    ([url, config]) => fetcher(url, config)
  );

  console.log(data, error);

  return (
    <div className="p-8">
      <div className="flex items-end gap-4">
        <div>
          <Label htmlFor="search">Search by name</Label>
          <Input
            type="text"
            id="search"
            placeholder="John doe"
            className="w-[280px]"
          />
        </div>

        <div>
          <Label htmlFor="role">Search by role</Label>
          <Select>
            <SelectTrigger className="w-[280px]" id="role">
              <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Manager</SelectItem>
              <SelectItem value="dark">Waiter</SelectItem>
              <SelectItem value="system">Chef</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <AddUserModal />
      </div>
      <Table>
        <TableCaption>List of All Users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>User</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Branch</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((ele, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium gap-4 flex items-center">
                <UserCircle size={35} strokeWidth={1.5} />
                <div>
                  <p>{ele?.username}</p>
                  <p>u{ele?.email}</p>
                </div>
              </TableCell>
              <TableCell>{ele?.type}</TableCell>
              <TableCell>
                {ele?.is_active ? "Activated" : "Not Active"}
              </TableCell>
              <TableCell>{ele?.branch?.name}</TableCell>
              <TableCell className="text-right">
                <Button size="sm">Remove User</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
