# Fish Box eshop - setup Google Tag Manager tracking

### Installing the Tag Manager pixel

First of all, **we need to install the Google Tag Manager script**. You will find in [this folder](https://github.com/edLum/digi-off/tree/master/google-tag-manager/pixels) instructions and the necessary code to isntall the pixel.

### Tracking events

We want to track what happens in:

* the calendar where the user picks the dates
* the order-info "page" where the users oversees and modifies his order
* the checkout page where the user completes the purchase
* and the thank-you page where the user confirms the sucess or failure of his purchase.

Each category corresponds to a folder containing the scripts that need to run in order to track the events we want.
The first line in each file is a comment describing on which event the script should run.

What we do is push objects to the dataLayer containing the info we need and the event indicating what happened. All dataLayer pushes contain static data except in the script where we are tracking a completed purchase.

In the script describing the [purchase completed event](https://github.com/edLum/digi-off/blob/master/google-tag-manager/sea-box/thank-you/purchase_completed.js) we need to record the value of the box purchased, and the quantity of each box purchased so we need three variables containging that information

