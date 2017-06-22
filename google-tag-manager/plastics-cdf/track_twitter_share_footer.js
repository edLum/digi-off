// dataLayer push to be used for tracking the twitter share button on page's footer
// TODO: Implement to be executed when the twitter share button on the footer's page is clicked.

window.dataLayer.push({
  'twShare' : {
    'category': 'Twitter',
    'action' : 'Share',
    'label' : 'Footer',
  },
  'event' : 'twitterShareFooter'
});
