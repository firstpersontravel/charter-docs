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
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene at which the outcome of this achievement is expected to be known. Before this scene, the achivement will be listed as 'pending'. |
| **Style** | `completion` or `choice` | "Completion" achievements are active if the test resolves to true. "Choice" achievements can have multiple titles based on the evaluation of the test. |
| Test | [Condition](/docs/reference/conditions) | The value to test for to determine if this achievement has been activated. |
| **Titles** | Dictionary | Text values to display based on the result of the achievement test. |
| Titles → Keys | [String](/docs/reference/fieldtypes#string) |  |
| Titles → Values | [String](/docs/reference/fieldtypes#string) |  |


## Checkpoint

A saved place marker for quickly resetting a trip while testing.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene that this checkpoint will restore the trip to. |
| Pages | Dictionary | Pages to start each role at. |
| Pages → Keys | [Role](/docs/reference/resources#role) |  |
| Pages → Values | [Page](/docs/reference/resources#page) |  |
| Values | Dictionary | Values to pre-set. |
| Values → Keys | [Name](/docs/reference/fieldtypes#name) |  |
| Values → Values | [Simple value](/docs/reference/fieldtypes#simple-value) |  |


## Clip

A unit of text or audio that can be played as part of phone calls. A clip can expect an answer, which will fire a `clip_answered` event when it comes in.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene at which this clip will be played. |
| Transcript | [String](/docs/reference/fieldtypes#string) | The text transcript used to generate audio via speech-to-text. Only required if there is not a media path. |
| Voice | `alice`, `man` or `woman` | The voice used to generate audio via speech-to-text. Only required if there is not a media path. |
| Path | [Media](/docs/reference/fieldtypes#media) | Media path for an audio clip to play. |
| Answer expected | [Boolean](/docs/reference/fieldtypes#boolean) | Is an answer expected for this clip? |
| Answer hints | [[String](/docs/reference/fieldtypes#string)] | List of suggestions for decoding the voice of the answer. |


## Content page

A section of static text or media that can be displayed in a user interface.


| Field | Type | Description |
| - | - | - |
| **Interface** | [Interface](/docs/reference/resources#interface) | The parent interface in which this content page is displayed. |
| **Section** | [String](/docs/reference/fieldtypes#string) | A string indicating which a grouping for this content page. The the `content_browse` panel will show all visible content pages grouped by section. |
| Active if | [Condition](/docs/reference/conditions) | An optional test to determine if the panel is visible or not. |
| **Panels** | [[Panel](/docs/reference/panels)] | List of user interface panels. |


## Cue

A signal that can be fired by button presses or other game actions. In and of itself, a cue does nothing, but most commonly it will be used to fire triggers that launch other game actions.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene during which this cue may be signaled. If this scene is not active, the cue will not be signaled. |


## Geofence

A circular region around a waypoint. It can be used to trigger events when players enter or leave a region, or when messages are sent from within that region.


| Field | Type | Description |
| - | - | - |
| **Center** | [Waypoint](/docs/reference/resources#waypoint) | Center of the geofence. |
| **Distance** | [Number](/docs/reference/fieldtypes#number) | Distance in meters around the center that is counted as within the geofence. |


## Inbox

An email inbox that you have access to. (This requires some custom setup.)


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | Role this inbox belongs to. |
| **Address** | [Email](/docs/reference/fieldtypes#email) | Email address to send from. Currently must be from @firstperson.travel. |


## Interface

A combination of panels that create a user interface for a tablet, phone, or device.


| Field | Type | Description |
| - | - | - |
| **Type** | `simple` or `tabs` | What type of interface to show. Currently just simple or tabs. |
| Section | [String](/docs/reference/fieldtypes#string) | Section of content pages to use as subpages. |
| Header panels | [[Panel](/docs/reference/panels)] | List of user interface panels to display at the top. |


## Page

A user interface that can be displayed to a player when the corresponding scene and state is active.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene during which this page is active. If this scene is not the current scene, the page may still be displayed, but no user action may be taken. |
| **Interface** | [Interface](/docs/reference/resources#interface) | The interface that this page is a part of. |
| Directive | [String](/docs/reference/fieldtypes#string) | A high-level directive for the player, that will be displayed in large font at the top of the interface. |
| Waypoint | [Waypoint](/docs/reference/resources#waypoint) | An optional location for the activity corresponding to this page. This is only visible on the operations page, not to players. |
| Route | [Route](/docs/reference/resources#route) | An optional route corresponding to this page. This is only visible on the operations page, not to players. |
| Panels | [[Panel](/docs/reference/panels)] | List of user interface panels. |


## Qr code

A QR code that can be scanned elsewhere.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role that is expected to scan this code. |
| Page | [Page](/docs/reference/resources#page) | The page that this QR code will direct you to after scanning. |
| Cue | [Cue](/docs/reference/resources#cue) | The cue that this QR code will signal if scanned. This cue will only fire if its scene and trip are currently active. |


## Relay

A phone number by which one player can contact another via text or phone calls.


| Field | Type | Description |
| - | - | - |
| **For** | [Role](/docs/reference/resources#role) | The role who will be sending or receiving messages through this relay |
| **As** | [Role](/docs/reference/resources#role) | The role whose messages are received and sent. This will usually be the same as the "for" role, except when you want the "for" role to be impersonating somebody else. In that case, the "as" role is the role being impersonated. |
| **With** | [Role](/docs/reference/resources#role) | The role that is being messaged with. |
| Entryway | [Boolean](/docs/reference/fieldtypes#boolean) | If this value is true, the relay will be assigned a universal number. New players can text this number to start a new trip. |


## Role

A participant in the experience. This participant can be a player, an actor, or a scripted automaton.


| Field | Type | Description |
| - | - | - |
| **Type** | `traveler`, `performer` or `scripted` | Type of role. "Traveler" refers to the audience, "performer" can be used for actors or internal staff, and "scripted" is for automated roles that are not assigned users. |
| Max players | [Integer](/docs/reference/fieldtypes#integer) | The maximum number of players who may be a part of this trip as this role. This can be used to support groups of more than one player and device, all sharing the same trip state. |
| Active if | [Condition](/docs/reference/conditions) | If this is specified, the role will not be allowed to be assigned a user if this condition does not pass. |
| Starting page | [Page](/docs/reference/resources#page) | The page that this role will start the trip open. |
| Required values | [[Simple attribute](/docs/reference/fieldtypes#simple-attribute)] | (Advanced) Indicates a list of special values that can be supplied for each user account that may play this role. This could be used to specify a custom image for each actor, or custom text associated with a certain role. |
| Interface | [Interface](/docs/reference/resources#interface) |  |


## Route

A path between one waypoint and another, including walking/driving directions. If one of the waypoints has multiple options, then multiple paths will be fetched.


| Field | Type | Description |
| - | - | - |
| **From** | [Waypoint](/docs/reference/resources#waypoint) | The starting waypoint. |
| **To** | [Waypoint](/docs/reference/resources#waypoint) | The ending waypoint |
| Mode | `driving`, `walking` or `cycling` | The method of transit for directions. |
| Via | [[Coords](/docs/reference/fieldtypes#coords)] | An optional list of coordinates through through which the route must pass. |


## Scene

A temporal unit of experience. Usually only one scene is active at a time.


| Field | Type | Description |
| - | - | - |
| Global | [Boolean](/docs/reference/fieldtypes#boolean) | Enable if this scene is always active. |
| Active if | [Condition](/docs/reference/conditions) | Global scenes can be activated or deactived by a conditional. |


## Time

A time at which things happen over the trip. The specific schedule is determined by a variant.




## Trigger

A fires when a defined event occurs. Once fired, it will apply a set of actions, which change the trip state.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) |  |
| Event | [Event](/docs/reference/events) |  |
| Repeatable | [Boolean](/docs/reference/fieldtypes#boolean) |  |
| Active if | [Condition](/docs/reference/conditions) |  |
| Actions | [[Action](/docs/reference/actions)] |  |


## Variant

A variation in trip values, including timing, values, and waypoint options.


| Field | Type | Description |
| - | - | - |
| Default | [Boolean](/docs/reference/fieldtypes#boolean) |  |
| Section | [String](/docs/reference/fieldtypes#string) |  |
| Initial values | Dictionary |  |
| Initial values → Keys | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| Initial values → Values | [Simple value](/docs/reference/fieldtypes#simple-value) |  |
| Customizations | Dictionary |  |
| Customizations → Keys | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| Customizations → Values | [Simple value](/docs/reference/fieldtypes#simple-value) |  |
| Waypoint options | Dictionary |  |
| Waypoint options → Keys | [Waypoint](/docs/reference/resources#waypoint) |  |
| Waypoint options → Values | [Name](/docs/reference/fieldtypes#name) |  |
| Schedule | Dictionary |  |
| Schedule → Keys | [Time](/docs/reference/resources#time) |  |
| Schedule → Values | [Time shorthand](/docs/reference/fieldtypes#time-shorthand) | A time, e.g. 3:00pm, 5:30am, +1d 4:15pm, +2d 12:00pm |


## Waypoint

A location used by the trip. Each waypoint can have multiple options that can be set for each trip. For instance, a "lunch" waypoint can have two options, each a different restaurant.


| Field | Type | Description |
| - | - | - |
| Options | [Object] | A list of locations that this waypoint could refer to. |
| Options → Items | Object |  |
| **Options → Items → Address** | [Address](/docs/reference/fieldtypes#address) | The address of the location. |
| Options → Items → Title | [String](/docs/reference/fieldtypes#string) |  |
| Options → Items → Values | Dictionary |  |
| Options → Items → Values → Keys | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) |  |
| Options → Items → Values → Values | [Simple value](/docs/reference/fieldtypes#simple-value) |  |


