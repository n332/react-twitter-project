## Project Structure   
```
|   App.css
|   App.js
|   App.test.js
|   index.css
|   index.js
|   reportWebVitals.js
|   setupTests.js
|   
+---Components
|   +---LeftSideBar
|   |       fileToRemove
|   |       
|   +---Main
|   |       searching-posts.jsx
|   |       trending-posts.jsx
|   |       
|   +---Posts
|   \---RightSideBar
|           RightSideBar.jsx
|           Search.jsx
|           Trending.jsx
|           
+---Pages
|   |   Home.jsx
|   |   
|   \---Login
|           fileToRemove
|           
+---Redux
|   \---store
|       |   store.js
|       |   
|       \---slices
|               fileToRemove
|               
\---styles
        home.module.css
        search.module.css
        trending.module.css
```
| Folder | Files |
| ------ | ------ |
| LeftSideBar | add the needed components and make  LeftSideBar.jsx their parent [[add to Pages/Home.jsx]]|
| Main| searching-posts, searching-posts, profile,Home(feed)[[ router outlet]] [[add to Pages/Home.jsx]]|
| RightSideBar| add the needed components and make  RightSideBar.jsx their parent [[add to Pages/Home.jsx]]|
|Login| add login needed components here|
