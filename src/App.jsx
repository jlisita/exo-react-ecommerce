import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  
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

  let lastProducts = products.filter((product,index,arr) => {
    return index >= arr.length - 3;
  })

  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
};

export default App;
