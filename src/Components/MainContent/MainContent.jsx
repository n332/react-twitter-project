import React from 'react';
import Header from '../Header/Header';
import TweetBox from '../TweetBox/TweetBox';
import Posts from '../Posts/Posts';

const MainContent = () => {
    return (
        <div>
            <Header />
            <TweetBox />
            <Posts />
        </div>
    );
}

export default MainContent;
