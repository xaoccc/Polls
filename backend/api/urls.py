from django.urls import path, include
from .views import CreateNoteView, NoteDelete

urlpatterns = [ 
    path('notes/', CreateNoteView.as_view(), name='note-list'),
    path('notes/delete/<int:pk>', NoteDelete.as_view(), name='delete-note'),
]