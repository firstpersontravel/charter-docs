---
id: events
title: Events
sidebar_label: Events
---

Events occur over the course of your trip operation. When a trigger is associated with an event, that trigger will activate whenever a matching event occurs.
## Audio received

Occurs when am audio message has been received.


| Field | Type | Description |
| - | - | - |
| From | [Role](/docs/reference/resources#role) | The sender of the message. |
| To | [Role](/docs/reference/resources#role) | The recipient of the message. |
| Geofence | [Geofence](/docs/reference/resources#geofence) | Optionally, a geofence within which the message must have been sent. |


## Button pressed

Occurs when a button has been pressed.


| Field | Type | Description |
| - | - | - |
| **Button** | [Button Panel](/docs/reference/panels#button) | The button that was pressed. |


## Call answered

Occurs when a player answers a call.


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

Occurs when a player receives a call.


| Field | Type | Description |
| - | - | - |
| **From** | [Role](/docs/reference/resources#role) | The player who initiated the call. |
| **To** | [Role](/docs/reference/resources#role) | The player receiving the call. |


## Clip answered

Occurs when a player responds to a clip over the phone.


| Field | Type | Description |
| - | - | - |
| **Clip** | [Clip](/docs/reference/resources#clip) |  |
| Allow partial | [Boolean](/docs/reference/fieldtypes#boolean) |  |


## Cue signaled

Occurs when a cue has been signaled.


| Field | Type | Description |
| - | - | - |
| **Cue** | [Cue](/docs/reference/resources#cue) | The cue that was signaled. |


## Directions arrived

Occurs when a user confirms arrival at a destination.


| Field | Type | Description |
| - | - | - |
| **Directions** | [Directions Panel](/docs/reference/panels#directions) | The directions that were completed. |


## Geofence entered

Occurs when a player enters a geofenced region.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role entering the geofence. |
| **Geofence** | [Geofence](/docs/reference/resources#geofence) | The geofence being entered. |


## Image received

Occurs when am image message has been received.


| Field | Type | Description |
| - | - | - |
| From | [Role](/docs/reference/resources#role) | The sender of the message. |
| To | [Role](/docs/reference/resources#role) | The recipient of the message. |
| Geofence | [Geofence](/docs/reference/resources#geofence) | Optionally, a geofence within which the message must have been sent. |


## Numberpad submitted

Occurs when a user confirms a number on a numberpad.


| Field | Type | Description |
| - | - | - |
| **Numberpad** | [Numberpad Panel](/docs/reference/panels#numberpad) | The numberpad that was submitted. |


## Scene started

Occurs when a scene has been started.




## Text entry submitted

Occurs when a user confirms text on a text entry field.


| Field | Type | Description |
| - | - | - |
| **Text entry** | [Text entry Panel](/docs/reference/panels#text-entry) | The text_entry that was submitted. |


## Text received

Occurs when a text has been received.


| Field | Type | Description |
| - | - | - |
| From | [Role](/docs/reference/resources#role) | The sender of the message. |
| To | [Role](/docs/reference/resources#role) | The recipient of the message. |
| Contains | [String](/docs/reference/fieldtypes#string) | Optionally, a message that the message must contain. |
| Geofence | [Geofence](/docs/reference/resources#geofence) | Optionally, a geofence within which the message must have been sent. |


## Time occurred

Occurs when the current time reaches a scheduled time.


| Field | Type | Description |
| - | - | - |
| **Time** | [Time](/docs/reference/resources#time) |  |
| Offset | [Time offset](/docs/reference/fieldtypes#time-offset) | A time offset, e.g. 1h, 30s, 4.2m, -10s, -1.5h |

