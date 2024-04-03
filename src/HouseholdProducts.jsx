import Product from "./Product";

const HouseholdProducts = ({products}) => {

      let householdProduct = products.filter((product,index,arr) => {
        return product.category === "Electroménager";
        })

    return (
        <section>
            <h2>Produits électro-ménagers</h2>
                {householdProduct.map((product) => {
                return (
                    <Product product = {product}/>
                );
                })}
        </section>
    );
  };
  
export default HouseholdProducts;