import React, { useEffect, useState } from "react";
import Button from "./components/Button";

function App() {


  // Here I am using useState() to get/set the state of variables using array destructuring. When the page is freshly reloaded, all the states below will return to their inital value which is an empty string and an empty array for favItem.
  const [date, setDate] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [favItem, setFavItem] = useState([]);
  

  // Here I'm using the useEffect hook which will 

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=zU71SV2z8UAS2tpSRxtx9Ii4giGUAk6QIufK4bCn&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setDate(data.date);
        setPicture(data.hdurl);
        setTitle(data.title);
        setExplanation(data.explanation);
      });
  }, [date]);



  // When the "Add to Favorites" button is clicked this function updates the state of the favItem variable and adds the current states of data, picture, title, and explanation as a new object to the array.
  if (favItem.length !== 0) {
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
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <Button
            text={"Add to Favorites"}
            onClick={() =>
              setFavItem([
                ...favItem,
                {
                  title: title,
                  date: date,
                  picture: picture,
                  explanation: explanation,
                },
              ])
            }
          ></Button>
          {/* <Button text={"View Favorites"} /> */}
          <div className="bg-slate-400 w-full h-picHeight flex">
            <img className="" src={picture} alt=""></img>
            {/* <iframe src={video} frameBorder={'0'} title={'video'}></iframe> */}
            <div className="self-center">
              <h2 className="underline">{title}</h2>
              <span>{date}</span>
              <p>{explanation}</p>
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
