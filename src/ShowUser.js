import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FormComponent from './FormComponent';

export default function ShowUser() {
    const [allUser, updateUser] = useState([]);
    const [userid, updateId] = useState();
    const [error, updateError] = useState("");

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => updateUser(response.data))
            .catch(error => updateError(error.message));
    }, [])

    function useId(event) {
        // console.log(event.target.value);
        updateId(event.target.value);
    }
    // console.log(userid)
    return (<div className='container'>
        <h1 style={{ color: "red" }}>{error}</h1>

        <div onChange={useId} className="child1">
            <h4>Please select a User</h4>
            {allUser.map((user) => {
                return <div key={user.id.toString()} className="userList">
                    <input type="radio" value={user.id} name="user" />
                    <label>{user.name}</label>
                </div>
            })}
        </div>
        <FormComponent id={userid} />
    </div>
    )
}
