import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between p-2">
        <h1>Branch Name, India</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button size="sm" variant="default">Logout</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
