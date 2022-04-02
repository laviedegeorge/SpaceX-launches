import React from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { formatLaunchesData, launchesQuery } from "./libs";
import LaunchTables from "./components/Tables/LaunchTables";

function App() {
  const { error, loading, data } = useQuery(launchesQuery);
  const formattedLaunchesData = formatLaunchesData(data?.launches || []);

  if (loading)
    <div className=" text-xl min-h-[calc(100vh - 100px)] flex justify-center items-center">
      Loading ...
    </div>;

  if (error)
    <div className=" text-xl min-h-[calc(100vh - 100px)] flex justify-center items-center">
      Error, Could not fetch data. Try again ...
    </div>;

  return (
    <div className=" w-full min-h-screen">
      <header className="">
        <h1 className="border-b-2 p-4 text-4xl font-semibold text-center">
          SpaceX launches
        </h1>
      </header>
      <main className=" w-full min-h-screen flex justify-center py-10">
        <div className=" border rounded-lg">
          <LaunchTables tableData={formattedLaunchesData || []} />
        </div>
      </main>
    </div>
  );
}

export default App;
