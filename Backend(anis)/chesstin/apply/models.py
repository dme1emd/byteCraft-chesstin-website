from django.db import models

# Create your models here.
class APPLYANT(models.Model):
   email = models.EmailField( blank=False,max_length=50)
   first_name = models.CharField(blank=False,max_length=50)
   last_name = models.CharField(blank=False,max_length=50)
   place_options= [('ESI','ESI'),('ESTIN','ESTIN')]
   rating = models.CharField(null=False,max_length=20)
   place=models.CharField(blank=False,choices=place_options,max_length=5)
   motivation = models.TextField(blank=False)
   anything_to_add = models.TextField(blank=True)
   def __str__(self):
        return self.email +'  |  ' +self.place
