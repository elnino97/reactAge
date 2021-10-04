import React from "react";

import classes from "./Display.module.css";

const Display = (props) => {
  return (
    <div className={classes.display__wrapper}>
      <p className={classes.display__header}>
        {`Based on the entered name, the AI thinks that ${props.name} is`}
      </p>
      <div className={classes.display__datas}>
        <div className={classes.display__card}>
          <p className={classes.display__category}>Age</p>
          <p className={classes.display__age}>
            {props.data[0].age ? props.data[0].age : "?"}
          </p>
        </div>
        <div className={classes.display__card}>
          <p className={classes.display__category}>Gender</p>
          <p className={classes.display__gender}>
            {props.data[1].gender ? props.data[1].gender.toUpperCase()[0] : "?"}
          </p>
        </div>
        <div className={classes.display__card}>
          <p className={classes.display__category}>Country</p>
          <p className={classes.display__country}>
            {props.data[2].country[0]
              ? props.data[2].country[0].country_id
              : "?"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
