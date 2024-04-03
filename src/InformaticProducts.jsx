import Product from "./Product";

const InformaticProducts = ({products}) => {

      let InformaticProducts = products.filter((product,index,arr) => {
        return product.category === "Informatique";
        })

    return (
        <section>
            <h2>Produits Informatiques</h2>
                {InformaticProducts.map((product) => {
                return (
                    <Product product = {product}/>
                );
                })}
        </section>
    );
  };
  
export default InformaticProducts;