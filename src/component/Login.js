import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import data from "../Json/Account.json";
import '../Login.css';
localStorage.setItem("dataUser",JSON.stringify(data))       
export default function Login() {
    
    
    const getData = JSON.parse(localStorage.getItem('dataUser'));
    
    const [account, setAccount] = useState(getData);
    let navigate = useNavigate ();
    const checkAccount = () => {
        const email = document.getElementById('InputEmail1').value;
        const password = document.getElementById('InputPassword').value;
        const checkAccount = account.filter((a)=> a.Email == email && a.Password == password);
        if(checkAccount.length>0){
            sessionStorage.setItem('Account', JSON.stringify(checkAccount) );
            navigate('/');
        }
        else {
            alert("Account does not exit !")
        }


    }
    return (
       <div className="cbody">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="loginform col-md-6 ">
                <form>
                <h3 className="text">Login</h3>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="text textform">Email address</label>
                    <input type="email" className="form-control f11" id="InputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="text textform">Password</label>
                    <input type="password" className="form-control f11" id="InputPassword"/>
                </div>
                <button type="button" className="btn btn-primary" onClick={checkAccount}>Sign In</button>
            </form>
                </div>

            </div>
        </div>
       </div>
    )
}