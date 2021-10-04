import classes from "./NewInputBtn.module.css";

const NewInputBtn = (props) => {
  return (
    <div className={classes.btn__wrapper}>
      <button onClick={props.handleClick} className={classes.return__btn}>
        Return
      </button>
    </div>
  );
};

export default NewInputBtn;
