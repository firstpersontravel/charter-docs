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
| **Role** | [Role](/docs/reference/resources#role) | The role to add to the call. |



## Branch

A branch performs certain actions if an associated condition passes, and others if it does not.


| Field | Type | Description |
| - | - | - |
| If | [Condition](/docs/reference/conditions) | The primary condition evaluated first. |
| Actions | [[Action](/docs/reference/actions)] | Actions executed if the primary condition passes. |
| Elseifs | List | A list of conditions and actions that are evaluated in order if the primary condition fails. |
| Elseifs → If | [Condition](/docs/reference/conditions) | A condition to evaluate. |
| Elseifs → Actions | [[Action](/docs/reference/actions)] | Actions to execute if the condition of this Else If field passes. |
| Else | [[Action](/docs/reference/actions)] | Actions executed if the primary condition and all Else If conditions fail. |



## Focus tab

Bring up a specific tab on an interface.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to apply the change to. |
| **New value** | [Text](/docs/reference/fieldtypes#text) | The title of the tab to focus. |



## Increment variable

Increment the numerical value of a value by reference.


| Field | Type | Description |
| - | - | - |
| **Name** | [Variable name](/docs/reference/fieldtypes#variable-name) |  |
| Delta | [Number](/docs/reference/fieldtypes#number) |  |



## Initiate call

Initiate a call from Charter to a user.


| Field | Type | Description |
| - | - | - |
| **To** | [Role](/docs/reference/resources#role) | The player to initiate a call to. |
| **As** | [Role](/docs/reference/resources#role) | The player from whom the call originates. |



## Pause background audio

Pause currently playing audio.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to pause the audio for. |



## Play background audio

Start playing audio for a certain role.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to play the audio for. |



## Play call clip

Play a call clip on an active phone call.


| Field | Type | Description |
| - | - | - |
| **Clip** | [Call clip](/docs/reference/resources#clip) | The clip to play. |



## Resume background audio

Resume currently paused audio.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to resume the audio for. |



## Send audio

Send an audio message from one player to another.


| Field | Type | Description |
| - | - | - |
| **From** | [Role](/docs/reference/resources#role) | The role to send the message from. |
| **To** | [Role](/docs/reference/resources#role) | The role to send the message to. |



## Send email

Send an email from one player to another.


| Field | Type | Description |
| - | - | - |
| **From** | [Email account](/docs/reference/resources#inbox) | Inbox to send from. |
| **To** | [Role](/docs/reference/resources#role) | Role to send to. |
| **Subject** | [Text](/docs/reference/fieldtypes#text) | Subject line for the email. |
| **Body** | [Markdown](/docs/reference/fieldtypes#markdown) | Body of the email. |



## Send image

Send an image from one player to another.


| Field | Type | Description |
| - | - | - |
| **From** | [Role](/docs/reference/resources#role) | The role to send the message from. |
| **To** | [Role](/docs/reference/resources#role) | The role to send the message to. |



## Send text

Send a text message from one player to another.


| Field | Type | Description |
| - | - | - |
| **From** | [Role](/docs/reference/resources#role) | The role to send the message from. |
| **To** | [Role](/docs/reference/resources#role) | The role to send the message to. |
| **Content** | [Text](/docs/reference/fieldtypes#text) | The content of the message to send. |



## Send to page

Set a role to a page.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to send to a page. |
| **Page** | [Page](/docs/reference/resources#page) | The page to send the matching players to. |



## Set variable

Update a variable in the trip state to either a constant number or string, or to match another variable by reference.


| Field | Type | Description |
| - | - | - |
| **Name** | [Variable name](/docs/reference/fieldtypes#variable-name) | The name of the variable to set. |
| **To** | [Lookup](/docs/reference/fieldtypes#lookup) | The name of a variable, the value of which we want to look up and use for the value to set. Or a specific number, true, false, or text surrounded by double quotes. |



## Signal cue

Signal a cue. A cue does nothing on its own, but usually will have triggers attached, which fire actions.


| Field | Type | Description |
| - | - | - |
| **Cue** | [Cue](/docs/reference/resources#cue) | The cue to signal. |



## Start scene

Start a new scene.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene to start. |



## Stop background audio

Stop audio and reset audio state.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to stop the audio for. |



## Wait

Wait a fixed period of time.


| Field | Type | Description |
| - | - | - |
| **Duration** | [Duration](/docs/reference/fieldtypes#duration) | A duration, i.e. 1h, 30s, 4.2m |



## Wait before moment

Wait a fixed period of time before a scheduled moment.


| Field | Type | Description |
| - | - | - |
| **Until** | [Moment](/docs/reference/resources#time) |  |
| **Before** | [Duration](/docs/reference/fieldtypes#duration) | A time offset, i.e. 1h, 30s, 4.2m |



## Wait until moment

Wait for a moment to arrive.


| Field | Type | Description |
| - | - | - |
| **Until** | [Moment](/docs/reference/resources#time) |  |



