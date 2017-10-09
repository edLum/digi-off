//  to be fired when a purchase's completion is confirmed in the thank-you page

window.dataLayer.push{
  'category': 'thank-you',
  'action': 'purchase-complete', 
  'label': 'fish-box',
  'quantity-small': numberOfSmallBoxes
  'quantity-large': numberOfLargeBoxes
  'value': totalPurchaseValue,
  'event': 'purchase-completed'
});

