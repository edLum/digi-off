// dataLayer push to be used for tracking the facebook share button on page's footer
// TODO: Implement to be executed when the facebook share button on the footer's page is clicked.

window.dataLayer.push({
  'fbShare' : {
    'category': 'Facebook',
    'action' : 'Share',
    'label' : 'Page Footer',
  },
  'event' : 'Facebook Share'
});
