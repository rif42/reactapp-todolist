import {useState} from 'react'
import {useHistory} from 'react-router-dom';

function Login() {
  const history = useHistory();

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

    const userLC = localStorage.getItem('user')
    const userLCJS = JSON.parse(userLC)
    console.log(userLCJS)

    if(userLCJS.userName === userNameState){
      console.log('username sudah sama')
      if(userLCJS.password === passwordState){
        alert('Login terverifikasi')
        history.push('/app')
      } else {
        console.log('username atau password salah')
      }
    } else {
      console.log('username atau password salah')
    }

  };
  return (
    <div>
      <h1>Login Page</h1>

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

      <button onClick={handleSubmit}>Login User</button>
    </div>
  )
}

export default Login