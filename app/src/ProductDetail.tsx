import { useLoaderData } from "react-router";

export default function ProductDetail() {
    const product = useLoaderData();
    console.log(product);

    return <>
        <div>Product</div>
        <div>{JSON.stringify(product)}</div>
    </>
}