import React from "react";
import BookSearch from "./components/BookSearch";
import './App.css'
import { useState } from "react";
import SearchContext from "./context/SearchContext";


const App = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <div className="App">

      <SearchContext.Provider
      value={{
        searchText: searchText,
        setSearchText: setSearchText,
        title: 'books',
      }}
      >
        <BookSearch />
      </SearchContext.Provider>
     
      
    </div>
  );
};

export default App;
