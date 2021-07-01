from model import Todo
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://root:example@localhost:27017/TodoList?authSource=admin')
database = client.TodoList
collection = database.todo

async def fetchOneTodo(title):
    document = await collection.find_one({"title":title})
    return document

async def fetchAllTodos():
    todos = []
    cursor = collection.find({})
    async for document in cursor:
        todos.append(Todo(**document))
    return todos

async def createTodo(todo):
    document = todo 
    result = await collection.insert_one(document)
    return result

async def updateTodo(title,desc):
    await collection.update_one({"title":title}, {"$set":{
        "description":desc}})
    document = await collection.find_one({"title":title})
    return document

async def removeTodo(title):
    await collection.delete_one({"title":title})
    return True