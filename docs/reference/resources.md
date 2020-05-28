---
id: resources
title: Resources
sidebar_label: Resources
---

Resources are the primary objects in your script.
## Behavior

A fires when a defined event occurs. Once fired, it will apply a set of actions, which change the trip state.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) |  |
| Trigger | [Event](/docs/reference/events) |  |
| Actions | [[Action](/docs/reference/actions)] |  |


## Clip

A unit of text or audio that can be played as part of phone calls. A clip can expect an answer, which will fire a `clip_answered` event when it comes in.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene at which this clip will be played. |
| Transcript | [Text](/docs/reference/fieldtypes#text) | The text transcript used to generate audio via speech-to-text. Only required if there is not a media path. |
| Voice | `alice`, `man` or `woman` | The voice used to generate audio via speech-to-text. Only required if there is not a media path. |
| Path | [Media](/docs/reference/fieldtypes#media) | Media path for an audio clip to play. |
| Answer expected | [Boolean](/docs/reference/fieldtypes#boolean) | Is an answer expected for this clip? |
| Answer hints | [[Text](/docs/reference/fieldtypes#text)] | List of suggestions for decoding the voice of the answer. |


## Cue

A signal that can be fired by button presses or other game actions. In and of itself, a cue does nothing, but most commonly it will be used to fire triggers that launch other game actions.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene during which this cue may be signaled. If this scene is not active, the cue will not be signaled. |


## Email account

An email account that you have access to. (This requires some custom setup.)


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | Role this account belongs to. |
| **Address** | `charter@firstperson.travel` | Email address to send from. Currently must be charter@firstperson.travel. |


## Geofence

A circular region around a waypoint. It can be used to trigger events when players enter or leave a region, or when messages are sent from within that region.


| Field | Type | Description |
| - | - | - |
| **Center** | [Waypoint](/docs/reference/resources#waypoint) | Center of the geofence. |
| **Distance** | [Number](/docs/reference/fieldtypes#number) | Distance in meters around the center that is counted as within the geofence. |


## Interface

A combination of panels that create a user interface for a tablet, phone, or device.


| Field | Type | Description |
| - | - | - |
| Entryway | [Boolean](/docs/reference/fieldtypes#boolean) | If set to true, new participants can enter your experience via a webform into this interface. |
| Tabs | List | A list of tabs. If there is only one tab visible, the tabs bar will not be displayed. |
| **Tabs → Title** | [Text](/docs/reference/fieldtypes#text) | The title of this tab. |
| Tabs → Visible if | [Condition](/docs/reference/conditions) | An optional test to determine if the tab is visible or not. |
| Tabs → Panels | [[Panel](/docs/reference/panels)] | List of user interface panels. |


## Moment

A time at which things happen over the trip. The specific schedule is determined by a variant.




## Page

A user interface that can be displayed to a player when the corresponding scene and state is active.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene during which this page is active. If this scene is not the current scene, the page may still be displayed, but no user action may be taken. |
| **Interface** | [Interface](/docs/reference/resources#interface) | The interface that this page is a part of. |
| Headline | [Text](/docs/reference/fieldtypes#text) | A high-level directive for the player, that will be displayed in large font at the top of the interface. |
| Panels | [[Panel](/docs/reference/panels)] | List of user interface panels. |


## Phone line

A phone number by which one player can contact another via text or phone calls.


| Field | Type | Description |
| - | - | - |
| **For** | [Role](/docs/reference/resources#role) | The role who will be sending or receiving messages through this phone line. |
| **As** | [Role](/docs/reference/resources#role) | The role whose messages are received and sent. This will usually be the same as the "for" role, except when you want the "for" role to be impersonating somebody else. In that case, the "as" role is the role being impersonated. |
| **With** | [Role](/docs/reference/resources#role) | The role that is being messaged with. |
| Entryway | [Boolean](/docs/reference/fieldtypes#boolean) | If this value is true, the phone line will be assigned a universal number. New players can text this number to start a new trip. |


## Place

A place used by the trip. Each place can have multiple locations that can be set for each trip. For instance, a "lunch" place can have two locations, each a different restaurant.


| Field | Type | Description |
| - | - | - |
| locations | List | A list of locations that this place could refer to. |
| **locations → Address** | [Address](/docs/reference/fieldtypes#address) | The address of the location. |
| locations → Title | [Text](/docs/reference/fieldtypes#text) |  |
| locations → Variable defaults | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) to [Simple value](/docs/reference/fieldtypes#simple-value) |  |


## Role

A participant in the experience. This participant can be a player, an actor, or a scripted automaton.


| Field | Type | Description |
| - | - | - |
| Interface | [Interface](/docs/reference/resources#interface) |  |
| Max users | [Integer](/docs/reference/fieldtypes#integer) | The maximum number of users who may be a part of this trip as this role. This can be used to support groups of more than one player and device, all sharing the same trip state. |
| Role variable names | [[Simple attribute](/docs/reference/fieldtypes#simple-attribute)] | (Advanced) Indicates a list of special variables that can be supplied for each user account that may play this role. This could be used to specify a custom image for each actor, or custom text associated with a certain role. |


## Route

A path between one waypoint and another, including walking/driving directions. If one of the waypoints has multiple options, then multiple paths will be fetched.


| Field | Type | Description |
| - | - | - |
| **From** | [Waypoint](/docs/reference/resources#waypoint) | The starting waypoint. |
| **To** | [Waypoint](/docs/reference/resources#waypoint) | The ending waypoint |
| Method | `driving`, `walking` or `cycling` | The method of transit for directions. |
| Waypoints | [[Coords](/docs/reference/fieldtypes#coords)] | An optional list of coordinates through through which the route must pass. |


## Scene

A temporal unit of experience. Usually only one scene is active at a time.


| Field | Type | Description |
| - | - | - |
| Always active | [Boolean](/docs/reference/fieldtypes#boolean) | Enable if this scene is always active. Otherwise, the triggers in this scene will only fire if it is the current scene of the trip. |


## Subpage

A page that can be displayed in a list inside a Content Browse page.


| Field | Type | Description |
| - | - | - |
| **Interface** | [Interface](/docs/reference/resources#interface) | The parent interface in which this content page is displayed. |
| **Section** | [Text](/docs/reference/fieldtypes#text) | A string indicating which a grouping for this content page. The the `content_browse` panel will show all visible content pages grouped by section. |
| Visible if | [Condition](/docs/reference/conditions) | An optional test to determine if the panel is visible or not. |
| Panels | [[Panel](/docs/reference/panels)] | List of user interface panels. |


## Variant

A variation in trip values, including timing, values, and waypoint options.


| Field | Type | Description |
| - | - | - |
| Default | [Boolean](/docs/reference/fieldtypes#boolean) | If default is set to true, all new trips will have these defaults set. |
| Variant group | [Text](/docs/reference/fieldtypes#text) | You can group variants if you want to allow only one of a set to be selected. For instance, if you have a basic and deluxe variant, give both variants a group name of "package", and only one can be selected at a time. |
| Variable defaults | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) to [Simple value](/docs/reference/fieldtypes#simple-value) |  |
| Customization defaults | [Simple attribute](/docs/reference/fieldtypes#simple-attribute) to [Simple value](/docs/reference/fieldtypes#simple-value) |  |
| Location defaults | [Waypoint](/docs/reference/resources#waypoint) to [Name](/docs/reference/fieldtypes#name) |  |
| Moment schedule | [Time](/docs/reference/resources#time) to [Time shorthand](/docs/reference/fieldtypes#time-shorthand) |  |


