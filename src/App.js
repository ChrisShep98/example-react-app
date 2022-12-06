import React, { useEffect, useRef, useState } from "react";
import Button from "./components/Button";

function App() {
  
  // Here im using useRef to grab the value from the input (calendar) the user sets with the ref attribute. useRef will then return a mutable object whose .current property is given the value of the input. Then using a template literal to set the query param of the url.
  // I view useRef as a way to just grab a single value of something. It reminds me of doing something like document.querySelector('input').value but correct me if im wrong. useState could also work here? So it's a little confusing.
  const inputRef = useRef(null);


  // Here I am using useState() to get/set the state of variables using array destructuring. When the page is freshly reloaded, all the states below will return to their inital value which is an empty string and an empty array for favItem.
  const [date, setDate] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [favItem, setFavItem] = useState([]);

  useEffect(() => {
    const renderData = async () => {
      const dataFromAPI = await getFetch()
      console.log(dataFromAPI)
      // setPicture(data.hdurl);
      // setTitle(data.title);
      // setExplanation(data.explanation);
      // setDate(data.date)
    }
    renderData()
  }, [])


// When the "Get Picture" button is clicked the function below will run and update the states of date, picture, title, and explanation, which will also update what is being displayed on the DOM.
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ look at react demo

  const getFetch = async() => {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${inputRef.current.value}`)
      .then((res) => res.json())
      .then((data) => {
        return data
        // console.log(data)
        // setPicture(data.hdurl);
        // setTitle(data.title);
        // setExplanation(data.explanation);
        // setDate(data.date)
      })
  }




// When the "Add to Favorites" button is clicked this function updates the state of the favItem variable and adds the current states of data, picture, title, and explanation as a new object to the array.
  function addToFav() {
    setFavItem([...favItem, { date: date, picture: picture, title: title, explanation: explanation },]);

  }

  // No idea why this is console logged twice when you add a photo to favorites
  if(favItem.length !== 0){
    console.log(favItem);
  }
  

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="text-center mt-20 border">
        <h1>Astronomy Picture of the Day</h1>
        <div>
          <input
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8"
            type="date"
            ref={inputRef} onChange={useEffect}
          ></input>
          <Button text={"Get Picture"} onClick={getFetch}></Button>
          <Button text={"View Favorites"} />
          <div className="bg-slate-400 w-full h-picHeight flex">
            <img className="" src={picture} alt=""></img>
            {/* <iframe src={video} frameBorder={'0'} title={'video'}></iframe> */}
            <div className="self-center">
              <h2 className="underline">{title}</h2>
              <span>{date}</span>
              <p>{explanation}</p>
              <Button text={"Add to Favorites"} onClick={addToFav} />
            </div>
          </div>

          {/* <div className='bg-red-500 w-full h-picHeight'>
          <h2>{title}</h2>
          <img className='w-full h-full object-contain' src={picture} alt=''></img>
          <iframe src={video} frameBorder={'0'} title={'video'}></iframe>
          <p className=''>{explanation}</p>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
