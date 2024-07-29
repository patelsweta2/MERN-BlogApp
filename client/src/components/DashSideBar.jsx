// import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/user/userSlice";
import { useSelector } from "react-redux";
import Dashboard from "./../pages/Dashboard";

const DashSideBar = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch("/server/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="w-full md:w-56 dark:bg-black bg-[#E3E4E8] text-black dark:text-white h-full">
      <div className="flex flex-col gap-1 p-4">
        {currentUser && currentUser.isAdmin && (
          <Link to="/dashboard?tab=dash" className="sidebar-item">
            <div
              className={`flex items-center p-2 ${
                tab === "dash" || !tab ? "bg-slate-400" : ""
              } hover:bg-slate-400`}
            >
              <HiChartPie className="mr-3 w-6 h-auto" />
              <span>Dashboard</span>
            </div>
          </Link>
        )}
        <Link to="/dashboard?tab=profile" className="sidebar-item">
          <div
            className={`flex items-center p-2 ${
              tab === "profile" ? "bg-slate-400" : ""
            } hover:bg-slate-400`}
          >
            <HiUser className="mr-3 w-6 h-auto" />
            <span>profile</span>
          </div>
        </Link>
        {currentUser.isAdmin && (
          <>
            <Link to="/dashboard?tab=posts" className="sidebar-item">
              <div
                className={`flex items-center p-2 ${
                  tab === "posts" ? "bg-slate-400" : ""
                } hover:bg-slate-400`}
              >
                <HiDocumentText className="mr-3 w-6 h-auto" />
                <span>Posts</span>
              </div>
            </Link>
            <Link to="/dashboard?tab=users" className="sidebar-item">
              <div
                className={`flex items-center p-2 ${
                  tab === "users" ? "bg-slate-400" : ""
                } hover:bg-slate-400`}
              >
                <HiOutlineUserGroup className="mr-3 w-6 h-auto" />
                <span>Users</span>
              </div>
            </Link>
            <Link to="/dashboard?tab=comments" className="sidebar-item">
              <div
                className={`flex items-center p-2 ${
                  tab === "comments" ? "bg-slate-400" : ""
                } hover:bg-slate-400`}
              >
                <HiAnnotation className="mr-3 w-6 h-auto" />
                <span>Comments</span>
              </div>
            </Link>
          </>
        )}
        <div
          className="sidebar-item cursor-pointer hover:bg-slate-400"
          onClick={handleSignout}
        >
          <div className="flex items-center p-2">
            <HiArrowSmRight className="mr-3 w-6 h-auto" />
            <span>Sign Out</span>
          </div>
        </div>
      </div>
    </div>
    // <Sidebar className="w-full md:w-56">
    //   <Sidebar.Items>
    //     <Sidebar.ItemGroup className="flex flex-col gap-1">
    //       {currentUser && currentUser.isAdmin && (
    //         <Link to="/dashboard?tab=dash">
    //           <Sidebar.Item
    //             active={tab === "dash" || !tab}
    //             icon={HiChartPie}
    //             as="div"
    //           >
    //             Dashboard
    //           </Sidebar.Item>
    //         </Link>
    //       )}
    //       <Link to="/dashboard?tab=profile">
    //         <Sidebar.Item
    //           active={tab === "profile"}
    //           icon={HiUser}
    //           label={currentUser.isAdmin ? "Admin" : "User"}
    //           labelColor="dark"
    //           as="div"
    //         >
    //           Profile
    //         </Sidebar.Item>
    //       </Link>
    //       {currentUser.isAdmin && (
    //         <Link to="/dashboard?tab=posts">
    //           <Sidebar.Item
    //             active={tab === "posts"}
    //             icon={HiDocumentText}
    //             as="div"
    //           >
    //             Posts
    //           </Sidebar.Item>
    //         </Link>
    //       )}
    //       {currentUser.isAdmin && (
    //         <>
    //           <Link to="/dashboard?tab=users">
    //             <Sidebar.Item
    //               active={tab === "users"}
    //               icon={HiOutlineUserGroup}
    //               as="div"
    //             >
    //               Users
    //             </Sidebar.Item>
    //           </Link>
    //           <Link to="/dashboard?tab=comments">
    //             <Sidebar.Item
    //               active={tab === "comments"}
    //               icon={HiAnnotation}
    //               as="div"
    //             >
    //               Comments
    //             </Sidebar.Item>
    //           </Link>
    //         </>
    //       )}
    //       <Sidebar.Item
    //         icon={HiArrowSmRight}
    //         className="cursor-pointer"
    //         onClick={handleSignout}
    //       >
    //         Sign Out
    //       </Sidebar.Item>
    //     </Sidebar.ItemGroup>
    //   </Sidebar.Items>
    // </Sidebar>
  );
};

export default DashSideBar;
