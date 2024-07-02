import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  DashPost,
  DashProfile,
  DashUsers,
  DashComments,
  DashBoardComp,
} from "../components";
import DashSideBar from "../components/DashSideBar";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="mt-20 min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSideBar />
      </div>
      {/* Profile */}
      {tab === "profile" && <DashProfile />}
      {/* posts */}
      {tab === "posts" && <DashPost />}
      {/* users */}
      {tab === "users" && <DashUsers />}
      {/* comments */}
      {tab === "comments" && <DashComments />}
      {/* dashboard comp */}
      {tab === "dash" && <DashBoardComp />}
    </div>
  );
};

export default Dashboard;
