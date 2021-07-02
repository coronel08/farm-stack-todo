import './App.css';
import Layout from './components/Layout'
import axios from 'axios'
import React, { useState, useEffect } from 'react'

function App() {
  const [todo, setTodo] = useState([{}])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  // Read Todos API, using axios 
  useEffect(() => {
    axios.get('http://localhost:4000/api/todo')
      .then(res => {
        console.log(res.data)
        return {

        }
      })
  })

  // Post a todo
  const addToHandler = () => {
    axios.post('http://localhost:4000/api/todo', { 'title': title, 'description': desc })
      .then(res => console.log(res))
  }


  // Calls the fetch from the API,
  useEffect(() => {
    fetchTodoList()
  }, [])

  // Fetches the backend data and updates the todo
  const fetchTodoList = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/todo')
      const data = await res.json()
      // console.log(data)

      setTodo(data.map((todoItem, index) => {
        return {
          title: todoItem.title,
          desc: todoItem.description,
          key: index,
        }
      }))
    } catch (e) {
      console.log("Something is wrong", e)
    }
  }

  return (
    // website header
    <div className="App bg-dark">
      < Layout />

      {/* card title */}
      <div className="">
        <div className="card text-white bg-primary mx-5">
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
          </div>

          {/* card body */}
          <div className="px-3">
            <p className="card-text">Add your task below</p>
            <div className="">
              <input className="mb-2 form-control" placeholder="Title" />
              <input className="mb-2 form-control" placeholder="Description" />
              <button className="btn btn-dark p-3 mb-3 rounded" onClick={fetchTodoList}>
                Add Task
              </button>
            </div>
          </div>

          {/* Break */}
          <div className="border d-inline mb-2"></div>

          {/* Todos to be added in here*/}
          <div>
            {todo.map(function (td) {
              return (<p key={td.index + td.title}>{td.title} - {td.desc} </p>)
            })}
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
