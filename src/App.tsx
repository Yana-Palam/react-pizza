import "./scss/app.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React, { Suspense } from "react";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import HomePage from "./pages/HomePage/HomePage";
import CartPage from "./pages/CartPage/CartPage";

const App: React.FC = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "/cart",
            element: (
              <Suspense fallback={<Loader />}>
                <CartPage />
              </Suspense>
            ),
          },
          {
            path: "*",
            element: <Navigate to="/" replace />,
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
};

export default App;
