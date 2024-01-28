// Placeholder Dashboard
// import { Navigate } from 'react-router-dom';
import SidebarWithContentSeparator from "./sidebar";

function Dashboard() {
  // return <Navigate to="/" />;
  return (
    <>
      <div className="bg-zinc-700 w-screen h-screen">
        <SidebarWithContentSeparator className="flex flex-col" />
      </div>
    </>
  );
}

export default Dashboard;
