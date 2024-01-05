import CardProduct from "../components/Fragments/CardProduct";

const product = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 1.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima numquam harum totam, dolore dignissimos at sapiente, quasconsequuntur, facilis voluptate blanditiis tenetur sint ratione praesentium? Reiciendis quas officiis laborum ex!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 500.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Ada Dong",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Ini adalah sepatu baru`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {product.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
