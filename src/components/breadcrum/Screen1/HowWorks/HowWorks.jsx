import React from "react";
import style from "./HowWorks.module.css";
import { Link } from "react-router-dom";
import data from "./data";
export const HowWorks = () => {
  return (
    <div className={style.MainDiv}>
      <h2>How does it work ?</h2>
      <div className={style.MapDiv}>
        {data.map((el, i) => (
          <div key={i}>
            <img src={el.image} alt={el.image} />
            <div className={style.titledDiv}>
              <h2>{el.title}</h2>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
      </div>
      <footer className={style.footer}>
        <p>
          <Link to="screen2">Friends Who Enrolled </Link>
        </p>
        <p>Terms & Conditions</p>
      </footer>
    </div>
  );
};
