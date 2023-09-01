import React, { useState } from 'react'
import './../styles/JokesStyle.css'
import JokeItem from './JokeItem'
import Notify from './Notify';
const Joke = () => {

    const [category, setategory] = useState('animal');
    const [joke, setJoke] = useState([]);
    const [loading, SetLoading] = useState(false);
    const [alert, SetAlert] = useState(false);

 
    const getJoke= async()=>{
        const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
        try {
            SetLoading(true);
            let data = await fetch(url);
            let parseData = await data.json()
            console.log(parseData);
            SetLoading(false);
            setJoke(parseData.value);
        } catch (error) {
            console.log("error", error);
            SetAlert(true);
        }
    }
    
    const selectCat =(e)=>{
        console.log(e.target.value);
        setategory(e.target.value);
        getJoke();
    }

  return (
    <>
    {alert && <Notify/>}
    <div className='container box'>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='animal'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='career'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='celebrity'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='dev'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='explicit'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='fashion'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='food'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='history'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='money'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='movie'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='music'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='political'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='religion'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='science'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='sport'></input>
    <input type="button" className="btn btn-dark cat" onClick={selectCat} value='travel'></input>
    </div>
    <JokeItem joke={joke} category={category} updateJoke={getJoke} loading={loading} />
    </>
  )
}

export default Joke