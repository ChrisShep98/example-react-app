import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Body from "./components/Body";
import ListOfFavorties from "./components/ListOfFavorties";
import ContextComponent from "./components/ContextComponent";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  // const inputDate = useRef()

  // function focusInput(){
  //   inputDate.current.focus()
  // }

  const [date, setDate] = useState("");
  const [picture, setPicture] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [favItem, setFavItem] = useState([]);

  const [viewFavorites, setViewFavorites] = useState(false)

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

  if (favItem.length !== 0) {
    console.log(favItem);
  }

  console.log(viewFavorites)

  return (
    <ThemeProvider>
      <Body>
        <ContextComponent />
        <div className="absolute bg-white w-popup top-1/2 left-1/2 -ml-96 -mt-72 shadow-md rounded-lg pb-4 z-10" style={viewFavorites ? {display: 'flex'} : {display: 'none'} }>
          <div className="container mx-auto flex flex-wrap justify-center items-center ">
              {favItem.map((el) => {
                return (
                  <ListOfFavorties photo={picture}/>
                )
              })}
          </div>
        </div>
        <div className="text-center mt-20" style={viewFavorites ? {filter: 'blur(2px)'} : {filter: 'blur(0px)'} }>
          <h1>Astronomy Picture of the Day</h1>
          <div>
            <Input onChange={(e) => setDate(e.target.value)} />
            {/* <input
            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow h-8"
            type="date" ref={inputDate}
            onChange={(e) => setDate(e.target.value)}
          ></input> */}
            {/* <Button text={'Select Date'} onClick={focusInput} /> */}
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
            <Button text={`View Favorites (${favItem.length})`} onClick={() => setViewFavorites(true)} />
            <div className="w-full h-picHeight flex">
              <img className="" src={picture} alt=""></img>
              {/* <iframe src={video} frameBorder={'0'} title={'video'}></iframe> */}
              <div className="self-center">
                <h2 className="underline">{title}</h2>
                <span>{date}</span>
                <p>{explanation}</p>
              </div>
            </div>
          </div>
        </div>
      </Body>
    </ThemeProvider>
  );
}

export default App;
