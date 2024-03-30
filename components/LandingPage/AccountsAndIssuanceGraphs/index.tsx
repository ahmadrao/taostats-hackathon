import React, { useEffect, useRef, useState } from "react";
import ActiveAccounts from "./ActiveAccounts";
import Stakedissuance from "./StackedIssuance";

const AccountsAndIssuanceGraphs: React.FC = () => {
  const activeAccountRef = useRef<HTMLDivElement>(null);
  const stakedRef = useRef<HTMLDivElement>(null);
  const [offset, setOffSet] = useState<{
    active: { height: number; width: number };
    staked: { height: number; width: number };
  }>({
    active: { height: 0, width: 0 },
    staked: { height: 0, width: 0 },
  });

  useEffect(() => {
    if (activeAccountRef.current && stakedRef.current) {
      const child1Width = activeAccountRef.current.offsetWidth;
      const child1Height = activeAccountRef.current.offsetHeight;
      const child2Width = stakedRef.current.offsetWidth;
      const child2Height = stakedRef.current.offsetHeight;

      setOffSet({
        active: { width: child1Width, height: child1Height },
        staked: { width: child2Width, height: child2Height },
      });
    }
  }, []);

  return (
    <div className="flex gap-10 py-[90px] px-[68px] w-full">
      <div ref={activeAccountRef} className="w-1/2 min-h-[300px]">
        <ActiveAccounts
          height={offset.active.height}
          width={offset.active.width}
        />
      </div>
      <div ref={stakedRef} className="w-1/2 min-h-[300px]">
        <Stakedissuance height={offset.staked.height}
          width={offset.staked.width}/>
      </div>
    </div>
  );
};

export default AccountsAndIssuanceGraphs;
