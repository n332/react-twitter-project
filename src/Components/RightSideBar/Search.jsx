import React, { useState } from 'react';
import styles from "../../styles/search.module.css"

const Search = () => {
    const [inputValue, setInputValue] = useState('');

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
           console.log(inputValue);
        }
    }
    return (
        <div className={styles.searchContainer}>
            <img style={{width: '10%', backgroundColor: '#000000'}} src="/Assets/SI.png" alt="" />
            <input 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                style={{backgroundColor: '#000000ac'}} 
                type="text" 
                id="myInput" 
                placeholder="search" 
                onKeyPress={handleEnter}
            />
        </div>
    );
}

export default Search;
