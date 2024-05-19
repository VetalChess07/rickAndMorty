# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

import React, { useEffect, useState } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import axios from 'axios';
import CardEl from './Card';

const columnCount = 4;

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  const getPosts = async (page) => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);
    const { results } = data;
    if (results && page==1) {
      setPosts(results);
    }else if(results){
      setPosts(prev => [...prev, ...results]);
    }

  };

  useEffect(() => {
    getPosts(page);
  }, [page]);

  const onClickButton = () => {
    setPage(prev => prev + 1);
  };

  console.log(posts)

  const Cell = ({ columnIndex, rowIndex, style }) => {
  
    const itemIndex = rowIndex * columnCount + columnIndex;
    const item = posts[itemIndex];

    if (!item) {
      return null;
    }

    return (
      <div style={{ ...style, padding: '13px', boxSizing: 'border-box' }}>
        <CardEl id={item.id} name={item.name} img={item.image} />
      </div>
    );
  };

  const rowCount = Math.ceil(posts.length / columnCount);

  return (
    <div className="App">
      {posts.length > 0 ? (
        <Grid
        columnCount={columnCount}
        columnWidth={267}  // Увеличиваем ширину колонки
        height={1000}
        rowCount={rowCount}
        rowHeight={300}  // Увеличиваем высоту строки
        width={1040}   
        >
          {Cell}
        </Grid>
      ) : (
        <h2>Loading...</h2>
      )}
      <button onClick={onClickButton}>New posts</button>
    </div>
  );
}

export default App;

