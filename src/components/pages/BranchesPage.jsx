"use client";
import BranchCard from "@/components/Cards/BranchCard";
import useTokenAuth from "@/hooks/useTokenAuth";

const BranchesPage = () => {

  // !checks for token in cookies if not found redirects to login page.
  useTokenAuth();

  return (
    <div className="flex justify-center items-center flex-wrap p-8 gap-6">
      <BranchCard />
      <BranchCard />
      <BranchCard />
      <BranchCard />
      <BranchCard />
      <BranchCard />
    </div>
  );
};

export default BranchesPage;
