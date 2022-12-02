from django.urls import path
from .views import APPLYANTform
app_name='api'

urlpatterns = [
    path('', APPLYANTform.as_view(),name='create'),
]

    