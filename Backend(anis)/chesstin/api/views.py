from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from apply.models import APPLYANT
from .serializers import APPLYSerializer
class APPLYANTform(generics.CreateAPIView):
    queryset = APPLYANT.objects.all()
    serializer_class=APPLYSerializer
    
