import "./scss/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";

function App() {
  // const [searchValue, setSearchValue] = useState("");

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/cart",
            element: <CartPage />,
          },
        ],
      },
    ],
    {
      basename: "/react-pizza",
    }
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
