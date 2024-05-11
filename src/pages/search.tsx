import React, { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const { search, setSearch } = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
const isNextPage=page<4
const isPrevPage=page>1;
  return (
    <div className="product-search-page">
      Search
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={() => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price(Low to High)</option>
            <option value="dsc">Price(High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price :{maxPrice || ""}</h4>
          <input
            type="range"
            value={maxPrice}
            min={100}
            max={1000}
            onChange={() => setMaxPrice(Number(e.target.value))}
          ></input>
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={() => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="">Sample 1</option>
            <option value="">Sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          onChange={() => setSearch(e.target.value)}
          value={search}
        ></input>
        <div className="search-product-list">
          <ProductCard />
        </div>
        <article>
          <button onClick={()=>setPage((prev)=>prev-1)} disabled={!isPrevPage}>Prev</button>
          <span>
            {page} of {4}
          </span>
          <button  onClick={()=>setPage((prev)=>prev+1)} disabled={!isNextPage}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
