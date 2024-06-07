import React, { useState } from 'react';
import styles from "../../styles/search.module.css"
import { useDispatch } from 'react-redux';
import { SearchingAction } from '../../Redux/store/slices/SearchingPostsSlices';

const Search = () => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    const handleEnter = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
           dispatch(SearchingAction(inputValue));
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
