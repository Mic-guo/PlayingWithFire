// Placeholder Dashboard
// import { Navigate } from 'react-router-dom';
// import SidebarWithContentSeparator from "./sidebar";
import ProjectionGraph from "./Projected";

import { useState } from "react";
import "../styles/index.css";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom';

const supabase = createClient('https://crevzohrfpvqpihmgqip.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNyZXZ6b2hyZnB2cXBpaG1ncWlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYzOTk0MTMsImV4cCI6MjAyMTk3NTQxM30.ccJjDiz2E6PWKpA_wal7RtYS7mhvm0VtlP_zaddQG-Q')

function SidebarWithContentSeparator({ isSidebarOpen, toggleSidebar }) {
  const [open, setOpen] = useState(0);
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    }
    navigate('/login');
    // Optionally redirect the user or update the state after logging out
  };

  //   const toggleSidebar = () => {
  //     setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  //   };

  return (
    <div className={`flex flex-row`}>
      {/* {isSidebarOpen && ( transition-opacity ease-in ${isSidebarOpen ? "opacity-100" : "opacity-0 invisible"}*/}
      <Card
        className={`
        select-none
        h-[calc(100vh-2rem)] w-full max-w-[12rem] p-4 shadow-2xl shadow-blue-gray-900/5 rounded-tr-3xl rounded-br-3xl font-roboto text-zinc-900`}
      >
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Your Finance
          </Typography>
        </div>
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Modums
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem onClick={handleLogout}>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
      {/* )} */}
      <button
        onClick={toggleSidebar}
        className={`"p-2 flex h-15 w-15 max-h-10 pt-6 pl-2`}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
    </div>
  );
}

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="flex flex-row w-screen h-screen bg-white overflow-x-hidden">
        <div
          className={`w-[14rem] transition-transform duration-500 ease-in
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-[12rem]"}`}
        >
          <SidebarWithContentSeparator
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            className="flex flex-col h-full "
          />
        </div>
        <div
          className={`flex-grow flex-shrink min-w-4 max-w-[40rem] justify-center transition-transform duration-500 ease-in
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "w-full -translate-x-[3rem] pl-2"
            }`}
        >
          <ProjectionGraph className={`max-w-full h-[60vh] p-5`} />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
