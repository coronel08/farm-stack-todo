import './App.css';



function App() {
  return (
    // website header
    <div className="App bg-dark">
      <header className="App-header">
        <h1>Farmstack Todo</h1>
        <p className="text-muted lead">Built Using FastAPI, ,React, Mongo</p>
      </header>

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
                <input className="mb-2 form-control" placeholder="Description"/>
                <button className="btn btn-dark p-3 mb-3 rounded">
                  Add Task
                </button>
              </div>
          </div>

          {/* Break */}
          <div className="border d-inline mb-2"></div>

          {/* Todos to be added in here*/}

        </div>
      </div>

    </div>
  );
}

export default App;
