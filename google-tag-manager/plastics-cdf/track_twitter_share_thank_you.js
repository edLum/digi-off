// dataLayer push to be used for tracking the twitter share button on thank you page.
// TODO: Implement to be executed when the twitter button on the thank you page is clicked.
 
window.dataLayer.push({
  'cdfSoMeShare' : {
    'category': 'Twitter',
    'action' : 'Share',
    'label' : 'Thank You Page',
  },
  'event' : 'cdfSoMeShared'
});
