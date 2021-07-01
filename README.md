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
virtualenv venv
source venv/bin/activate #activate on linux cmd
pip install -r requirements.txt
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
* [] Test Queries
* [] Setup Frontend