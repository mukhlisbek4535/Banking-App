import Header from "@/components/Header";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = {
    firstName: "Mukhlisbek",
    lastName: "Kirgizov",
    email: "mukhlis@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header>
          <Header
            type="greeting"
            title="Welcome,"
            user={loggedIn.firstName}
            subtext="Access and manage your account and transactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 500.5 }]}
      />
    </section>
  );
}

export default Home;
