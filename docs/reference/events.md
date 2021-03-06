---
id: events
title: Events
sidebar_label: Events
---

Events occur over the course of your trip operation. When a trigger is associated with an event, that trigger will activate whenever a matching event occurs.
## Audio received

Occurs when an audio message has been received.


| Field | Type | Description |
| - | - | - |
| From | [Role](/docs/reference/resources#role) | The sender of the message. |
| To | [Role](/docs/reference/resources#role) | The recipient of the message. |



## Button pressed

Occurs when a button has been pressed.


| Field | Type | Description |
| - | - | - |
| **Button** | [Button panel](/docs/reference/panels#button) | The button that was pressed. |



## Call clip answered

Occurs when a player responds to a clip over the phone.


| Field | Type | Description |
| - | - | - |
| **Clip** | [Call clip](/docs/reference/resources#clip) |  |
| Allow partial | [Boolean](/docs/reference/fieldtypes#boolean) |  |



## Call answered

Occurs when a users answers a call initiated by Charter.


| Field | Type | Description |
| - | - | - |
| **From** | [Role](/docs/reference/resources#role) | The player who initiated the call. |
| **To** | [Role](/docs/reference/resources#role) | The player who answered the call. |



## Call ended

Occurs when a player hangs up the phone.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | Any of the players involved in the call. |



## Call received

Occurs when Charter receives a call initiated by a user.


| Field | Type | Description |
| - | - | - |
| **From** | [Role](/docs/reference/resources#role) | The player who initiated the call. |
| **To** | [Role](/docs/reference/resources#role) | The player receiving the call. |



## Cue signaled

Occurs when a cue has been signaled.


| Field | Type | Description |
| - | - | - |
| **Cue** | [Cue](/docs/reference/resources#cue) | The cue that was signaled. |



## Directions arrived

Occurs when a user confirms arrival at a destination.


| Field | Type | Description |
| - | - | - |
| **Directions** | [Directions panel](/docs/reference/panels#directions) | The directions that were completed. |



## Geofence entered

Occurs when a player enters a geofenced region.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role entering the geofence. |
| **Geofence** | [Geofence](/docs/reference/resources#geofence) | The geofence being entered. |



## Geofence exited

Occurs when a player exits a geofenced region.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role exiting the geofence. |
| **Geofence** | [Geofence](/docs/reference/resources#geofence) | The geofence being exited. |



## Image received

Occurs when an image message has been received.


| Field | Type | Description |
| - | - | - |
| From | [Role](/docs/reference/resources#role) | The sender of the message. |
| To | [Role](/docs/reference/resources#role) | The recipient of the message. |



## Moment occurred

Occurs when the current clock time reaches a scheduled moment.


| Field | Type | Description |
| - | - | - |
| **Moment** | [Moment](/docs/reference/resources#time) |  |
| Offset | [Duration](/docs/reference/fieldtypes#duration) | A time offset, e.g. 1h, 30s, 4.2m, -10s, -1.5h |



## Number entry submitted

Occurs when a user confirms a number on a number entry.


| Field | Type | Description |
| - | - | - |
| **Number entry** | [Number entry panel](/docs/reference/panels#numberpad) | The number entry that was submitted. |



## Scene started

Occurs when a scene has been started.





## Text entry submitted

Occurs when a user confirms text on a text entry field.


| Field | Type | Description |
| - | - | - |
| **Text entry** | [Text entry panel](/docs/reference/panels#text-entry) | The text_entry that was submitted. |



## Text received

Occurs when a text has been received.


| Field | Type | Description |
| - | - | - |
| From | [Role](/docs/reference/resources#role) | The sender of the message. |
| To | [Role](/docs/reference/resources#role) | The recipient of the message. |



