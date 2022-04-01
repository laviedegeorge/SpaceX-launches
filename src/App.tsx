import React from "react";
import "./App.css";
import LaunchTables from "./components/Tables/LaunchTables";

function App() {
  return (
    <div className=" w-full min-h-screen">
      <header className="">
        <h1 className="border-b-2 p-4 text-4xl font-semibold text-center">
          SpaceX launches
        </h1>
      </header>
      <main className=" w-full min-h-screen flex justify-center py-10">
        <div className=" border rounded-lg">
          <LaunchTables
            tableData={[
              {
                id: "vwettne",
                nameOfMssion: "shtt",
                nameOfRocket: "rebwtnt",
                nameOfCompany: "ertnwnt",
                massOfRocket: 56457,
                launchSite: "etnwrnwrt",
                launchDate: "fbwtwnw",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
