import React from 'react'
import { useState, useEffect } from 'react'
import './Shop.css'
import '../pages/shared.css'

function ShopPage() {
  const [items, setItems] = useState([]);
  const [productTypeFilter, setProductTypeFilter] = useState(""); // For productType column
  const [sortOption, setSortOption] = useState("price-asc"); // sort options


  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/shopItems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Error fetching shop items:', err));
  }, []);

  const filteredSortedItems = items
    .filter(item => (productTypeFilter ? item.prodType === productTypeFilter : true))
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "title-asc": return a.title.localeCompare(b.title);
        case "title-desc": return b.title.localeCompare(a.title);
        default: return 0;
      }
    });

  return (
    <>
      <h1 id="libr__h1">Browse through the Library!</h1>

      <div className="controls">
        <label>
          Product Type:
          <select value={productTypeFilter} onChange={e => setProductTypeFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Book">Books</option>
            <option value="Comics">Comics</option>
            <option value="Manga">Manga</option>
            <option value="DVD">DVDs</option>
            <option value="CD">CDs</option>
            <option value="Vinyl">Vinyls</option>
          </select>
        </label>

        <label>
          Sort by:
          <select value={sortOption} onChange={e => setSortOption(e.target.value)}>
            <option value="price-asc">Price Low &#10095; High</option>
            <option value="price-desc">Price High &#10095; Low</option>
            <option value="title-asc">Title A &#10095; Z</option>
            <option value="title-desc">Title Z &#10095; A</option>
          </select>
        </label>
      </div>

      <main>
        <div id="bookGrid">
          {filteredSortedItems.map((item) => (
            <div key={item.id} id="gridBox_div">
              <img src={item.imageUrl} id="covers__img" alt={item.title} />
              <div className='itemText'>
                <p><b>{item.title}</b></p>
                <p>{item.prodDesc}</p>
                <p><b>{item.genre}</b></p>
                <p><b>${item.price}</b></p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default ShopPage