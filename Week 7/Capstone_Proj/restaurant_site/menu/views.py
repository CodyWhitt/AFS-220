from django.shortcuts import render

def home(request):
    return render(request, 'home.html')

def info(request):
    return render(request, 'info.html')

def catering(request):
    return render(request, 'catering.html')

def menu(request):
    return render(request, 'menu.html')

def order(request):
    if request.method == 'POST':
        selected_items = request.POST.getlist('selectedItems[]')
        total_price = request.POST.get('totalPrice')
        message = f'Thank you for placing your order! Selected items: {selected_items}, Total Price: {total_price}'
        return render(request, 'order.html', {'message': message})
    return render(request, 'order.html')

def giftCards(request):
    if request.method == 'POST':
        recipient_name = request.POST.get('recipientName')
        amount = request.POST.get('amount')
        email = request.POST.get('email')
        message = f'Thank you for purchasing a gift card for {recipient_name}! An email with the gift card will be sent to {email}.'
        return render(request, 'giftCards.html', {'message': message})
    return render(request, 'giftCards.html')