import "./scss/app.scss";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Layout from "./components/Layout/Layout";
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CartPage = lazy(() => import("./pages/CartPage/CartPage"));

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
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "/cart",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
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
