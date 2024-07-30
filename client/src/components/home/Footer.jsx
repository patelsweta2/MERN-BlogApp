import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const Footerc = () => {
  return (
    <footer className="bg-[#E3E4E8] dark:bg-black border-t-8 border-red-500">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-lg text-white">
                NamasteNest
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <h5 className="text-lg font-semibold dark:text-white">About</h5>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Js Project
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    NamasteNest Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    HTML/CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold dark:text-white">
                Follow us
              </h5>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold dark:text-white">Legal</h5>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 mt-7 border-gray-300 dark:border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <span className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} NamasteNest Blog. All rights reserved.
          </span>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <BsFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <BsInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <BsTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              <BsGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    // <Footer
    //   container
    //   className="border bg-[#E3E4E8] border-t-8 border-red-500 dark:bg-black"
    // >
    //   <div className="w-full max-w-7xl mx-auto ">
    //     <div className="grid w-full justify-between sm:flex md:grid-cols-1">
    //       <div className="mt-5">
    //         <Link
    //           to="/"
    //           className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
    //         >
    //           <span className="px-2 py-1 bg-gradient-to-r from-yellow-500 via-red-500 to-yellow-500 rounded-lg text-white">
    //             NamasteNest
    //           </span>
    //           Blog
    //         </Link>
    //       </div>
    //       <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
    //         <div>
    //           <Footer.Title title="About" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
    //               Js Project
    //             </Footer.Link>
    //             <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
    //               NamasteNest Blog
    //             </Footer.Link>
    //             <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
    //               HTML/CSS
    //             </Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Follow us" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
    //               Github
    //             </Footer.Link>
    //             <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
    //               Discord
    //             </Footer.Link>
    //             <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
    //               Facebook
    //             </Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //         <div>
    //           <Footer.Title title="Legal" />
    //           <Footer.LinkGroup col>
    //             <Footer.Link href="#">Privacy Policy</Footer.Link>
    //             <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
    //           </Footer.LinkGroup>
    //         </div>
    //       </div>
    //     </div>
    //     <Footer.Divider />
    //     <div className="w-full sm:flex sm:items:center sm:justify-between">
    //       <Footer.Copyright
    //         href="#"
    //         by="NamasteNest blog"
    //         year={new Date().getFullYear()}
    //       />
    //       <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
    //         <Footer.Icon href="#" icon={BsFacebook} />
    //         <Footer.Icon href="#" icon={BsInstagram} />
    //         <Footer.Icon href="#" icon={BsTwitter} />
    //         <Footer.Icon href="#" icon={BsGithub} />
    //       </div>
    //     </div>
    //   </div>
    // </Footer>
  );
};

export default Footerc;
