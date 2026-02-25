import React, { useState } from "react"; 
import products from "./Product";  
import "./Style.css"
function SearchFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filteredProducts = products.filter((item) => {

    const matchName = item.name
      .toLowerCase()
      .includes(search.toLocaleLowerCase());

    const matchCategory = category === "" || item.category === category;
    debugger
    return matchName && matchCategory;
  });

  return (
    <>
      <div>
        <h1> Product Search </h1>
        <input
          type="text"
          placeholder="search product"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value={""}>All</option>
          <option>Mobile</option>
          <option>Laptop</option>
          <option>Accessories</option>
        </select>

        <div className="list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div key={item.id} className="card">
                <h3>{item.name}</h3>
                <p>{item.category}</p>
              </div>
            ))
          ) : (
            <h2 className="no">No results found</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
