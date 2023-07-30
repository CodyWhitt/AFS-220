from django.db import models

class MenuItem(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    category = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField()

class GiftCard(models.Model):
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    recipient_name = models.CharField(max_length=100)
    sender_name = models.CharField(max_length=100)
    message = models.TextField()
