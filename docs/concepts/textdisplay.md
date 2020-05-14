---
id: textdisplay
title: Text Display
sidebar_label: Text Display
---

Text appears in many places in Charter: it is displayed as part of panels like the text panel, button panel, etc. It can be sent as part of a message or spoken aloud as part of a phone call.

In all places where text is shown to a participant, certain special values can be inserted that take on dynamic contents based on the state of the trip and participants. These all are enclosed by double curly braces, as in  `{{special_value}}`, and are documented below.

## Trip special vlues

* `{{date}}`: Trip date

Any value or customization can be accessed by referencing the name of that value in double curly braces. For instance, if a "Set Value" action sets the "greeting" value to "hello there", and the "name" value to "David", then a text field set to "{{greeting}}, {{name}}" will appear to the participant as "hello there, David".

## Player special values

* `{{player.link}}`: A URL that the player can go to to see their current page.
* `{{player.email}}`: The email of the current player.
* `{{player.directive}}`: The directive of the player's current page.
* `{{player.phone_number}}`: The player's phone number.
