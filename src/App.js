import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe.js'

const App = () => {

  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('food')

  const id = '162e4be2';
  const key = '54aa4d0dba755d11e10f1f0a5d55902c';
  const api = `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

  useEffect(() => {
    fetchRecipes()
    //eslint-disable-next-line
  }, [query])

  const fetchRecipes = () => {
		fetch(api)
		.then(response=>response.json())
		.then(data=>setRecipes(data.hits))
	}

  const searchRecipe = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
  }
  return (
    <div >
      <h1> Freshy Food </h1>
      <form className="search" onSubmit={getSearch}>
        <input type="text" placeholder="Search your recipe..." id="inputRecipe" value={search}
          onChange={searchRecipe} />
        <button id='searchRecipe' type='submit'>Search</button>
      </form>
      <div style={{display:'flex', flexWrap: 'wrap'}}>
      {recipes.map((recipe, index) => (
        <Recipe label={recipe.recipe.label} key = {index}
          calories={Math.round(recipe.recipe.calories)}
          image={recipe.recipe.image}
          ingredient={recipe.recipe.ingredientLines}

        />
      ))}
      </div>
    </div>
  );
}

export default App;
