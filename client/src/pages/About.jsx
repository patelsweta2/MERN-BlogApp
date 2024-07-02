import React from "react";

function About() {
  return (
    <div className="mt-20 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About NamasteNest's Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to NamasteNest, your digital sanctuary for
              thought-provoking content, where words weave stories, ideas take
              flight, and a community of curious minds gathers
            </p>
            <p>
              Stay tuned for regular updates as we delve into the latest trends,
              share expert advice, and bring you engaging content that caters to
              both the curious minds and the seasoned enthusiasts.
            </p>
            <p>
              What sets us apart? Uncover unique perspectives, expert insights,
              and a touch of creativity in every post. We're not just a blog;
              we're your companion on a journey of discovery
            </p>
            <p>
              Ready to embark on a journey of exploration and inspiration? Dive
              into our latest posts, join the conversation, and become a part of
              the ever-growing NamasteNest community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
