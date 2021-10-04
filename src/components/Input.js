import classes from "./Input.module.css";

const Input = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(props.name);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          onChange={props.handleChange}
          className={classes.form__input}
          type="text"
          placeholder="Enter a name"
        ></input>
      </form>
    </>
  );
};

export default Input;
