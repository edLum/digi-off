# Plastics Crowdfunding - Google Tag Manager(GTM) setup

Documenting how the dataLayer is setup in the plastics crowdfunding page to enable several events tracking. 

## Donation Tracking

### Objective

Tracking donation completion event. On donation completion push to the dataLayer an object containing the donation info and GTM event indicating that a donation was completed.

### Implementation

On user submitting the form, push to dataLayer the following data:
* value (dynamic - `giftAmountTracker`)
* action (dynamic - `paymentMethod`)
* category (static - "Once Off Donation")
* label (static - "Plastics Crowdfunding")

In the following table you will find the script implementing the process above:

Action |  Script to use | Additional Info
------------ | ------------- | ---------------
Donation Completed | track_donation_completed.js | Besides the push to dataLayer, the script contains necessary initialization code

## Form Submission
![Donation Form](http://i.imgur.com/7QnY0Zh.png)
### Objective

Tracking donation form completion. We are only interested only in the "first" and "second" forms (1st and 2nd step in the donation process). We want to track, whenever the user goes from step 1 to step 2, and from step 2 to step 3. This way we will track how and when people fill the form or abandon it.

### Implementation

On user clicking from step 1 to step 2, push dataLayer event with the relevant information. Same process for going from step 2 to step 3. In the following table you will find the scripts containing the push for the two steps:

Action | Script to use 
------------ | ---------------
Step 1 to Step 2 | `track_form_first.js`
Step 2 to Step 3|  `track_form_second.js`

## Social Media(SoMe) Buttons
![Footer SoMe buttons](http://i.imgur.com/qhVDSeI.png)
### Obective

Tracking clicks on Social Media buttons. We record an event for all social media (twitter | facebook) and button placements (page-footer | thank-you-page), recording the various info in event category, action and label.

### Implementation

On "click" to a SoMe button push to the dataLayer an object describing the event. In the following table you will find the scripts containing the push for every SoMe "button":

Action | Location | Script to use 
------------ | ------------- | ---------------
Facbook Share | Footer | `track_facebook_share_footer.js`
Facebook Share | Thank You | `track_facebook_share_thank_you.js`
Twitter Share | Footer | `track_twitter_share_footer.js`
Twitter Share | Thank You | `track_twitter_share_thank_you.js`


