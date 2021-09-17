
import React, { useState } from "react";
const Home = () => {
    const [users, setUser] = useState([]);
    const onclick = async () => {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        setUser(jsonresponse.data);
        //ok 
    };
    return (
        <div className="Home">
            <div className="nav">
                <nav>
                    <div>
                        <h2>JB Tours & Travels</h2>
                    </div>
                    <div>
                        <button onClick={onclick}>Get Users</button>
                    </div>
                </nav>
            </div>
            <div className="usrcard">
                {users.map(({ id, first_name, last_name, avatar, email }) => {
                    return (
                        <div className="card">
                            <div className="pic">
                                <img src={avatar}></img>
                            </div>

                            <div className="details">
                                <h3>
                                    {first_name} {last_name}
                                </h3>
                                <p>{email}</p>
                            </div>
                            <div className="social">
                                <h3>follow me on</h3>
                                <a href="#" class="fa fa-instagram"></a>
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );



};

export default Home;
