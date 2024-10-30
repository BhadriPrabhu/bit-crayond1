import { useState,useEffect } from "react";


const data = [
  {name: 'Apple'},
  {name: 'Banana', category: 'Fruit' },
  {name: 'Carrot', category: 'Vegetable' },
  {name: 'Broccoli', category: 'Vegetable' },
  {name: 'Mango', category: 'Fruit' },
  {name: 'Lettuce', category: 'Vegetable' },
];

const SearchBarWithSuggestions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearchTerm = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesSearchTerm;
    });
    setFilteredData(filtered);
  }, [searchTerm]);

  return (
    <div>
      
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarWithSuggestions;