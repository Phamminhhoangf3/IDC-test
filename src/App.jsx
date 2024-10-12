import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "@mantine/core/styles.css";
import Layout from "./layout";
import Home from "./pages/home";
import Contract from "./pages/contract";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: () => ({ message: "Hello Data Router!" }),
        element: <Home />,
      },
      {
        path: "/contract",
        loader: () => ({ message: "Hello Data Router!" }),
        element: <Contract />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
