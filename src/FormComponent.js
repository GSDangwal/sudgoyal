import React, { useState } from 'react'
import axios from 'axios';

export default function FormComponent({ id }) {
    const [title, updateTitle] = useState("");
    const [body, updateBody] = useState("");
    const [error, updateError] = useState("");
    const [idError, updateIdError] = useState("");
    function handleClick(e) {
        e.preventDefault();
        if (id) {
            updateIdError("")
        } else {
            // console.log("please select a user")
            updateIdError("Please select a user");
            return false
        }
        const obj = {
            title: title,
            body: body,
            userId: id
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", obj)
            .then((response) => console.log(response))
            .catch((error) => updateError(error.message))

    }
    return (
        <div className='child2'>
            <h1 style={{ color: "red" }}>{error}</h1>
            <form onSubmit={(e) => handleClick(e)} className='formdiv'>
                <div className='formFiled'>
                    <label>title : -</label>
                    <input type={"text"} onChange={(e) => updateTitle(e.target.value)} required></input>
                </div>
                <div className='formFiled'>
                    <label>body : -</label>
                    <input type={"text"} onChange={(e) => updateBody(e.target.value)} required></input>
                </div>
                <div className='formFiled'>
                    <input type={"submit"} required></input>
                </div>
            </form>
            <h3 style={{ color: "red" }}>{idError}</h3>
        </div>
    )
}
