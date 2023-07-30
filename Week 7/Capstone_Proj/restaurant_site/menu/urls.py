from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('catering', views.catering, name='catering'),
    path('info', views.info, name='info'),
    path('menu', views.menu, name='menu'),
    path('home', views.home, name='home'),
    path('order', views.order, name='order'),
    path('giftCards', views.giftCards, name='giftCards'),
]
