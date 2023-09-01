import React from 'react'
import './../styles/JokeItemStyle.css'
import Loader from './Loader';
const JokeItem = (props) => {

  return (
    <>
           <div className='container1 flex'>
            <div className='container2'>
            <p>{props.category}</p>
            <div className='joke flex'>
            { props.loading && <Loader/>}
                <p>{props.joke}</p>
            </div>
            <button type="button" className="btn btn-primary next" onClick={props.updateJoke}>Next Joke</button>
            </div>
           </div>
    </>
    )
}

export default JokeItem