---
id: panels
title: Panels
sidebar_label: Panels
---

A panel is the core component for user experience in Charter. Each page is comprised of as many panels as you like.
## Audio

An audio clip that can be played at will.





## Browse messages

A browsable interface of all messages for a role.


| Field | Type | Description |
| - | - | - |
| As | [Role](/docs/reference/resources#role) | Which role to view messages as. Defaults to current player. |



## Browse subpages

An index page of subpages. The user can browse through all visible subpages matching a given section.


| Field | Type | Description |
| - | - | - |
| **Section** | [Text](/docs/reference/fieldtypes#text) |  |



## Button

A button.


| Field | Type | Description |
| - | - | - |
| **Text** | [Text](/docs/reference/fieldtypes#text) | Visible label on the button. |
| Style | `solo` |  |



## Choice

A multiple choice option. When selected by a user, the curresponding variable in the trip state will be updated.


| Field | Type | Description |
| - | - | - |
| **Text** | [Text](/docs/reference/fieldtypes#text) | Visible title for the choice. |
| **Value ref** | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| **Choices** | List |  |
| **Choices → Value** | [Text](/docs/reference/fieldtypes#text) |  |
| **Choices → Text** | [Text](/docs/reference/fieldtypes#text) |  |



## Current page

The current page for this player. Should only be used as part of an interface.





## Directions

Displays live directions for the given route.


| Field | Type | Description |
| - | - | - |
| Route | [Route](/docs/reference/resources#route) |  |
| Waypoint | [Place](/docs/reference/resources#waypoint) |  |
| Geofence | [Geofence](/docs/reference/resources#geofence) |  |
| Destination name | [Text](/docs/reference/fieldtypes#text) |  |



## Image

An image.


| Field | Type | Description |
| - | - | - |
| Style | `float-right` |  |



## Message thread

All messages between two roles.


| Field | Type | Description |
| - | - | - |
| **With** | [Role](/docs/reference/resources#role) | Which role to view messages with. |
| As | [Role](/docs/reference/resources#role) | Which role to view messages as. Defaults to current player. |



## Number entry

A number input.


| Field | Type | Description |
| - | - | - |
| Submit button label | [Text](/docs/reference/fieldtypes#text) |  |
| Placeholder text | [Text](/docs/reference/fieldtypes#text) |  |



## Text

A simple text.


| Field | Type | Description |
| - | - | - |
| **Text** | [Markdown](/docs/reference/fieldtypes#markdown) |  |
| Style | `centered` or `banner` | Choose centered to center your text, or banner to give it a highlighted background. |



## Text entry

A text entry field.


| Field | Type | Description |
| - | - | - |
| Submit button label | [Text](/docs/reference/fieldtypes#text) |  |
| Placeholder text | [Text](/docs/reference/fieldtypes#text) |  |



## Video

A video.





## Yesno

A yes/no choice. When updated, the corresponding variable in the trip state will be updated.


| Field | Type | Description |
| - | - | - |
| **Text** | [Text](/docs/reference/fieldtypes#text) |  |
| **Save to variable name** | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |



