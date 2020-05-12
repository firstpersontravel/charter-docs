---
id: panels
title: Panels
sidebar_label: Panels
---

A panel is the core component for user experience in Charter. Each page is comprised of as many panels as you like.
## Audio foreground

Displays an audio message that can be played at will.




## Button

Displays a button.


| Field | Type | Description |
| - | - | - |
| Text | string | Visible label on the button. |
| Style | `solo` |  |


## Choice

Displays a multiple choice option. When selected by a user, the curresponding value in the trip state will be updated.


| Field | Type | Description |
| - | - | - |
| Text | string | Visible title for the choice. |
| Value ref | simpleAttribute |  |
| Choices | list |  |
| Choices → Items | object |  |
| Choices → Items → Value | string |  |
| Choices → Items → Text | string |  |


## Content browse

Displays an index page of content. The user can browse through all visible content pages matching the given section.


| Field | Type | Description |
| - | - | - |
| Section | string |  |


## Directions

Displays live directions for the given route.


| Field | Type | Description |
| - | - | - |
| Route | [Route](resources#route) |  |
| Waypoint | [Waypoint](resources#waypoint) |  |
| Geofence | [Geofence](resources#geofence) |  |
| Destination name | string |  |


## Image

Displays an image.


| Field | Type | Description |
| - | - | - |
| Style | `float-right` |  |


## Messages

Displays a browsable interface of all messages between a set of players.


| Field | Type | Description |
| - | - | - |
| As | [Role](resources#role) |  |
| With | [Role](resources#role) |  |


## Messages browse

Displays a browsable interface of all messages for a player.




## Numberpad

Displays a numberpad.


| Field | Type | Description |
| - | - | - |
| Submit | string |  |
| Placeholder | string |  |


## Outlet

For internal use.




## Qr display

Displays a QR Code.


| Field | Type | Description |
| - | - | - |
| Qr code | [Qr code](resources#qr-code) |  |


## Text

Displays simple text.


| Field | Type | Description |
| - | - | - |
| Text | markdown |  |
| Style | `centered`, `quest` |  |


## Text entry

Displays a text entry field.


| Field | Type | Description |
| - | - | - |
| Submit | string |  |
| Placeholder | string |  |


## Video

Displays a video.




## Yesno

Displays a yes/no choice. When updated, the corresponding value in the trip state will be updated.


| Field | Type | Description |
| - | - | - |
| Text | string |  |
| Value ref | simpleAttribute |  |


