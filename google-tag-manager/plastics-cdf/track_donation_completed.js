if($("#successBox").hasClass("show")){
  console.log("donation button clicked");

  var giftAmountTracker = $("#giftAmountTracker").val();
  var paymentMethod = ""; // TODO: Implement getting the payment method.

  window.dataLayer.push({
    'donation' : {
      'value': giftAmountTracker,
      'action': paymentMethod,
      'category': 'Once-Off Donation',
      'label' : 'Plastics Crowdfunding'
    },
    'event' : 'donationCompleted'
  });
}
