import React, {  useState  }  from "react";
import { useNavigate  } from "react-router-dom";


// import AuthContext  from '../context/AuthProvider'

export default function Login() {

    const [email, setEmail] = useState("fdfa");
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const history = useNavigate();


    const LoginAccout = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:3000/api/users/login', {
                method: 'POST',
                headers: {
                    "X-Powered-By": "Express",
                    "Content-Type": "application/json; charset=utf-8"
                },

                body: JSON.stringify({ email, password }) // Send email and password as JSON data in the request body
            })
            if (response.status === 200) {
                history("/");
            } else {
                setMsg('Authentication failed'); // Display an error message to the user
            }
        } catch (error) {
            console.log('Error: ', error);
        }
    }

    return (
        <section className="log_in_container grid">
        <div className=" grid self-center m-auto ">
          <div className="">
            <div className="">
              <div className="">
                <form onSubmit={LoginAccout} className="">
                  <div className="">
                    <label className="">Email</label>
                    <div className="">
                      <input
                        type="text"
                        className="input"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="">
                    <label className="">Password</label>
                    <div className="">
                      <input
                        type="password"
                        className="input"
                        placeholder="******"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="">
                    <button className="button">Login</button>
                  </div>

                  {msg && <p className="error-message">{msg}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
