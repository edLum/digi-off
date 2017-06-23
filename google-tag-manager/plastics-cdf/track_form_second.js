// dataLayer push to be used for tracking the following event:
// A user clicks the next button after filling the first form.

window.dataLayer.push({
  'cdfDonationForm' : {
    'category' : 'Donation Form',
    'action' : 'Submit',
    'label' : 'Second Step',
  },
  'event' : 'cdfFormSubmitted'
});


  
