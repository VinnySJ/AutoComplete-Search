import React, { useState } from 'react';

const tmp = [];
for (let i = 0; i < 10; i++) tmp.push({ id: i, val: `prefixo ${i}` });

function SearchBar() {

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);

  const handleInputChange = (e) => {
    const text = e.target.value;

    if (text.length >= 4) {
      setDisplaySuggestions(true);
    } else setDisplaySuggestions(false);

    setQuery(text);
  };

  const handleChooseSuggestion = (value) => {
	setQuery(value);
	setDisplaySuggestions(false);
  }
  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="font-bold">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center mt-4">

      <div className="flex items-center justify-center">
        <div className="relative">
          <input
            type="text"
            className= "w-96 max-w-md p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          {displaySuggestions && (
            <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
              {tmp
				.filter((ele) => ele.val.toLowerCase().includes(query.toLowerCase()))
			  	.map((ele) => (
                	<div key={ele.id} 
					className="p-2 hover:bg-blue-100 cursor-pointer"
					onClick={() => handleChooseSuggestion(ele.val)}>
                  	{/* {ele.val} */}
					{getHighlightedText(ele.val, query)}
                </div>
              ))}
            </div>
          )}
        </div>
        <button className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
