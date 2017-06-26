if($("#successBox").hasClass("show")){
  console.log("donation button clicked");

  var giftAmountTracker = $("#giftAmountTracker").val();
  var isDefaultAmount = True // False if the supporterd has entered a custom amount.
  var donationLabel = ((isDefaultAmount) ? "Default Amount" : "Custom Amount");

  window.dataLayer.push({
    'plasticsCdfDonation' : {
      'value': giftAmountTracker,
      'action': "Donated With Credit Card",
      'category': 'Plastics CDF Donation',
      'label' : donationLabel,
    },
    'event' : 'plasticsCdfDonationCompleted'
  });
}
