import { Link } from "react-router-dom";
import { CallToAction, PostCard } from "../components";
import { useEffect, useState } from "react";
import Hero from "../components/home/Hero";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/server/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Hero />
      <div className="p-3 bg-amber-100 dark:bg-black">
        <CallToAction />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col py-8 gap-8">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-yellow-600 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
