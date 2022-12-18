import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (greater than zero)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setUsername("");
    setAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageInputHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError();
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameInputHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageInputHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
