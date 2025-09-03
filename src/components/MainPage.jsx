import React from 'react'
import { useState , useEffect } from 'react';
import MealCard from './MealCard';

function MainPage() {

  const [search , setSearch] = useState('');
  const [data , setData] = useState([]);

  const handleInput = (event) => {
    setSearch(event.target.value);
  }

  const handleSearch = async() => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const jsonData = await data.json();
    setData(jsonData.meals);
  }

  useEffect(() => {
    const fetchAllMeals = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const jsonData = await response.json();
      setData(jsonData.meals);
    };
    fetchAllMeals();
  }, []);

  return (
    <div className=' w-full  '>
        <h1 className='text-5xl font-bold flex justify-center my-10 '>Food <span className='text-yellow-500'>Recipe</span> Hub</h1>
        <div className='flex justify-center searchBox p-3 mt-10 gap-3 text-xl'>
            <input type="text" className='text-lg px-5 border-2 bg-amber-50 border-black rounded-lg' onChange={handleInput} placeholder='Search for meals '/>
            <button className='bg-yellow-400 px-5 py-2 rounded-xl ' onClick={handleSearch}>Search</button>  
        </div>

        <div>
          <MealCard detail = {data}/>
        </div>
    </div>
  )
}

export default MainPage