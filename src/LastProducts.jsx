const LastProducts = () => {

    const products = [

        { id: 1, name: "Machine à laver", price: 100, category: "Electroménager", publishedAt: "2021-01-01" },
        
        { id: 2, name: "Télévision", price: 200, category: "Electroménager", publishedAt: "2021-01-02" },
        
        { id: 3, name: "Ordinateur", price: 300, category: "Informatique", publishedAt: "2021-05-01" },
        
        { id: 4, name: "Tablette", price: 150, category: "Informatique", publishedAt: "2024-07-01" },
        
        { id: 5, name: "Téléphone", price: 100, category: "Téléphonie", publishedAt: "2021-10-10" },
        
        { id: 6, name: "Four", price: 200, category: "Electroménager", publishedAt: "2020-01-30" },
        
        { id: 7, name: "Réfrigérateur", price: 300, category: "Electroménager", publishedAt: "2023-05-01" }, 
        
        { id: 8, name: "Aspirateur", price: 150, category: "Electroménager", publishedAt: "2021-07-01" }, 
        
        { id: 9, name: "Cafetière", price: 100, category: "Electroménager", publishedAt: "2021-10-10" }, 
        
        { id: 10, name: "Bouilloire", price: 200, category: "Electroménager", publishedAt: "2021-01-01" },
      ];
    
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
            <>
              <h3>{product.name}</h3>
              <img src = "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph%22," alt = "logo" width = "80"/>  
              <p>Prix: {product.price} euros</p>
              <p>Catégorie: {product.category}</p>
              
            </>
          );
        })}
      </section>

    );
  };

export default LastProducts;