import { useState } from "react";

function Register() {
  const [userNameState, setUserName] = useState("");
  const [passwordState, setPassword] = useState("");

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    const dataSubmit = {
      userName: userNameState,
      password: passwordState,
    };
    console.log(dataSubmit);

    const dataJSON = JSON.stringify(dataSubmit);
    console.log(dataJSON);

    localStorage.setItem("user", dataJSON);

  };
  return (
    <div>
      <h1>Register User</h1>

      <div>
        <p>Username</p>
        <input
          type="text"
          value={userNameState}
          placeholder="masukan username kalian"
          onChange={handleChangeUserName}
        />
      </div>

      <div>
        <p>Password</p>
        <input
          type="password"
          value={passwordState}
          placeholder="masukan password kalian"
          onChange={handleChangePassword}
        />
      </div>

      <button onClick={handleSubmit}>Register Data</button>
    </div>
  );
}

export default Register;