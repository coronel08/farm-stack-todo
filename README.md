# Farmstack TODO App
Uses the following technology stack:

* DB = MongoDB in a Docker container
* Backend = FastAPI 
* Frontend = React


## Table of Contents
* [Notes](#notes)
* [Deploy](#deploy)
    * [Todo](#todo)

## Notes

## Deploy
Setup Virtual Env and Dependencies
```
<!-- Backend folder -->
virtualenv venv
source venv/bin/activate #activate on linux cmd
pip install -r requirements.txt
docker-compose up -d
uvicorn main:app --reload --port 4000
<!-- Frotnend folder -->
npm start
```

#### Todo
* [x] Setup Backend Server
    * [x] create main.py that uses FastAPI
        * [x] Can run the server with command below "uvicorn main:app --reload --port 4000"
        * [x] Create CRUD routes
* [x] Setup Database Design
    * [x] create model.py and setup Models
    * [x] create database.py, connect MongoDB with Motor
    * [x] create functions to interact with DB
* [x] Test Queries
    * [x] Went into localhost/docs and tested out the post option
* [] Setup Frontend
    * [x] npx create-react-app frontend and remove all extra items
    * [x] import bootstrap into index.js
    * [] get api information into frontend
    * [] break out frontend into layouts and functions