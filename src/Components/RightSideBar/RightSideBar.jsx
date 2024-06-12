import React from 'react';
import Search from './Search.jsx';
import Trending from './Trending.jsx';

const RightSideBar = () => {
    return (
        <div style={styleDiv} >
            <Search></Search>
            <Trending></Trending>
        </div>
    );
}

export default RightSideBar;

const styleDiv={
    position:"relative",
    left:"20%"
}
