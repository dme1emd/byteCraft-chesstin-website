from django.db import models
# from multiselectfield import MultiSelectField
# Create your models here.


class Submission(models.Model):
    # cp1 = '1cp'
    # cp2 = '2cp'
    # cs1 = '1cs'
    # cs2 = '2cs'
    #
    # yearInSchoolChoices = [
    #     (cp1,'First Year'),
    #     (cp2, 'Second Year'),
    #     (cs1, 'Third Year'),
    #     (cs2, 'Fourth Year'),
    # ]
    #
    #
    # workshop1 = 'workshop1'
    # workshop2 = 'workshop2'
    # workshop3 = 'workshop3'
    # workshop4 = 'workshop4'
    #
    # workshops = (
    #     (workshop1,'Design'),
    #     (workshop2, 'BackEnd'),
    #     (workshop3, '3D Modelling'),
    #     (workshop4, 'Animation With JavaScript'),
    # )
    esi = "esi"
    estin = "estin"
    originChoices = [
        (esi,"ESI"),
        (estin,"ESTIN")
    ]


    firstName = models.CharField(max_length=50,blank=False)
    lastName = models.CharField(max_length=50,blank=False)
    email = models.EmailField(blank=False,unique=True)

    # yearInSchool = models.CharField(
    #     max_length=10,
    #     choices=yearInSchoolChoices,
    #     default=cp2,
    # )

    # lichessUsername = models.CharField(max_length=50,blank=True)

    origin = models.CharField(max_length=50,
                              choices=originChoices,
                              blank=False)


    elo = models.IntegerField(blank=False)



    motivation = models.TextField(max_length=150)
    # created = models.DateTimeField(auto_now_add=True)

    # workshops = models.Choices()

    # workshops = MultiSelectField(
    #     max_length=10,
    #     choices=workshops,
    #     default=workshop2,
    # )

    def __str__(self):
        return f'{self.firstName}_{self.lastName} | | | {self.email}'

    # pass

