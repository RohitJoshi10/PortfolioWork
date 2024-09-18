import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Skills from "../src/Pages/Skills/Skills";
import Projects from "../src/Pages/Projects/Projects";
import Contact from "../src/Pages/Contact/Contact";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
