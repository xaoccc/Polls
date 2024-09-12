from django.urls import path
from .views import NoteListCreate, NoteDelete, NoteEdit

urlpatterns = [ 
    path('notes/', NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>/', NoteDelete.as_view(), name='delete-note'),
    path('notes/edit/<int:pk>/', NoteEdit.as_view(), name='edit-note'),
]