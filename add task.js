import { useState } from "react";
import axios from "axios";

export default function AddTask(){

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [status,setSatus]=useState('');

    const handleClick=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3151/api/tasks',{
            title:title,
            description:description,
            status:status 
    })
    .then(response => {
        console.log('Task added successfully:', response.data);
    })
    .catch(error => {
        console.error('There was an error adding the task:', error);
    });
};

    return(
        <div>
            <h1>Add Task</h1>
            <form onSubmit={handleClick}>
                <label htmlFor="title">Title</label><br></br>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title"></input><br></br>

                <label htmlFor="description">Description</label><br></br>
                <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} id ="description"></input><br></br>

                <label htmlFor="status">Status</label><br></br>
                <input type="text" value={status} onChange={(e)=>{setSatus(e.target.value)}} id="status" placeholder="in-progress, pending, completed"></input><br></br>
  
                <input type="Submit" value="submit"></input>
            </form>
        </div>
    )
}