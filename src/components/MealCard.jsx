import React from 'react'
import { NavLink } from 'react-router-dom';

function MealCard({detail}) {

    console.log(detail);

  return (
    // <div className=' flex flex-wrap justify-start gap-10 m-10 '>
       <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10 '>
        {!detail ? "No Data Found" : detail.map((item) => {
            return (
                
                <div key={item.idMeal} className='bg-amber-100 rounded-2xl p-5 mt-10 gap-5 '>
                    <img src={item.strMealThumb} alt={item.strMeal} className='w-72 h-72 rounded-lg object-cover'/>
                    <h1 className='text-2xl flex justify-center font-semibold m-4'>{item.strMeal}</h1>
                    <h2 className='text-sm font-medium m-2'>Category : {item.strCategory}</h2>
                    <h2 className='text-sm font-medium m-2'>Cuisine : {item.strArea}</h2>
                    <NavLink className='flex justify-center' to={`/${item.idMeal}`}><button onClick={item.strSource}  className='text-lg bg-yellow-400 mt-5 px-4 py-2 rounded-xl'>Recipe</button></NavLink>
                </div>
                
            )

        })}
    </div>
  )
}

export default MealCard