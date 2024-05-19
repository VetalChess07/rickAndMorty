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



// import React, { useState } from 'react';
// import { FixedSizeGrid as Grid } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';
// import axios from 'axios';
// import CardEl from './Card';

// const columnCount = 4;

// function App() {
//   const [characters, setCharacters] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [hasMoreCharacters, setHasMoreCharacters] = useState(true);
//   const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character?page=1');

//   const loadMoreCharacters = async () => {
//    console.log('fff')
//     if (isLoading || !hasMoreCharacters) {
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const { data } = await axios.get(nextPage);
//       const newCharacters = data.results;

//       setIsLoading(false);
//       setHasMoreCharacters(data.info.next !== null);
//       setNextPage(data.info.next);
//       setCharacters(prevCharacters => [...prevCharacters, ...newCharacters]);
//     } catch (error) {
//       console.error('Failed to load characters:', error);
//       setIsLoading(false);
//     }
//   };

//   const isCharacterLoaded = index => index < characters.length;

//   const Cell = ({ columnIndex, rowIndex, style }) => {
//     const itemIndex = rowIndex * columnCount + columnIndex;
//     const item = characters[itemIndex];

//     return (
//       <div style={{ ...style, padding: '10px', boxSizing: 'border-box' }}>
//         {item ? <CardEl id={item.id} name={item.name} img={item.image} /> : 'Loading...'}
//       </div>
//     );
//   };

//   // Initial load of characters if not already loading
//   if (!isLoading && characters.length === 0 && hasMoreCharacters) {
//     loadMoreCharacters();
//   }

//   const rowCount = Math.ceil(characters.length / columnCount);

//   return (
//     <InfiniteLoader
//       isItemLoaded={isCharacterLoaded}
//       itemCount={hasMoreCharacters ? characters.length + columnCount : characters.length}
//       loadMoreItems={loadMoreCharacters}
//     >
//       {({ onItemsRendered, ref }) => (
//         <Grid
//           style={{ overflowX: 'hidden' }}
//           className="inner"
//           columnCount={columnCount}
//           columnWidth={267}
//           height={800}
//           rowCount={rowCount}
//           rowHeight={300}
//           width={1068}
//           onItemsRendered={({ visibleRowStartIndex, visibleRowStopIndex }) =>
//             onItemsRendered({
//               overscanStartIndex: visibleRowStartIndex * columnCount,
//               overscanStopIndex: visibleRowStopIndex * columnCount + columnCount,
//               visibleStartIndex: visibleRowStartIndex * columnCount,
//               visibleStopIndex: visibleRowStopIndex * columnCount + columnCount,
//             })
//           }
//           ref={ref}
//         >
//           {Cell}
//         </Grid>
//       )}
//     </InfiniteLoader>
//   );
// }

// export default App;


