import React, { useState } from 'react';
import { getData } from '../data/get_request.js';


function SearchBar() {
    // I guess there is a better way to handle multiple hooks...
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [displaySuggestions, setDisplaySuggestions] = useState(false);

    // Get request
    const getSearchSuggestions = (text) => {
        const url = "http://localhost:8080/graphql/user_text/?user_text=";
        getData(url, text).then((data_result) => {
            setSuggestions(data_result);
        })
    }

    // Updates user text (query) value
    const handleInputChange = (user_text) => {
        const text = user_text.target.value;
        console.log(text);
        setDisplaySuggestions(text.length >= 4);
        setQuery(text);
        getSearchSuggestions(text);
    }

    // If user clicks, remove all suggestions and "process" the search
    const handleChooseSuggestion = (value) => {
        setQuery(value);
        setDisplaySuggestions(false);
    }

    // Highlights the prefix of user's text
    const getHighlightedText = (text, highlight) => {
        highlight = highlight.trimEnd();
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, i) => part.toLowerCase() === highlight.toLowerCase() ? 
                    <span key={i} className="font-bold">
                    {part}
                    </span>
                : part
                )}
            </span>
        )
    }

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
                <div className="max-h-[400px] overflow-y-auto absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                {suggestions
                .map((searchSuggestions) => (
                    <div key={searchSuggestions.id} 
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleChooseSuggestion(searchSuggestions.text)}>
                        {getHighlightedText(searchSuggestions.text, query)}
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
    )
}

export default SearchBar;
