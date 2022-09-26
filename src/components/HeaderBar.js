import React, { useContext } from "react";
import DataContext from "../store/data-context";
import "./HeaderBar.css";
const HeaderBar = () => {
  const dataCtx = useContext(DataContext);
  return (
    <header className="header">
      <img
        src="https://meme-creator-d.s3.eu-central-1.amazonaws.com/logomc.png"
        alt=""
        className="logo"
      />
      {dataCtx.Image && (
        <button onClick={dataCtx.DownloadImage}>&#10515;</button>
      )}
      <button
        className="reload"
        onClick={() => {
          window.location.reload();
        }}
      >
        &#8635;
      </button>
    </header>
  );
};
export default HeaderBar;
