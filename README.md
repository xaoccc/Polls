# A Django / React Tasks Manager
A test project for building small app using Django and React
## Setup
`python -m venv env`  
`source env/bin/activate`  
`pip install -r requirements.txt`  
`django-admin startproject backend`  
`python manage.py startapp api`  

- setup settings.py

## Create Create User serializer
## Create Create User view
- Use class-based views, using the generic views of Django REST Framework
## Setup urls
## Make migrations and migrate
`python manage.py makemigrations`  
`python manage.py migrate`  
- Make sure the db settings in settings.py is correct!
## Run backend server
`python manage.py runserver`