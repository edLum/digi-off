// dataLayer push to be used for tracking the facebook share button on thank you page
// TODO: Implement to be executed when the facebook button on the thank you page is clicked.

window.dataLayer.push({
  'cdfSoMeShare' : {
    'category': 'Facebook',
    'action' : 'Share',
    'label' : 'Thank You Page',
  },
  'event' : 'cdfSoMeShared'
});
