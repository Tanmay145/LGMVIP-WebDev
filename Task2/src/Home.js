
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
        <div className="App">
            <h1>Hello All</h1>
            <button onClick={onclick}>Get Users</button>
            <h2>Users:</h2>
        
                {users.map(({id,first_name})=>{
                    return(
                 <h3 key={id}>Name of the person is {first_name}</h3>
                    );
                    })}
    

        </div>
    );



};

export default Home;
