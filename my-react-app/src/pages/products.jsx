import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
// import Button from "../components/Elements/Button";
// import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
// import { getUsername } from "../services/auth.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

// const products = [
//   {
//     id: 1,
//     name: "Sepatu Baru",
//     price: 1000000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam harum totam, dolore dignissimos at sapiente, quasconsequuntur, facilis voluptate blanditiis tenetur sint ratione praesentium? Reiciendis quas officiis laborum ex!`,
//   },
//   {
//     id: 2,
//     name: "Sepatu Lama",
//     price: 500000,
//     image: "/images/shoes-1.jpg",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
//   },
//   {
//     id: 3,
//     name: "Sepatu Ada Dong",
//     price: 2000000,
//     image: "/images/shoes-1.jpg",
//     description: `Ini adalah sepatu baru`,
//   },
// ];

const ProductsPage = () => {
  // // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id, qty: 1 }]);
  //   }
  // };

  //useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  return (
    <Fragment>
      <Navbar />
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  id={product.id}
                  price={product.price}
                  // handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
      {/* <div className="mt-5 flex justify-center mb-3">
        <Counter></Counter>
      </div> */}
    </Fragment>
  );
};

export default ProductsPage;
