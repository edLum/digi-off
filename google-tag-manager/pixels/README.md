## Installing the GTM Pixels and dataLayer

#### Data Layer

To set up your data layer, add the code in the set_up_data_layer.js script in the head of your page above your container (GTM Standard Pixel) snippet:

The above snippet is an empty object that can be populated with information to pass to Google Tag Manager. For example, we might want to set data layer variables within the data layer to indicate that the page is a signup page and that the visitor has been identified as being a high-value customer. To do so, we'd populate our data layer as follows:

#### Standard Pixel

Copy the code inside the `head_tag_manager_pixel.js` and paste it on to every page of your website.
Paste this code as high in the `<head>` of the page as possible.

#### Secondary Pixel (fires when javascript is not available)

Additionally, paste the code inside the `body_tag_manager_pixel.js` immediately after the opening `<body>` tag:
