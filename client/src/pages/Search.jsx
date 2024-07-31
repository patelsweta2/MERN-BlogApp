import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PostCard } from "../components";

const Search = () => {
  const [sidebarData, setSideBarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    const sortFromUrl = urlParams.get("sort");
    const categoryFromUrl = urlParams.get("category");
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSideBarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }
    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/server/post/getposts?${searchQuery}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
        if (data.posts.length === 9) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === "searchTerm") {
      setSideBarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === "sort") {
      const order = e.target.value || "desc";
      setSideBarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === "category") {
      const category = e.target.value || "uncategorized";
      setSideBarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", sidebarData.searchTerm);
    urlParams.set("sort", sidebarData.sort);
    urlParams.set("category", sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`/server/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      if (data.posts.length === 9) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  return (
    // <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
    //   <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
    //     <div className="flex items-center gap-2">
    //       <label className="whitespace-nowrap font-semibold">
    //         Search Term:{" "}
    //       </label>
    //       <input
    //         placeholder="Search..."
    //         id="searchTerm"
    //         type="text"
    //         value={sidebarData.searchTerm}
    //         onChange={handleChange}
    //         className="border rounded-md p-2"
    //       />
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <label className="font-semibold">Sort:</label>
    //       <select
    //         onChange={handleChange}
    //         value={sidebarData.sort}
    //         id="sort"
    //         className="border rounded-md p-2"
    //       >
    //         <option value="desc">Latest</option>
    //         <option value="asc">Oldest</option>
    //       </select>
    //     </div>
    //     <div className="flex items-center gap-2">
    //       <label className="font-semibold">Category:</label>
    //       <select
    //         onChange={handleChange}
    //         value={sidebarData.category}
    //         id="category"
    //         className="border rounded-md p-2"
    //       >
    //         <option value="uncategorized">Uncategorized</option>
    //         <option value="reactjs">React.js</option>
    //         <option value="nextjs">Next.js</option>
    //         <option value="javascript">JavaScript</option>
    //       </select>
    //     </div>
    //     <button
    //       type="submit"
    //       className="border rounded-md p-2 text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white"
    //     >
    //       Apply Filters
    //     </button>
    //   </form>
    // </div>
    <div className="mt-20 flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">
              Search Term:{" "}
            </label>
            <input
              className="rounded-md p-2 border-red-400 outline-offset-0 focus:outline-none focus:border-none focus:ring-0 text-black"
              placeholder="Search..."
              id="searchTerm"
              type="search"
              value={sidebarData.searchTerm}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Sort:</label>
            <select
              className="block appearance-none w-auto bg-zinc-300 text-black rounded-md py-2 px-4 pr-8 border border-transparent focus:border-transparent focus:ring-0 custom-select"
              onChange={handleChange}
              value={sidebarData.sort}
              id="sort"
            >
              <option className="hover:bg-zinc-300" value="desc rounded-md">
                Latest
              </option>
              <option className="hover:bg-zinc-300" value="desc rounded-md">
                Oldest
              </option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold">Category:</label>
            <select
              className="block appearance-none w-auto bg-zinc-300 text-black rounded-md py-2 px-4 pr-8 border border-transparent focus:border-transparent focus:ring-0 custom-select"
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="nature">Nature</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>
          <button
            className="rounded-md outline border-white p-2 bg-amber-500 text-white hover:bg-pink-600 hover:shadow-lg transition duration-300 ease-in-out"
            type="submit"
          >
            Apply Filters
          </button>
        </form>
      </div>
      <div className="w-full">
        <h1 className="text-3xl font-semibold sm:border-b border-gray-500 p-3 mt-5">
          Posts results:
        </h1>
        <div className="p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}
          {!loading &&
            posts &&
            posts.map((post) => <PostCard key={post._id} post={post} />)}
          {showMore && (
            <button
              className="text-teal-500 text-lg hover:underline p-7 w-full"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
