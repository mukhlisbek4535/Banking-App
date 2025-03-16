import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user-action";
import React from "react";

async function Home({ searchParams: { id, page } }: SearchParamProps) {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ userId: loggedIn?.$id });
  const accountsData = accounts?.data;

  if (!accounts) return;

  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  console.log({
    accountsData,
    account,
  });

  return (
    <section className="home">
      <div className="home-content">
        <header>
          <Header
            type="greeting"
            title="Welcome,"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={accounts?.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
}

export default Home;
