import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error404.module.css";
import icon from "../../Icons/Search.png";

export default function Error404({ err }) {
  const navigate = useNavigate();
  return (
    <div className={styles.parenterr}>
      <div className={styles.div}>
        <h1>Error404</h1>
        <h2>Sorry, we were unable to find that page</h2>
        <div className={styles.sear}>
          <input type="text" placeholder="Search" />
          <button className={styles.search}>
            <img src={icon}></img>
          </button>
        </div>
        {/* <button onClick={() => setRedirect(true)}>Go to Home Page</button> */}
        {/* {redirect && <Navigate to="/" />} */}
        <button onClick={() => navigate("/", { state: err })}>
          Start from <a href="/">home page</a>
        </button>
      </div>
    </div>
  );
}
