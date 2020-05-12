---
id: actions
title: Actions
sidebar_label: Actions
---

Every action makes a change in the state of your running trip.
## Add to call

Add a player to a conference call.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to add to the call. |


## Adjust page

Send an ephemeral signal to a player. This is deprecated.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to send the adjustment to. |
| New value | string | The adjustment value to send. |


## Conditional

A conditional branch.


| Field | Type | Description |
| - | - | - |
| If | [Condition](conditions) |  |
| Actions | list |  |
| Actions → Items | [Action](actions) |  |
| Elseifs | list |  |
| Elseifs → Items | object |  |
| Elseifs → Items → If | [Condition](conditions) |  |
| Elseifs → Items → Actions | list |  |
| Elseifs → Items → Actions → Items | [Action](actions) |  |
| Else | list |  |
| Else → Items | [Action](actions) |  |


## Increment value

Increment the numerical value of a value by reference.


| Field | Type | Description |
| - | - | - |
| Value ref | simpleAttribute |  |
| Delta | number |  |


## Initiate call

Initiate a call from one player to another.


| Field | Type | Description |
| - | - | - |
| To role name | [Role](resources#role) | The player to initiate a call to. |
| As role name | [Role](resources#role) | The player from whom the call originates. |


## Pause audio

Pause currently playing audio.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to pause the audio for. |


## Play audio

Start playing audio for a certain role.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to play the audio for. |


## Play clip

Play a clip on an active phone call.


| Field | Type | Description |
| - | - | - |
| Clip name | [Clip](resources#clip) | The clip to play. |


## Resume audio

Resume currently paused audio.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to resume the audio for. |


## Send audio

Send an audio message from one player to another.


| Field | Type | Description |
| - | - | - |
| From role name | [Role](resources#role) | The role to send the message from. |
| To role name | [Role](resources#role) | The role to send the message to. |


## Send email

Send an email from one player to another.


| Field | Type | Description |
| - | - | - |
| From | [Inbox](resources#inbox) | Inbox to send from. |
| To | [Role](resources#role) | Role to send to. |
| Subject | string | Subject line for the email. |
| Body | markdown | Body of the email. |
| Cc | email | Email address to CC. |
| Bcc | email | Email address to BCC. |


## Send image

Send an image from one player to another.


| Field | Type | Description |
| - | - | - |
| From role name | [Role](resources#role) | The role to send the message from. |
| To role name | [Role](resources#role) | The role to send the message to. |


## Send text

Send a text message from one player to another.


| Field | Type | Description |
| - | - | - |
| From role name | [Role](resources#role) | The role to send the message from. |
| To role name | [Role](resources#role) | The role to send the message to. |
| Content | string | The content of the message to send. |


## Send to page

Set a player to a page by role.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to send to a page. |
| Page name | [Page](resources#page) | The page to send the matching players to. |


## Set value

Update a value in the trip state to either a constant number or string, or to match another value by reference.


| Field | Type | Description |
| - | - | - |
| Value ref | simpleAttribute |  |
| New value ref | lookupable |  |


## Signal cue

Signal a cue. A cue does nothing on its own, but usually will have triggers attached, which fire actions.


| Field | Type | Description |
| - | - | - |
| Cue name | [Cue](resources#cue) | The cue to signal. |


## Start scene

Start a new scene.


| Field | Type | Description |
| - | - | - |
| Scene name | [Scene](resources#scene) |  |


## Stop audio

Stop audio and reset audio state.


| Field | Type | Description |
| - | - | - |
| Role name | [Role](resources#role) | The role to stop the audio for. |


## Wait

Wait a fixed period of time.


| Field | Type | Description |
| - | - | - |
| Duration | timeOffset | A duration, i.e. 1h, 30s, 4.2m |


## Wait before time

Wait a fixed period of time before a scheduled time.


| Field | Type | Description |
| - | - | - |
| Until | [Time](resources#time) |  |
| Before | timeOffset | A time offset, i.e. 1h, 30s, 4.2m |


## Wait for time

Wait a fixed period of time.


| Field | Type | Description |
| - | - | - |
| Until | [Time](resources#time) |  |


