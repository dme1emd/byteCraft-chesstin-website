from django.shortcuts import render,redirect,HttpResponse


from .serializers import  SubmissionSerializer

from .models import Submission
from rest_framework.decorators import api_view
from rest_framework.response import Response
import csv

# Create your views here.


@api_view(['POST'])
def formulaire(request):



    serializer = SubmissionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        print('request provided valid data')
        return Response(serializer.data)
    # print(serializer._validators())
    print(serializer.data)
    print("user provided UNVALID Data")
    return Response(serializer.data)




@api_view(['GET'])
def csvContent(request):
    submissions = Submission.objects.all()
    response = HttpResponse('text/csv')
    response['Content-Disposition']= 'atachment; filename=submissions.csv'
    writer = csv.writer(response)
    writer.writerow(['fName',
                     'lName','email','yearInSchool','elo',
                     'lichessUsername','motivation','workshop'])
    submissionList = submissions.values_list('firstName','lastName','email',
                                         'yearInSchool','elo','lichessUsername',
                                         'motivation','workshops'
                                         )

    for sub in submissionList:
        writer.writerow(sub)

    return response