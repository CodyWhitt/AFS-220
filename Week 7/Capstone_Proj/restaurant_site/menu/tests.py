from django.test import TestCase
from django.urls import reverse

class GiftCardPurchaseTestCase(TestCase):
    def test_gift_card_purchase_page_loads(self):
        url = reverse('giftCards')
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, '<h2>Purchase a Gift Card</h2>')
        self.assertContains(response, 'Recipient Name:')
        self.assertContains(response, 'Amount:')
        self.assertContains(response, 'Email:')
        self.assertContains(response, '<button type="submit">Purchase Gift Card</button>')

    def test_gift_card_purchase_form_submission(self):
        url = reverse('giftCards')
        data = {
            'recipientName': 'John Doe',
            'amount': '50',
            'email': 'john@example.com',
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Thank you for purchasing a gift card for John Doe! An email with the gift card will be sent to john@example.com.')

class OrderViewTests(TestCase):
    def test_order_view(self):
        url = reverse('order')
        response = self.client.get(url)

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, '<h2>Place Your Order</h2>')
        self.assertContains(response, '<button id="btnCheckout">Checkout</button>')
        self.assertContains(response, '<div class="menu-section">')