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
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

function SidebarWithContentSeparator() {
  const [open, setOpen] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to manage sidebar visibility

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar visibility
  };

  const navigate = useNavigate();

  function handleDashboard() {
    navigate('/dashboard')
  }

  function handleModules() {
    navigate('/modules')
  }

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
    }
    navigate('/login');
    // Optionally redirect the user or update the state after logging out
  };

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
            <ListItem  onClick={handleDashboard} className="p-0" selected={open === 1}>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Dashboard
                </Typography>
            </ListItem>
              <List className="p-0">
                <ListItem onClick={handleModules}>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                  </ListItemPrefix>
                  Modules
                </ListItem>
              </List>
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
        className={`"p-2 flex h-15 w-15 max-h-10 pt-6 transition-transform duration-500 ease-in 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-[12rem] pl-2"}`}
      >
        <Bars3Icon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default SidebarWithContentSeparator;