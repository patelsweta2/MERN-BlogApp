import { Link } from "react-router-dom";
import { CallToAction, PostCard } from "../components";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Home() {
  const [posts, setPosts] = useState([]);
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/server/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          variants={variants}
          className="text-3xl font-bold lg:text-6xl"
        >
          <span>Welcome to {""}</span>
          <span className="text-coral-red inline-block mt-3">NamasteNest</span>
        </motion.h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Welcome to our corner of the internet, where stories are told, ideas
          are shared, and conversations flourish. Enjoy the journey with us!
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div className="max-w-4xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
