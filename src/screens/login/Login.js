import React from 'react';
import { FaBuyNLarge } from 'react-icons/fa';
import Input from '../../components/input/Input';

const Login = (props) => {
    const loginClickHandler = () => {
         //API call is made - Returns JWT Token
         const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
         localStorage.setItem('access-token',jwtToken);
         props.history.push("/");
    }
    return (
        <div>
           <div>
               <form>
                   <Input />
                   <button onClick={loginClickHandler}></button>
               </form>
           </div>
        </div>
    )
}

export default Login;