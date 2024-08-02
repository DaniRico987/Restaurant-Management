import "./carruselCategories.css";

const CarruselCategories: React.FC<{}> = () => {
  const categories: string[] = [
    "Hamburguesas",
    "Pizzas",
    "Perros",
    "Cubanisimos",
    "Sandwiches",
    "Salchipapas",
    "Combos",
  ];

  return (
    <div className="categorieContainer">
      {categories.map((category) => (
        <div className="categorieCard" key={category}>
          <h3 className="categorieTitle font-LYLAS">
            {category}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CarruselCategories;
