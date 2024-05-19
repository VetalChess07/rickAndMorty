import { useState } from 'react'

import './App.css'
import AppRoutes from './components/appRoutes/AppRoutes'

function App() {
 

  return (
    <>
     <AppRoutes/>
    </>
  )
}

// export default App


// import React, { useEffect, useState } from 'react';
// import { FixedSizeGrid as Grid } from 'react-window';
// import axios from 'axios';
// import CardEl from './Card';

// const columnCount = 4;

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [page, setPage] = useState(1);

//   const getPosts = async (page) => {
//     const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
//     const { results } = data;
//     if (results && page==1) {
//       setPosts(results);
//     }else if(results){
//       setPosts(prev => [...prev, ...results]);
//     }

//   };

//   useEffect(() => {
//     getPosts(page);
//   }, [page]);

//   const onClickButton = () => {
//     setPage(prev => prev + 1);
//   };

//   console.log(posts)

//   const Cell = ({ columnIndex, rowIndex, style }) => {
  
//     const itemIndex = rowIndex * columnCount + columnIndex;
//     const item = posts[itemIndex];

//     if (!item) {
//       return null;
//     }

//     return (
//       <div style={{ ...style, padding: '13px', boxSizing: 'border-box' }}>
//         <CardEl id={item.id} name={item.name} img={item.image} />
//       </div>
//     );
//   };

//   const rowCount = Math.ceil(posts.length / columnCount);

//   return (
//     <div className="App">
//       {posts.length > 0 ? (
//         <Grid
//         columnCount={columnCount}
//         columnWidth={267}  // Увеличиваем ширину колонки
//         height={1000}
//         rowCount={rowCount}
//         rowHeight={300}  // Увеличиваем высоту строки
//         width={1040}   
//         >
//           {Cell}
//         </Grid>
//       ) : (
//         <h2>Loading...</h2>
//       )}
//       <button onClick={onClickButton}>New posts</button>
//     </div>
//   );
// }

// export default App;
