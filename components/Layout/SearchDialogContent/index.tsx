import React, { useState } from "react";
import { Search } from "lucide-react";
import SubnetResult from "./SubnetResult";
import AccountResult from "./AccountResult";
import subnetData from "@/utils/data/subnets.json";
import accountsData from "@/utils/data/accounts.json";

const SearchDialogContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      setSearchTerm(event.currentTarget.value);
    }
  };

  const filteredSubnets = subnetData.data.subnets.nodes.filter((subnet) =>
    subnet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAccounts = accountsData.data.accounts.nodes.filter((account) =>
    account.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Search Bar */}
      <div className="flex flex-col gap-[21px] ">
        <div className="bg-[#2E2E2E] p-2 rounded-lg flex gap-4 shadow-lg ">
          <Search className="text-[#909090]" />
          <input
            className="border-none outline-none bg-transparent w-full text-white placeholder-[#909090]"
            placeholder="Search by Address, Validator or Txn Hash"
            autoFocus
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
        </div>

        <div className="bg-[#2E2E2E] shadow-lg p-2 rounded-lg flex flex-col gap-2 h-[389px] shadow-lg overflow-auto customScrollbar">
          {/* Display subnet results */}
          {searchTerm && filteredSubnets.length > 0
            ? filteredSubnets.map((subnet, index) => (
                <SubnetResult
                  key={index}
                  selected={index === 0}
                  name={subnet.name}
                  description={subnet.description}
                  id={subnet.id}
                />
              ))
            : !searchTerm &&
              subnetData.data.subnets.nodes
                .slice(0, 1)
                .map((subnet, index) => (
                  <SubnetResult
                    key={index}
                    selected={index === 0 && searchTerm === ""}
                    name={subnet.name}
                    description={subnet.description}
                    id={subnet.id}
                  />
                ))}

          {/* Display account results */}
          {searchTerm && filteredAccounts.length > 0
            ? filteredAccounts.map((account, index) => (
                <AccountResult
                  key={index}
                  selected={index === 0}
                  address={account.address}
                  balanceToken={account.balanceToken}
                  delegatedPercentage={account.delegatedPercentage}
                />
              ))
            : !searchTerm &&
              accountsData.data.accounts.nodes
                .slice(0, 1)
                .map((account, index) => (
                  <AccountResult
                    key={index}
                    selected={index === 0 && searchTerm === ""}
                    address={account.address}
                    balanceToken={account.balanceToken}
                    delegatedPercentage={account.delegatedPercentage}
                  />
                ))}
        </div>
      </div>
    </>
  );
};

export default SearchDialogContent;
