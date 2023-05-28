import React from "react";
import style from "./inroll.module.css";
import data from "./inroll";
const Cards = () => {

  return (
    <div className={style.mainDiv}>
      <h3>Friends who Enrolled ({data.length})</h3>

      <div className={style.CardMainDiv}>
        {data.map((el, i) => (
          <div key={i}>
            <div className={style.CardNameTime}>
              <h3>{el.name}</h3>
              <p>{el.time}</p>
            </div>
            <p>Courses Enrolled ({el.courses.length})</p>
            <div className={style.courses}>
              {el.courses &&
                el.courses.map((el, i) => (
                  <div>
                    <p key={i}>{el}</p>
                  </div>
                ))}
            </div>
            <h2>
              Referral Amount <span>₹{el.amount}</span>{" "}
            </h2>
          </div>
        ))}
      </div>
      <p className={style.footer}>Terms & Conditions</p>
    </div>
  );
};

export default Cards;
