const Header = () => {

    const cart = [
  
        { id: 1, product: "Machine à laver", quantity: 1 },
        
        { id: 2, product: "Télévision", quantity: 1 },
        
        { id: 4, product: "Tablette", quantity: 1 },
        ];

    const user = {
  
        firstName: "John",
        
        lastName: "Doe",
        
        };

    let nbrArticles = 0;

    cart.forEach((product) => {
        nbrArticles += product.quantity;
    })

    return (
      <header className="App-header">
            <img src = "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph%22," alt = "logo" width = "150"/>  
           
            <p>Bienvenue {user.firstName} {user.lastName}</p>
           
            <p>Panier: {nbrArticles} articles</p>
      </header>
    );
  };

export default Header;