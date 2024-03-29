import React, { useState, useEffect } from 'react';
import './style.css'

const Home = () => {

    let [data, setData] = useState([]);

    const Api = () => {
        fetch('https://themealdb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(res => setData(res.meals))
    }
    
    useEffect(() => {
        Api()
    }, []);

    return (
        <>
        <header>
            <h1 className='headerText'>IT-Food</h1>
        </header>
           {data.map(db => (
                <div className='card'>
                    <h1>{db.strMeal}</h1>
                    <img width={'100%'} src={db.strMealThumb} alt="" />
                    <p>{db.strInstructions}</p>
                    <button onClick={Api}>Next</button>
                </div>
           ))}

           <footer>
            <h1>IT-Food</h1>
           </footer>
        </>
    );
};

export default Home;