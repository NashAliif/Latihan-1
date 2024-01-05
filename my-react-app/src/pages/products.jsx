import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          numquam harum totam, dolore dignissimos at sapiente, quas
          consequuntur, facilis voluptate blanditiis tenetur sint ratione
          praesentium? Reiciendis quas officiis laborum ex!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="/images/shoes-1.jpg" />
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          numquam harum totam, dolore dignissimos at sapiente, quas
          consequuntur, facilis voluptate blanditiis tenetur sint ratione
          praesentium? Reiciendis quas officiis laborum ex!
        </CardProduct.Body>
        <CardProduct.Footer price="Rp 1.000.000" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
