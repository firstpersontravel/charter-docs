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
| **Role name** | [Role](/docs/reference/resources#role) | The role to add to the call. |


## Adjust page

Send an ephemeral signal to a player. This is deprecated.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to send the adjustment to. |
| **New value** | [String](/docs/reference/fieldtypes#string) | The adjustment value to send. |


## Conditional

A conditional branch.


| Field | Type | Description |
| - | - | - |
| **If** | [Condition](/docs/reference/conditions) |  |
| Actions | [[Action](/docs/reference/actions)] |  |
| Elseifs | [Object] |  |
| Elseifs → Items | Object |  |
| Elseifs → Items → If | [Condition](/docs/reference/conditions) |  |
| Elseifs → Items → Actions | [[Action](/docs/reference/actions)] |  |
| Else | [[Action](/docs/reference/actions)] |  |


## Increment value

Increment the numerical value of a value by reference.


| Field | Type | Description |
| - | - | - |
| **Value ref** | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| Delta | [Number](/docs/reference/fieldtypes#number) |  |


## Initiate call

Initiate a call from one player to another.


| Field | Type | Description |
| - | - | - |
| **To role name** | [Role](/docs/reference/resources#role) | The player to initiate a call to. |
| **As role name** | [Role](/docs/reference/resources#role) | The player from whom the call originates. |


## Pause audio

Pause currently playing audio.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to pause the audio for. |


## Play audio

Start playing audio for a certain role.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to play the audio for. |


## Play clip

Play a clip on an active phone call.


| Field | Type | Description |
| - | - | - |
| **Clip name** | [Clip](/docs/reference/resources#clip) | The clip to play. |


## Resume audio

Resume currently paused audio.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to resume the audio for. |


## Send audio

Send an audio message from one player to another.


| Field | Type | Description |
| - | - | - |
| **From role name** | [Role](/docs/reference/resources#role) | The role to send the message from. |
| **To role name** | [Role](/docs/reference/resources#role) | The role to send the message to. |


## Send email

Send an email from one player to another.


| Field | Type | Description |
| - | - | - |
| **From** | [Inbox](/docs/reference/resources#inbox) | Inbox to send from. |
| **To** | [Role](/docs/reference/resources#role) | Role to send to. |
| **Subject** | [String](/docs/reference/fieldtypes#string) | Subject line for the email. |
| **Body** | [Markdown](/docs/reference/fieldtypes#markdown) | Body of the email. |
| Cc | [Email](/docs/reference/fieldtypes#email) | Email address to CC. |
| Bcc | [Email](/docs/reference/fieldtypes#email) | Email address to BCC. |


## Send image

Send an image from one player to another.


| Field | Type | Description |
| - | - | - |
| **From role name** | [Role](/docs/reference/resources#role) | The role to send the message from. |
| **To role name** | [Role](/docs/reference/resources#role) | The role to send the message to. |


## Send text

Send a text message from one player to another.


| Field | Type | Description |
| - | - | - |
| **From role name** | [Role](/docs/reference/resources#role) | The role to send the message from. |
| **To role name** | [Role](/docs/reference/resources#role) | The role to send the message to. |
| **Content** | [String](/docs/reference/fieldtypes#string) | The content of the message to send. |


## Send to page

Set a player to a page by role.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to send to a page. |
| **Page name** | [Page](/docs/reference/resources#page) | The page to send the matching players to. |


## Set value

Update a value in the trip state to either a constant number or string, or to match another value by reference.


| Field | Type | Description |
| - | - | - |
| **Value ref** | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| **New value ref** | [Lookup](/docs/reference/fieldtypes#lookup) |  |


## Signal cue

Signal a cue. A cue does nothing on its own, but usually will have triggers attached, which fire actions.


| Field | Type | Description |
| - | - | - |
| **Cue name** | [Cue](/docs/reference/resources#cue) | The cue to signal. |


## Start scene

Start a new scene.


| Field | Type | Description |
| - | - | - |
| **Scene name** | [Scene](/docs/reference/resources#scene) |  |


## Stop audio

Stop audio and reset audio state.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to stop the audio for. |


## Wait

Wait a fixed period of time.


| Field | Type | Description |
| - | - | - |
| **Duration** | [Time offset](/docs/reference/fieldtypes#time-offset) | A duration, i.e. 1h, 30s, 4.2m |


## Wait before time

Wait a fixed period of time before a scheduled time.


| Field | Type | Description |
| - | - | - |
| **Until** | [Time](/docs/reference/resources#time) |  |
| **Before** | [Time offset](/docs/reference/fieldtypes#time-offset) | A time offset, i.e. 1h, 30s, 4.2m |


## Wait for time

Wait a fixed period of time.


| Field | Type | Description |
| - | - | - |
| **Until** | [Time](/docs/reference/resources#time) |  |


