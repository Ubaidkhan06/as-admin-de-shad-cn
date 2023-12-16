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
import { User, UserCircle } from "lucide-react";

const UsersPage = () => {
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
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium gap-4 flex items-center">
              <UserCircle size={35} strokeWidth={1.5} />
              <div>
                <p>Ubaid</p>
                <p>ubaid@email.com</p>
              </div>
            </TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Activated</TableCell>
            <TableCell className="text-right">
              <Button size="sm">Remove User</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium gap-4 flex items-center">
              <UserCircle size={35} strokeWidth={1.5} />
              <div>
                <p>Ubaid</p>
                <p>ubaid@email.com</p>
              </div>
            </TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Activated</TableCell>
            <TableCell className="text-right">
              <Button size="sm">Remove User</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium gap-4 flex items-center">
              <UserCircle size={35} strokeWidth={1.5} />
              <div>
                <p>Ubaid</p>
                <p>ubaid@email.com</p>
              </div>
            </TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Activated</TableCell>
            <TableCell className="text-right">
              <Button size="sm">Remove User</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UsersPage;
