## Donation Tracking

### Objective

Track donation completion event. On donation completion push to the dataLayer an object containing the donation info and GTM event indicating that a donation was completed.

### Donation Completed Script

Use the `track_donation_completed.js` script. Besides the actual dataLayer push, we have to get the values for donation amount and the donation payment method (credit-card | direct-debit)

## Form Submission
![Donation Form](http://i.imgur.com/7QnY0Zh.png)
### Objective

Track donation form submission process. We are only interested only in the "first" and "second" forms (1st and 2nd step in the donation process). We want to send a GTM event, whenever the user submits the chosen amount, and a second one when the user submits his personal info. This way we will track how and when people fill the form or abandon it.

### Form Submission scripts

* First Step: Invoke dataLayer push found in `track_form_first.js` on first step

* Second Step: Invoke dataLayer push found in `track_form_second.js` on second step

## Social Media Buttons
![Footer SoMe buttons](http://i.imgur.com/qhVDSeI.png)
### Obective

Track clicks on Social Media buttons. We record seperate events for social media (twitter | facebook) and button placement (page-footer | thank-you-page).

### Page Footer Scripts

* Facebook: Invoke dataLayer push found in `track_facebook_share_footer.js` on FB share button clicked.

* Twitter: Invoke script `track_twitter_share_footer.js` on button clicked.

### Thank You Page Scripts

![Thank You Page SoMe buttons](http://insert-png-url.here/img.png)

* Facebook: Invoke script `track_facebook_share_thank_you.js` on button clicked.

* Facebook: Invoke script `track_twitter_share_thank_you.js` on button clicked.
