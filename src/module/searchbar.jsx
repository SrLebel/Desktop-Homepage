import { useState, useRef, useEffect } from "react";

const SearchBar = () => {
  const [texto, setTexto] = useState('');
  const inputRef = useRef(null);

  const handlekeys = (event) => {
    if (event.key === 'Enter') {
      console.log("net");
      window.location.href = `https://www.google.com/search?q=${texto}`;
    } 
  }
  
  const handlechange = (event) => {
    setTexto(event.target.value);
  }

  useEffect(() =>{
    const globalkeys = (event) => {
        if (/^[0-9a-zA-Z]$/.test(event.key)) {
          inputRef.current.focus();
        }
    };
    
    document.addEventListener('keydown', globalkeys);
    return () => {
      document.removeEventListener('keydown', globalkeys);
    }
  }, []);

  return(
      <input
        className="bar"
        placeholder="look for something good ;)"
        type="search"
        onChange={handlechange}
        onKeyDown={handlekeys}
        ref={inputRef}
      /> 
  )
}

export default SearchBar;