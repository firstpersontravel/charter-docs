---
id: resources
title: Resources
sidebar_label: Resources
---

Resources are the primary objects in your script.
## Achievement

A description of one aspect of the trip outcome. A use is to easily summarize player choices and progress from an overview screen. For instance, you can quickly see which branches they experienced, how many areas were unlocked, or other metrics.


| Field | Type | Description |
| - | - | - |
| Scene | [Scene](resources#scene) | The scene at which the outcome of this achievement is expected to be known. Before this scene, the achivement will be listed as 'pending'. |
| Style | `completion`, `choice` | "Completion" achievements are active if the test resolves to true. "Choice" achievements can have multiple titles based on the evaluation of the test. |
| Test | [Condition](conditions) | The value to test for to determine if this achievement has been activated. |
| Titles | dictionary | Text values to display based on the result of the achievement test. |
| Titles → Keys | string |  |
| Titles → Values | string |  |


## Checkpoint

A saved place marker for quickly resetting a trip while testing.


| Field | Type | Description |
| - | - | - |
| Scene | [Scene](resources#scene) | The scene that this checkpoint will restore the trip to. |
| Pages | dictionary | Pages to start each role at. |
| Pages → Keys | [Role](resources#role) |  |
| Pages → Values | [Page](resources#page) |  |
| Values | dictionary | Values to pre-set. |
| Values → Keys | name |  |
| Values → Values | simpleValue |  |


## Clip

A unit of text or audio that can be played as part of phone calls. A clip can expect an answer, which will fire a `clip_answered` event when it comes in.


| Field | Type | Description |
| - | - | - |
| Scene | [Scene](resources#scene) | The scene at which this clip will be played. |
| Transcript | string | The text transcript used to generate audio via speech-to-text. Only required if there is not a media path. |
| Voice | `alice`, `man`, `woman` | The voice used to generate audio via speech-to-text. Only required if there is not a media path. |
| Path | media | Media path for an audio clip to play. |
| Answer expected | boolean | Is an answer expected for this clip? |
| Answer hints | list | List of suggestions for decoding the voice of the answer. |
| Answer hints → Items | string | An option for the voice answer. |


## Content page

A section of static text or media that can be displayed in a user interface.


| Field | Type | Description |
| - | - | - |
| Interface | [Interface](resources#interface) | The parent interface in which this content page is displayed. |
| Section | string | A string indicating which a grouping for this content page. The the `content_browse` panel will show all visible content pages grouped by section. |
| Active if | [Condition](conditions) | An optional test to determine if the panel is visible or not. |
| Panels | list | List of user interface panels. |
| Panels → Items | [Panel](panels) |  |


## Cue

A signal that can be fired by button presses or other game actions. In and of itself, a cue does nothing, but most commonly it will be used to fire triggers that launch other game actions.


| Field | Type | Description |
| - | - | - |
| Scene | [Scene](resources#scene) | The scene during which this cue may be signaled. If this scene is not active, the cue will not be signaled. |


## Geofence

A circular region around a waypoint. It can be used to trigger events when players enter or leave a region, or when messages are sent from within that region.


| Field | Type | Description |
| - | - | - |
| Center | [Waypoint](resources#waypoint) | Center of the geofence. |
| Distance | number | Distance in meters around the center that is counted as within the geofence. |


## Inbox

An email inbox that you have access to. (This requires some custom setup.)


| Field | Type | Description |
| - | - | - |
| Role | [Role](resources#role) | Role this inbox belongs to. |
| Address | email | Email address to send from. Currently must be from @firstperson.travel. |


## Interface

A combination of panels that create a user interface for a tablet, phone, or device.


| Field | Type | Description |
| - | - | - |
| Type | `simple`, `tabs` | What type of interface to show. Currently just simple or tabs. |
| Section | string | Section of content pages to use as subpages. |
| Header panels | list | List of user interface panels to display at the top. |
| Header panels → Items | [Panel](panels) |  |


## Page

A user interface that can be displayed to a player when the corresponding scene and state is active.


| Field | Type | Description |
| - | - | - |
| Scene | [Scene](resources#scene) | The scene during which this page is active. If this scene is not the current scene, the page may still be displayed, but no user action may be taken. |
| Interface | [Interface](resources#interface) | The interface that this page is a part of. |
| Directive | string | A high-level directive for the player, that will be displayed in large font at the top of the interface. |
| Waypoint | [Waypoint](resources#waypoint) | An optional location for the activity corresponding to this page. This is only visible on the operations page, not to players. |
| Route | [Route](resources#route) | An optional route corresponding to this page. This is only visible on the operations page, not to players. |
| Panels | list | List of user interface panels. |
| Panels → Items | [Panel](panels) |  |


## Qr code

A QR code that can be scanned elsewhere.


| Field | Type | Description |
| - | - | - |
| Role | [Role](resources#role) | The role that is expected to scan this code. |
| Page | [Page](resources#page) | The page that this QR code will direct you to after scanning. |
| Cue | [Cue](resources#cue) | The cue that this QR code will signal if scanned. This cue will only fire if its scene and trip are currently active. |


## Relay

A phone number by which one player can contact another via text or phone calls.


| Field | Type | Description |
| - | - | - |
| For | [Role](resources#role) | The role who will be sending or receiving messages through this relay |
| As | [Role](resources#role) | The role whose messages are received and sent. This will usually be the same as the "for" role, except when you want the "for" role to be impersonating somebody else. In that case, the "as" role is the role being impersonated. |
| With | [Role](resources#role) | The role that is being messaged with. |
| Entryway | boolean | If this value is true, the relay will be assigned a universal number. New players can text this number to start a new trip. |


## Role

A participant in the experience. This participant can be a player, an actor, or a scripted automaton.


| Field | Type | Description |
| - | - | - |
| Type | `traveler`, `performer`, `scripted` | Type of role. "Traveler" refers to the audience, "performer" can be used for actors or internal staff, and "scripted" is for automated roles that are not assigned users. |
| Max players | integer | The maximum number of players who may be a part of this trip as this role. This can be used to support groups of more than one player and device, all sharing the same trip state. |
| Active if | [Condition](conditions) | If this is specified, the role will not be allowed to be assigned a user if this condition does not pass. |
| Starting page | [Page](resources#page) | The page that this role will start the trip open. |
| Required values | list | (Advanced) Indicates a list of special values that can be supplied for each user account that may play this role. This could be used to specify a custom image for each actor, or custom text associated with a certain role. |
| Required values → Items | simpleAttribute |  |
| Interface | [Interface](resources#interface) |  |


## Route

A path between one waypoint and another, including walking/driving directions. If one of the waypoints has multiple options, then multiple paths will be fetched.


| Field | Type | Description |
| - | - | - |
| From | [Waypoint](resources#waypoint) | The starting waypoint. |
| To | [Waypoint](resources#waypoint) | The ending waypoint |
| Mode | `driving`, `walking`, `cycling` | The method of transit for directions. |
| Via | list | An optional list of coordinates through through which the route must pass. |
| Via → Items | coords | A coord that the route must pass through. |


## Scene

A temporal unit of experience. Usually only one scene is active at a time.


| Field | Type | Description |
| - | - | - |
| Global | boolean | Enable if this scene is always active. |
| Active if | [Condition](conditions) | Global scenes can be activated or deactived by a conditional. |


## Time

A time at which things happen over the trip. The specific schedule is determined by a variant.




## Trigger

A fires when a defined event occurs. Once fired, it will apply a set of actions, which change the trip state.


| Field | Type | Description |
| - | - | - |
| Scene | [Scene](resources#scene) |  |
| Event | [Event](events) |  |
| Repeatable | boolean |  |
| Active if | [Condition](conditions) |  |
| Actions | list |  |
| Actions → Items | [Action](actions) |  |


## Variant

A variation in trip values, including timing, values, and waypoint options.


| Field | Type | Description |
| - | - | - |
| Default | boolean |  |
| Section | string |  |
| Initial values | dictionary |  |
| Initial values → Keys | simpleAttribute |  |
| Initial values → Values | simpleValue |  |
| Customizations | dictionary |  |
| Customizations → Keys | simpleAttribute |  |
| Customizations → Values | simpleValue |  |
| Waypoint options | dictionary |  |
| Waypoint options → Keys | [Waypoint](resources#waypoint) |  |
| Waypoint options → Values | name |  |
| Schedule | dictionary |  |
| Schedule → Keys | [Time](resources#time) |  |
| Schedule → Values | timeShorthand | A time, e.g. 3:00pm, 5:30am, +1d 4:15pm, +2d 12:00pm |


## Waypoint

A location used by the trip. Each waypoint can have multiple options that can be set for each trip. For instance, a "lunch" waypoint can have two options, each a different restaurant.


| Field | Type | Description |
| - | - | - |
| Options | list | A list of locations that this waypoint could refer to. |
| Options → Items | object |  |
| Options → Items → Address | address | The address of the location. |
| Options → Items → Title | string |  |
| Options → Items → Values | dictionary |  |
| Options → Items → Values → Keys | simpleAttribute |  |
| Options → Items → Values → Values | simpleValue |  |


