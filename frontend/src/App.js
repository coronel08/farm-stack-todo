import React, { useState, useEffect } from 'react'
import './App.css';
import Layout from './components/Layout'
import Todo from './components/Todo'

import axios from 'axios'

function App() {
  const [todo, setTodo] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read Todos API, using axios used fetch version below
  useEffect(() => {
    axios.get('http://localhost:4000/api/todo')
      .then(res => {
        setTodo(res.data)
      })
  })

  // Update Todo State, gets submitted with addToHandler
  const addToListHandler = (e, setProp) => {
    e.preventDefault()
    const item = e.target.value
    setProp(item)
  }

  // Post a todo button section
  const addToHandler = () => {
    if (!title && !desc){
      alert('Please fill out the form')
    } else { 
    axios.post('http://localhost:4000/api/todo/', { 'title': title, 'description': desc })
      .then(res => console.log(res))
    // Clears all inputs 
    Array.from(document.querySelectorAll('input')).forEach(
      input => (input.value = "")
    )}
    setTitle("")
    setDesc("")
  }


  // // Calls the fetch from the API,
  // useEffect(() => {
  //   fetchTodoList()
  // }, [])

  // // Fetches the backend data without axios, gets called in useEffect above
  // const fetchTodoList = async () => {
  //   try {
  //     const res = await fetch('http://localhost:4000/api/todo')
  //     const data = await res.json()
  //     // console.log(data)

  //     setTodo(data.map((todoItem, index) => {
  //       return {
  //         title: todoItem.title,
  //         desc: todoItem.description,
  //         key: index,
  //       }
  //     }))
  //   } catch (e) {
  //     console.log("Something is wrong", e)
  //   }
  // }

  return (
    <div className="App bg-dark">

      {/* Import Header */}
      < Layout />

      {/* card title */}
      <div className="">
        <div className="card text-white bg-primary mx-1 mx-md-5">
          <div className="card-body">
            <h5 className="card-title">Helpdesk Ticketing System</h5>
          </div>

          {/* card body */}
          <div className="px-3">
            <p className="card-text">Add your task below</p>
            <div className="">
              <input className="mb-2 form-control" placeholder="Company"
                onChange={event => addToListHandler(event, setTitle)}
              />
              <input className="mb-2 form-control" placeholder="Description"
                onChange={event => addToListHandler(event, setDesc)}
              />
              <button className="btn btn-dark p-3 mb-3 rounded" onClick={addToHandler}>
                Add Task
              </button>
            </div>
          </div>

          {/* Break */}
          <div className="border d-inline mb-2"></div>

          {/* Todos handled and mapped in the todo.js*/}
          < Todo item={todo} />

        </div>
      </div>
    </div>
  );
}

export default App;
