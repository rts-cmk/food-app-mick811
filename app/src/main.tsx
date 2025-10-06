import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { getProduct, getProducts, type Product } from "./util";

import './index.css'

import App from "./App";
import ProductDetail from "./ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      const products = getProducts() as Product[];
      if(!products) {
        throw new Response("Not Found", { status: 404 });
      }
      return products;
    }
  },
  {
    path: "/products/:productId",
    element: <ProductDetail />,
    loader: ({ params }) => {
      const product = getProduct(params.productId!) as Product;
      if (!product) {
        throw new Response("Not Found", { status: 404 });
      }
      return product;
    }
  }
]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
