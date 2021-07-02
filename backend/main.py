from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo

app = FastAPI()

from database import(
    fetchOneTodo,
    fetchAllTodos,
    createTodo,
    updateTodo,
    removeTodo,
)

origins = ['http://localhost:3000', 'http://localhost:4000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello":"Kiki"}

@app.get("/api/todo")
async def get_todo():
    response = await fetchAllTodos()
    return response

@app.get("/api/todo{title}", response_model=Todo)
async def get_todo_by_id(title):
    response = await fetchOneTodo(title)
    if response:
        return response
    raise HTTPException(404,f"No Todo Item by that {title}")


# Create 
@app.post("/api/todo", response_model=Todo)
async def post_todo(todo:Todo):
    response = await createTodo(todo.dict())
    if response:
        return response
    raise HTTPException(400,"Something went wrong. Bad Request")


# Update
@app.put("/api/todo{title}/", response_model=Todo)
async def put_todo(title:str, desc:str):
    response = await updateTodo(title, desc)
    if response:
        return response
    raise HTTPException(404, f"No Todo Item by that {title}")

# Delete
@app.delete("/api/todo{title}")
async def delete_todo(title):
    response = await removeTodo(title)
    if response:
        return "Deleted todo item"
    raise HTTPException(404, f"There is no TODO item with title {title}")

'''
Can run the server with command below
uvicorn main:app --reload --port 4000
'''