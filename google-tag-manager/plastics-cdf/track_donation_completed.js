if($("#successBox").hasClass("show")){
  console.log("donation button clicked");

  var giftAmountTracker = $("#giftAmountTracker").val();
  var paymentMethod = ""; // TODO: Implement getting the payment method.

  window.dataLayer.push({
    'plasticsCdfDonation' : {
      'value': giftAmountTracker,
      'action': "Donated With Credit Card",
      'category': 'Once-Off Donation',
      'label' : 'Plastics Crowdfunding'
    },
    'event' : 'plasticsCdfDonationCompleted'
  });
}
