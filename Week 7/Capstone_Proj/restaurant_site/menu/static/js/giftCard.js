document.addEventListener('DOMContentLoaded', function() {
    const giftCardForm = document.getElementById("giftCardForm");

    function handleGiftCardPurchase(event) {
        event.preventDefault();

        const recipientName = document.getElementById("recipientName").value;
        const amount = document.getElementById("amount").value;
        const email = document.getElementById("email").value;

        alert(`Thank you for purchasing a gift card for ${recipientName}! An email with the gift card will be sent to ${email}.`);
        giftCardForm.reset();
    }
    giftCardForm.addEventListener('submit', handleGiftCardPurchase);
});
