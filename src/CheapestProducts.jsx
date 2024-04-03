import Product from "./Product";

const CheapestProducts = ({products}) => {

      const productsSortedByPrice = products.sort((product1, product2) =>  {
        return product1.price - product2.price
        });
      const cheapest3products =  productsSortedByPrice.filter((product,index) => {
        return index < 3;
        }) 


    return (
        <section>
            <h2>Produits les moins chers</h2>
            { cheapest3products.map((product) => {
            return (
              <Product product = {product}/>
            );
            })}
        </section>
    );
  };

export default CheapestProducts;