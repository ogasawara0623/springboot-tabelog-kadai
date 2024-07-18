const stripe = Stripe('pk_test_51PR7d42L4f8hSrTzm0irepdMm43B9dayi42uHID8NG3vuoE8YbtMKASeh8w9noXM5yISmjuToZv9FUDR22gQmFIe00BCPaKb0L');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });