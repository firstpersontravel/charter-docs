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
| **Text** | [String](/docs/reference/fieldtypes#string) | Visible label on the button. |
| Style | `solo` |  |


## Choice

Displays a multiple choice option. When selected by a user, the curresponding value in the trip state will be updated.


| Field | Type | Description |
| - | - | - |
| **Text** | [String](/docs/reference/fieldtypes#string) | Visible title for the choice. |
| **Value ref** | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| **Choices** | [Object] |  |
| Choices → Items | Object |  |
| **Choices → Items → Value** | [String](/docs/reference/fieldtypes#string) |  |
| **Choices → Items → Text** | [String](/docs/reference/fieldtypes#string) |  |


## Content browse

Displays an index page of content. The user can browse through all visible content pages matching the given section.


| Field | Type | Description |
| - | - | - |
| **Section** | [String](/docs/reference/fieldtypes#string) |  |


## Directions

Displays live directions for the given route.


| Field | Type | Description |
| - | - | - |
| Route | [Route](/docs/reference/resources#route) |  |
| Waypoint | [Waypoint](/docs/reference/resources#waypoint) |  |
| Geofence | [Geofence](/docs/reference/resources#geofence) |  |
| Destination name | [String](/docs/reference/fieldtypes#string) |  |


## Image

Displays an image.


| Field | Type | Description |
| - | - | - |
| Style | `float-right` |  |


## Messages

Displays a browsable interface of all messages between a set of players.


| Field | Type | Description |
| - | - | - |
| **As** | [Role](/docs/reference/resources#role) |  |
| **With** | [Role](/docs/reference/resources#role) |  |


## Messages browse

Displays a browsable interface of all messages for a player.




## Numberpad

Displays a numberpad.


| Field | Type | Description |
| - | - | - |
| Submit | [String](/docs/reference/fieldtypes#string) |  |
| Placeholder | [String](/docs/reference/fieldtypes#string) |  |


## Outlet

For internal use.




## Qr display

Displays a QR Code.


| Field | Type | Description |
| - | - | - |
| **Qr code** | [Qr code](/docs/reference/resources#qr-code) |  |


## Text

Displays simple text.


| Field | Type | Description |
| - | - | - |
| **Text** | [Markdown](/docs/reference/fieldtypes#markdown) |  |
| Style | `centered` or `quest` |  |


## Text entry

Displays a text entry field.


| Field | Type | Description |
| - | - | - |
| Submit | [String](/docs/reference/fieldtypes#string) |  |
| Placeholder | [String](/docs/reference/fieldtypes#string) |  |


## Video

Displays a video.




## Yesno

Displays a yes/no choice. When updated, the corresponding value in the trip state will be updated.


| Field | Type | Description |
| - | - | - |
| **Text** | [String](/docs/reference/fieldtypes#string) |  |
| **Value ref** | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |


