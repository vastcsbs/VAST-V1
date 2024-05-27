import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Choose,
  ChooseFreelancing,
  CodeStore,
  FreelanceBuy,
  FreelancePost,
  Home,
  HomeLayout,
  Landing,
  Login,
  Register,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            index: true,
            element: <Choose />,
          },
          {
            path: "choose-freelancing",
            element: <ChooseFreelancing />,
          },
          {
            path: "code-store",
            element: <CodeStore />,
          },
          {
            path: "freelance-buy",
            element: <FreelanceBuy />,
          },
          {
            path: "freelance-post",
            element: <FreelancePost />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
