import React, { useContext, useState, useEffect, useRef } from "react";
import Draggable from "react-draggable";
// import { Resizable } from "re-resizable";

import "./Meme.css";
import DataContext from "../store/data-context";
const Meme = () => {
  const idRefup = useRef();
  const idReflo = useRef();
  const idRefth = useRef();
  const dataCtx = useContext(DataContext);
  const [StateWidth, setStateWidth] = useState([]);
  const [StateHeight, setStateHeight] = useState([]);
  useEffect(() => {
    const GetWidth = document.getElementsByClassName("imagestyle")[0].width;
    const GetHeight = document.getElementsByClassName("imagestyle")[0].height;
    setStateWidth(GetWidth);
    setStateHeight(GetHeight);
  }, [StateWidth, StateHeight]);

  return (
    <div id="main">
      <div id="capture" className="memecontainer" style={{ width: StateWidth }}>
        <Draggable
          bounds={{
            bottom: 600,
            right: StateWidth / 2,
            left: -StateWidth / 2,
            top: -80,
          }}
        >
          <p
            style={{ fontSize: dataCtx.fontsizeUpp, width: StateWidth }}
            ref={idRefup}
            id="upper"
            onClick={dataCtx.ChooseTextUp}
            className="uppertext"
          >
            {dataCtx.UpperText}
          </p>
        </Draggable>
        <Draggable
          bounds={{
            bottom: 1200,
            right: StateWidth / 2,
            left: -StateWidth / 2,
            top: -300,
          }}
        >
          <p
            style={{ fontSize: dataCtx.fontsizeLow, width: StateWidth }}
            ref={idReflo}
            id="lower"
            onClick={dataCtx.ChooseTextLo}
            className="lowertext"
          >
            {dataCtx.LowerText}
          </p>
        </Draggable>
        <Draggable
          bounds={{
            bottom: 1200,
            right: StateWidth / 2,
            left: -StateWidth / 2,
            top: -200,
          }}
        >
          <p
            style={{ fontSize: dataCtx.fontsizeThird, width: StateWidth }}
            ref={idRefth}
            id="third"
            onClick={dataCtx.ChooseTextTh}
            className="thirdtext"
          >
            {dataCtx.ThirdText}
          </p>
        </Draggable>

        <img src={dataCtx.Image} alt="" className="imagestyle" />
      </div>
      <br />
      {dataCtx.Image && (
        <button onClick={dataCtx.DownloadImage}>DOWNLOAD</button>
      )}
    </div>
  );
};

export default Meme;
