import { useEffect, useState } from "react";
import {
  HiAnnotation,
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DashBoardComp = () => {
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthComments, setLastMonthComments] = useState(0);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/server/user/getusers?limit=5");
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchPosts = async () => {
      try {
        const res = await fetch("/server/post/getposts?limit=5");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    const fetchComments = async () => {
      try {
        const res = await fetch("/server/comment/getcomments?limit=5");
        const data = await res.json();
        if (res.ok) {
          setComments(data.comments);
          setTotalComments(data.totalComments);
          setLastMonthComments(data.lastMonthComments);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
      fetchComments();
    }
  }, [currentUser]);
  return (
    <div className="p-3 md:mx-auto">
      <div className="flex-wrap flex gap-4 justify-center">
        <div className="flex flex-col p-3 bg-[#E3E4E8] dark:bg-black gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-gray-500 text-md uppercase">Total Users</h3>
              <p className="text-2xl">{totalUsers}</p>
            </div>
            <HiOutlineUserGroup className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-[#E3E4E8] dark:bg-black gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-gray-500 text-md uppercase">
                Total Comments
              </h3>
              <p className="text-2xl">{totalComments}</p>
            </div>
            <HiAnnotation className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthComments}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-3 bg-[#E3E4E8] dark:bg-black gap-4 md:w-72 w-full rounded-md shadow-md">
          <div className="flex justify-between">
            <div className="">
              <h3 className="text-gray-500 text-md uppercase">Total Posts</h3>
              <p className="text-2xl">{totalPosts}</p>
            </div>
            <HiDocumentText className="bg-green-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthPosts}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 py-3 mx-auto justify-center">
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md bg-[#E3E4E8] dark:bg-black">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent users</h1>
            <button className="rounded-md px-5 py-2 w-auto custom-outline hover:bg-pink-700 hover:text-white">
              <Link to={"/dashboard?tab=users"}>See all</Link>
            </button>
          </div>
          <div className="container mx-auto px-6 py-8">
            <table className="min-w-full dark:bg-zinc-700 bg-zinc-300 rounded-md overflow-hidden ">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-zinc-600 text-white">
                    User Image
                  </th>
                  <th className="py-2 px-4 bg-zinc-600 text-white">Username</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-t hover:bg-zinc-400 hover:text-black"
                  >
                    <td className="py-2 px-4">
                      <img
                        src={user.profilePicture}
                        alt="user"
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="py-2 px-4">{user.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md bg-[#E3E4E8] dark:bg-black">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent comments</h1>
            <button className="rounded-md px-5 py-2 custom-outline hover:bg-pink-700 hover:text-white">
              <Link to={"/dashboard?tab=comments"}>See all</Link>
            </button>
          </div>
          <div className="container mx-auto px-6 py-8">
            <table className="min-w-full bg-transparent dark:bg-zinc-700 bg-zinc-300 rounded-md overflow-hidden">
              <thead>
                <tr>
                  <th className="py-2 px-5 bg-zinc-600 text-white">
                    Comment Content
                  </th>
                  <th className="py-2 px-5 bg-zinc-600 text-white">Likes</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => (
                  <tr
                    key={comment._id}
                    className="border-t hover:bg-zinc-400 hover:text-black"
                  >
                    <td className="py-4 px-5">
                      <p className="line-clamp-2">{comment.content}</p>
                    </td>
                    <td className="py-4 px-5">{comment.numberOfLikes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-md p-2 rounded-md bg-[#E3E4E8] dark:bg-black">
          <div className="flex justify-between p-3 text-sm font-semibold">
            <h1 className="text-center p-2">Recent posts</h1>
            <button className="rounded-md px-5 py-2 custom-outline hover:bg-pink-700 hover:text-white">
              <Link to={"/dashboard?tab=users"}>See all</Link>
            </button>
          </div>
          <div className="container mx-auto px-4 py-8">
            <table className="min-w-full dark:bg-zinc-700 bg-zinc-300 bg-transparent rounded-md overflow-hidden">
              <thead className="bg-zinc-600 text-white">
                <tr>
                  <th className="py-3 px-5">Post image</th>
                  <th className="py-3 px-5">Post Title</th>
                  <th className="py-3 px-5">Category</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post._id}
                    className="border-t hover:bg-zinc-400 hover:text-black"
                  >
                    <td className="py-4 px-5">
                      <img
                        src={post.image}
                        alt="post"
                        className="w-14 h-10 rounded-md bg-gray-500"
                      />
                    </td>
                    <td className="py-4 px-5 w-96">{post.title}</td>
                    <td className="py-4 px-5 w-5">{post.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardComp;
