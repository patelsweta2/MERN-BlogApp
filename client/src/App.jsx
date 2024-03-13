import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Search,
  About,
  SignIn,
  SignUp,
  Dashboard,
  Projects,
  CreatePost,
  UpdatePost,
  PostPage,
} from "./pages";
import {
  Header,
  Footer,
  PrivateRoute,
  OnlyAdminPrivateRoute,
  ScrollToTop,
} from "./components";
import Headroom from "react-headroom";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Headroom>
        <Header />
      </Headroom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:postId" element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
