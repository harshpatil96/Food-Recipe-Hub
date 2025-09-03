import React, { useEffect } from 'react'
import { useParams  } from 'react-router-dom';
import { useState } from 'react';

function MealInfo() {

  const {id} = useParams();
  const [info , setInfo] = useState();

  useEffect(() => {

    const fetchMealDetails = async() => {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const jsonData = await data.json();
    console.log(jsonData.meals[0]);
    setInfo(jsonData.meals[0]);
  }

  if(id !== ""){
    fetchMealDetails();
  }
    
  }, [id]);


  return (
    <div>
      {!info ? "No Data Found" :
      <div className='m-10 p-10 bg-amber-100 rounded-2xl flex flex-col items-center gap-10'>
      <h1 className='text-4xl font-bold flex justify-center mt-5'>Recipe Details</h1>
      <img  className='rounded-xl w-120 h-120' src={info.strMealThumb}/>
      <div className='flex align-center flex-col gap-5'>
        <button className='bg-yellow-400 mx-40 py-2 rounded-xl font-semibold text-2xl '>{info.strMeal}</button>
        <h3 className='font-bold  text-xl mt-5 mx-20'>Instructions :</h3>
        <p className='mx-20 mb-5 text-lg '>{info.strInstructions}</p>
      </div> 
      <div className='mt-5'>
        <h3 className='font-bold  text-xl mt-5 flex justify-center mb-5'>Explanation video :</h3>
        <iframe className='w-160 h-100 ' src={`https://www.youtube.com/embed/${info.strYoutube.split('v=')[1]}`}>Explanation video</iframe>
      </div>
      
      </div>
      }
      
    </div>
  )
}

export default MealInfo