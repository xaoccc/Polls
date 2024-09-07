# A Django / React Tasks Manager
A test project for building small app using Django and React
## Backend
### Setup
`python -m venv env` 

`source env/bin/activate`  - linux
`.\env\Scripts\Activate` - PowerShell/windows
if errormessage, then run :
`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

`pip install -r requirements.txt`  
`django-admin startproject backend`  
`python manage.py startapp api`  
- setup settings.py
### Create Create User serializer
### Create Create User view
- Use class-based views, using the generic views of Django REST Framework
### Setup Main urls
### Make Migrations and Migrate
`python manage.py makemigrations`  
`python manage.py migrate`  
- Make sure the db settings in settings.py is correct!
### Run backend server
`python manage.py runserver`
- Test API and tokens on the urls we've set
### Create Task Model
### Add NoteSerializer to serializers
### Add Views for Creating and Deleting Notes
### Add Tasks urls

## Front-End
### Setup
`npm create vite@latest frontend -- --template react`  
`cd frontend`  
`npm install`  
`npm install axios react-router-dom jwt-decode`  
`npm run dev`  

### Organize React
- clear css
- clear App.jsx body and imports
- update main.jsx (remove css import)
- create dirs: pages, styles, components
- create files: 
    - in src: constants.jsx, api.jsx
    - in frontend: .env
- update constants.jsx so we can have keys to access our tokens stores in the local storage
### Setup axios
- update api.js
- update .env
### Write Protected Routes
- create ProtectedRoutes.jsx
### Create Navigation and Pages
- create Login.jsx, Register.jsx, Home.jsx, NotFound.jsx
### Create a Generic Form
