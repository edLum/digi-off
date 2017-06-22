if($("#successBox").hasClass("show")){
  console.log("donation button clicked");

  var giftAmountTracker = $("#giftAmountTracker").val();
  var paymentMethod = ""; // TODO: Implement payment method.

  window.dataLayer.push({
    'donation' : {
      'value': giftAmountTracker,
      'paymentMethod': paymentMethod,
      'category': 'Crowdfunding Donation',
    },
    'event' : 'donationCompleted'
  });
}
