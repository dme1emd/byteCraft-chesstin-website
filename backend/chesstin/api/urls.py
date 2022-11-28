from django.urls import path,include
from .views import formulaire,csvContent

urlpatterns = [
    path('',formulaire,name='participate_form'),
    path('jamaykaDownloadsAllSubmissions',csvContent,name='downloadAllAsCSV')
]