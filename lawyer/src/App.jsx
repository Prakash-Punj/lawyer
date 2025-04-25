import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import "@fontsource/poppins";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/Layout/AppLayout";

import './App.css';

import { Home } from "./Pages/Home";
import { Wrap_1 } from "./Pages/Wrap-1";
import { Contact } from "./Pages/Contact";
import ScrollToTopButton from './components/scroll';
import LeftSideIcons from './components/left_icon';
import { Wrap_3 } from './Pages/Wrap-3';

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "user-contact",
        element: <Wrap_1 />
      },
      {
        path: "services",
        element: <Wrap_3 />
      },
      
      {
        path: "contact",
        element: <Contact />
      },
      
    ]
  }
]);


const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider> ;
      <ScrollToTopButton />
      <LeftSideIcons />
    </>
  )
}

export default App;