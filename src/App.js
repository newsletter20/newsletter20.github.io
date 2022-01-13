import './App.css';
import React, { useState, useEffect } from 'react';
import spinner from './images/3d strokes 1 animated90 100px 2.35ms.webp'
import longhighres from './images/Nov-Dec-2021/0.8/long highres.webp';
import longlowres from './images/Nov-Dec-2021/0.8/long lowres.webp';
import covernotitle from './images/cover content.png';
import { ReactComponent as Title } from './images/cover title.svg';
import Plx from 'react-plx/lib/Plx';
import { Controller, Scene } from "react-scrollmagic"
import Sequence from "./ScrollSequence/Sequence";


function App() {

  const [isCoverLoaded, setIsCoverLoaded] = useState(false);
  const [isLongLoaded, setIsLongLoaded] = useState(true);


  useEffect(() => {
    // Setting up a --vh css variable for positioning elements ignoring the address bar on mobile
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    //window.scrollTo(0,0);
  }, []);

  return (
    <div className="App">
      {/* <img className="spinner" src={spinner}/> */}
      <Controller>
            <Scene duration="100%" triggerHook="onLeave" pin>
              {progress => (
                <div style={{ height: "100vh", position: "relative" }}>
                  <Sequence progress={progress} />
                </div>
              )}
        </Scene>
      </Controller>
      <div className="coverContainer" style={(isCoverLoaded ? { animation: "fadein 0.5s ease-in-out both" } : {})}>
          {/* <div className="cover" id="coverlowres" onLoad={() => {setIsCoverLoaded(true)}}/> */}
        <img className="cover" src={covernotitle} onLoad={() => { setIsCoverLoaded(true) }} />
        
      </div>
      <Title className="title" />
      
      <div className="longContainer" style={(isLongLoaded ? { height: "auto", animation: "slidein 0.5s 1s ease-in-out both" } : {})}>
        <img className="long" id="longlowres" src={longlowres} onLoad={() => { setIsLongLoaded(true) }} />
        <img className="long" id="longhighres" src={longhighres} onLoad={() => { setIsLongLoaded(true) }} />
      </div>


    </div>
  );
}

export default App;
