import { useState } from "react";
import SidebarWithContentSeparator from "./sidebar";
import "./index.css";

function Dashboard() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <SidebarWithContentSeparator />
        {/* <div className="absolute left-0 top-1/2 w-64 h-3/4 bg-gray-200 z-10 transform -translate-y-1/2">
        </div>
        <div className="flex w-screen h-screen bg-lime-50 z-1"></div> */}
      </div>
    </>
  );
}

export default Dashboard;
