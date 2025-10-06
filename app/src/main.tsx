import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { getProduct } from "./util";

import './index.css'

import App from "./App";
import ProductDetail from "./ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
    loader: ({ params }) => {
      const product = getProduct(params.productId!);
      if (!product) {
        return <div>Product not found</div>;
      }
      return product;
    }
  }
]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
