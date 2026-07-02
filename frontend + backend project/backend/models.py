from django.db import models
class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=200)
    
    def __str__(self):
            return self.title
    
    
class Booking(models.Model):
        event = models.ForeignKey(Event, on_delete=models.CASCADE)
        name = models.CharField(max_length=100)
        email = models.EmailField()
        seats = models.PositiveIntegerField()
    
        def __str__(self):
            return self.name




    



