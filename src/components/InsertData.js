import React, { useContext } from "react";
import DataContext from "../store/data-context";

import "./InsertData.css";
const InsertData = () => {
  const dataCtx = useContext(DataContext);

  return (
    <div>
      <div className="twotexts">
        <h3>
          {" "}
          Text 1
          <input value={dataCtx.SupInpValue} onChange={dataCtx.SupInp} />{" "}
        </h3>

        {dataCtx.SecondTextField && (
          <h3>
            {" "}
            Text 2
            <input value={dataCtx.InfInpValue} onChange={dataCtx.InfInp} />{" "}
          </h3>
        )}
      </div>
      <button className="addndbt" style={{}} onClick={dataCtx.NdBoxHandler}>
        {dataCtx.SecondTextField ? "Close box" : "Add box"}{" "}
      </button>
      <div className="thirdtextbt">
        {dataCtx.SecondTextField && (
          <button className="addrdbt" onClick={dataCtx.ThBoxHandler}>
            {dataCtx.ThirdTextField ? "Close box" : "Add box"}{" "}
          </button>
        )}

        {dataCtx.ThirdTextField && (
          <h3>
            Text 3
            <input value={dataCtx.ThiInpValue} onChange={dataCtx.ThiInp} />{" "}
          </h3>
        )}
      </div>
      <div>
        <div className="sizecontainer">
          <span className="selecttext">
          
            Click on a text to change its size{" "}
          </span>
          <button style={{ marginRight: "15px" }} onClick={dataCtx.IncSize}>
            Increase
          </button>
          <button onClick={dataCtx.DecSize}>Decrease</button>
        </div>
        <div className="upload">
          <span> Click to upload an image </span>
          <input
            onChange={dataCtx.ImgInp}
            style={{ display: "none" }}
            value=""
            alt=""
            type="file"
            id="attimg"
            accept=".jpg, .png, .gif"
          />
          <label htmlFor="attimg">
            <img
              className="attachimg"
              alt=""
              title="Attach Image"
              src="https://meme-creator-d.s3.eu-central-1.amazonaws.com/uploadimage.png"
            />
          </label>
        </div>
        <br />
      </div>
    </div>
  );
};

export default InsertData;
