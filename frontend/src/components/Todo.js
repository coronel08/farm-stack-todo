import React from 'react'
import axios from 'axios'

function Todo({ item }) {

    const deleteTodoHandler = (title) => {
        axios.delete(`http://localhost:4000/api/todo/${title}`)
            .then(res => console.log(res.data))
    }

    return (
        <div className="m-2">
            {item.map(function (td) {
                return (
                    <React.Fragment>
                        <p key={td.index + td.title} className="p-3 bg-dark rounded">
                            {td.title} - {td.description}
                            <button className="btn btn-sm btn-danger float-end"
                                onClick={() => deleteTodoHandler(td.title)}
                            >
                                Delete
                            </button>
                        </p>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Todo