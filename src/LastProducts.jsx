import Product from "./Product";

const LastProducts = ({products}) => {
    
      const productSortedBydate = products.sort((a,b) => {
      return new Date(b.publishedAt) - new Date(a.publishedAt)});
      let lastProducts = productSortedBydate.filter((product,index,arr) => {
        return index >= arr.length - 3;
      })
    
    return (
      <section>
        <h2>Derniers produits</h2>
          {lastProducts.map((product) => {
          return (
            <Product product = {product}/>
          );
        })}
      </section>

    );
  };

export default LastProducts;