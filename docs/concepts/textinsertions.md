---
id: textinsertions
title: Text insertions
sidebar_label: Text insertions
---

Text appears in many places in Charter: it is displayed as part of panels like the text panel, button panel, etc. It can be sent as part of a message or spoken aloud as part of a phone call.

In all places where text is shown to a participant, certain values can be inserted that take on dynamic contents based on the state of the trip and participants. These all are enclosed by double curly braces, as in  `{{special_value}}`, and are documented below.

## Trip insertions

* `{{date}}`: Trip date
* `{{schedule.<time_name>}}`: The clock time corresponding to a [Time](/docs/reference/resources#time) in your script, in the timezone of your Experience. For instance, if you have a Time with the title "Player's Arrival", and that time is scheduled for 3:00pm in a Variant, then "{{schedule.players_arrival}}" will appear as "3:00pm" in the player's interface.
* `{{<customization_name>}}`: The value of a customization set in `Customization Defaults` of a [Variant](/docs/reference/resources#variant).
* `{{<variable_name>}}`: The value of a variable set by the `Set Variable` action, or set in `Variable Defaults` of a [Variant](/docs/reference/resources#variant).

## Player insertions

You can include some insertions for the current player.

* `{{player.link}}`: A URL that the player can go to to see their current page.
* `{{player.email}}`: The email of the current player.
* `{{player.headline}}`: The headline of the player's current page.
* `{{player.phone_number}}`: The player's phone number.

## Event insertions

When actions are triggered by events, you can access some insertions unique to those events.

* `{{event.content}}`: The content of a text message, available on the [Text received](/docs/reference/events#text-received) event.
* `{{event.submission}}`: The content of a numberpad or text entry submission, available on the [Number entry submitted](/docs/reference/events#number-entry-submitted) or [Text entry submitted](/docs/reference/events#text-entry-submitted) event.
