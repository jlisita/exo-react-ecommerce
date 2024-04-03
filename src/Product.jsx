const Product = ({product}) => {

    return (
        <article>
            <h3>{product.name}</h3>
            <img src = "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph%22," alt = "logo" width = "80"/>  
            <p>Prix: {product.price} euros</p>
            <p>Catégorie: {product.category}</p>
            <button>Acheter maintenant</button>
        </article> 
    );
};

export default Product;