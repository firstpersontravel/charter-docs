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





## Call clip

A snippet of audio that can be played as part of phone calls.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene at which this clip will be played. |
| Transcript | [Text](/docs/reference/fieldtypes#text) | The text transcript used to generate audio via speech-to-text. Only required if there is not a media path. |
| Voice | `alice`, `man` or `woman` | The voice used to generate audio via speech-to-text. Only required if there is not a media path. |
| Path | [Media](/docs/reference/fieldtypes#media) | Media path for an audio clip to play. |
| Answer expected | [Boolean](/docs/reference/fieldtypes#boolean) | Is an answer expected for this clip? |
| Answer hints | [[Text](/docs/reference/fieldtypes#text)] | List of suggestions for decoding the voice of the answer. |

* The `Clip` field of the [Play call clip](/docs/reference/actions#play_clip) action is a Call clip.
* The `Clip` field of the [Call clip answered](/docs/reference/events#clip_answered) event is a Call clip.


## Cue

A signal that can be fired by button presses or other game actions. In and of itself, a cue does nothing, but most commonly it will be used to fire triggers that launch other game actions.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene during which this cue may be signaled. If this scene is not active, the cue will not be signaled. |

* The `Cue` field of the [Signal cue](/docs/reference/actions#signal_cue) action is a Cue.
* The `Cue` field of the [Cue signaled](/docs/reference/events#cue_signaled) event is a Cue.


## Email account

An email account that you have access to. (This requires some custom setup.)


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | Role this account belongs to. |
| **Address** | `charter@firstperson.travel` | Email address to send from. Currently must be charter@firstperson.travel. |

* The `From` field of the [Send email](/docs/reference/actions#send_email) action is a Email account.



## Geofence

A circular region around a waypoint. It can be used to trigger events when players enter or leave a region, or when messages are sent from within that region.


| Field | Type | Description |
| - | - | - |
| **Center** | [Place](/docs/reference/resources#waypoint) | Center of the geofence. |
| **Distance** | [Number](/docs/reference/fieldtypes#number) | Distance in meters around the center that is counted as within the geofence. |


* The `Geofence` field of the [Geofence entered](/docs/reference/events#geofence_entered) event is a Geofence.


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



* The `Until` field of the [Wait before moment](/docs/reference/actions#wait_before_time) action is a Moment.
* The `Until` field of the [Wait until moment](/docs/reference/actions#wait_for_time) action is a Moment.
* The `Moment` field of the [Moment occurred](/docs/reference/events#time_occurred) event is a Moment.


## Page

A user interface that can be displayed to a player when the corresponding scene and state is active.


| Field | Type | Description |
| - | - | - |
| **Scene** | [Scene](/docs/reference/resources#scene) | The scene during which this page is active. If this scene is not the current scene, the page may still be displayed, but no user action may be taken. |
| **Interface** | [Interface](/docs/reference/resources#interface) | The interface that this page is a part of. |
| Headline | [Text](/docs/reference/fieldtypes#text) | A high-level directive for the player, that will be displayed in large font at the top of the interface. |
| Panels | [[Panel](/docs/reference/panels)] | List of user interface panels. |

* The `Page` field of the [Send to page](/docs/reference/actions#send_to_page) action is a Page.



## Phone line

A phone number by which one player can contact another via text or phone calls.


| Field | Type | Description |
| - | - | - |
| **For** | [Role](/docs/reference/resources#role) | The role who will be sending or receiving messages through this phone line. |
| **Counterpart** | [Role](/docs/reference/resources#role) | The role that is being messaged with. |
| Impersonating | [Role](/docs/reference/resources#role) | In cases where you want a participant to impersonate a different role, this is the role that is being impersonated. Otherwise this can be left blank. |
| Entryway | [Boolean](/docs/reference/fieldtypes#boolean) | If this value is true, the phone line will be assigned a universal number. New players can text this number to start a new trip. |





## Place

A place used by the trip. Each place can have multiple locations that can be set for each trip. For instance, a "lunch" place can have two locations, each a different restaurant.


| Field | Type | Description |
| - | - | - |
| Locations | List | A list of locations that this place could refer to. |
| **Locations → Address** | [Address](/docs/reference/fieldtypes#address) | The address of the location. |
| Locations → Title | [Text](/docs/reference/fieldtypes#text) | The title of this location for internal display. |
| Locations → Variable defaults | [Variable name](/docs/reference/fieldtypes#variable-name) to [Value](/docs/reference/fieldtypes#value) | These values are accessible to a run when this location is selected. For instance, if there are directions associated with the various locations for a place, you could set those here. |





## Role

A participant in the experience. This participant can be a player, an actor, or a scripted automaton.


| Field | Type | Description |
| - | - | - |
| Interface | [Interface](/docs/reference/resources#interface) |  |
| Max users | [Integer](/docs/reference/fieldtypes#integer) | The maximum number of users who may be a part of this trip as this role. This can be used to support groups of more than one player and device, all sharing the same trip state. |
| Role variable names | [[Variable name](/docs/reference/fieldtypes#variable-name)] | (Advanced) Indicates a list of special variables that can be supplied for each user account that may play this role. This could be used to specify a custom image for each actor, or custom text associated with a certain role. |

* The `Role` field of the [Play background audio](/docs/reference/actions#play_audio) action is a Role.
* The `Role` field of the [Pause background audio](/docs/reference/actions#pause_audio) action is a Role.
* The `Role` field of the [Resume background audio](/docs/reference/actions#resume_audio) action is a Role.
* The `Role` field of the [Stop background audio](/docs/reference/actions#stop_audio) action is a Role.
* The `Role` field of the [Add to call](/docs/reference/actions#add_to_call) action is a Role.
* The `To` field of the [Initiate call](/docs/reference/actions#initiate_call) action is a Role.
* The `To` field of the [Send email](/docs/reference/actions#send_email) action is a Role.
* The `From` field of the [Send text](/docs/reference/actions#send_text) action is a Role.
* The `From` field of the [Send image](/docs/reference/actions#send_image) action is a Role.
* The `From` field of the [Send audio](/docs/reference/actions#send_audio) action is a Role.
* The `Role` field of the [Update interface](/docs/reference/actions#update_interface) action is a Role.
* The `Role` field of the [Send to page](/docs/reference/actions#send_to_page) action is a Role.
* The `From` field of the [Call answered](/docs/reference/events#call_answered) event is a Role.
* The `From` field of the [Call received](/docs/reference/events#call_received) event is a Role.
* The `Role` field of the [Call ended](/docs/reference/events#call_ended) event is a Role.
* The `Role` field of the [Geofence entered](/docs/reference/events#geofence_entered) event is a Role.
* The `From` field of the [Text received](/docs/reference/events#text_received) event is a Role.
* The `From` field of the [Image received](/docs/reference/events#image_received) event is a Role.
* The `From` field of the [Audio received](/docs/reference/events#audio_received) event is a Role.


## Route

A path between one waypoint and another, including walking/driving directions. If one of the waypoints has multiple options, then multiple paths will be fetched.


| Field | Type | Description |
| - | - | - |
| **From** | [Place](/docs/reference/resources#waypoint) | The starting waypoint. |
| **To** | [Place](/docs/reference/resources#waypoint) | The ending waypoint |
| Method | `driving`, `walking` or `cycling` | The method of transit for directions. |
| Waypoints | [[Coords](/docs/reference/fieldtypes#coords)] | An optional list of coordinates through through which the route must pass. |





## Scene

A temporal unit of experience. Usually only one scene is active at a time.


| Field | Type | Description |
| - | - | - |
| Always active | [Boolean](/docs/reference/fieldtypes#boolean) | Enable if this scene is always active. Otherwise, the triggers in this scene will only fire if it is the current scene of the trip. |

* The `Scene` field of the [Start scene](/docs/reference/actions#start_scene) action is a Scene.



## Subpage

A page that can be displayed in a list inside a Content Browse page.


| Field | Type | Description |
| - | - | - |
| **Interface** | [Interface](/docs/reference/resources#interface) | The parent interface in which this subpage is displayed. |
| **Section** | [Text](/docs/reference/fieldtypes#text) | A string indicating which a grouping for this subpage. The the "Browse Subpages" panel will show all visible subpages grouped by section. |
| Visible if | [Condition](/docs/reference/conditions) | An optional test to determine if the panel is visible or not. |
| Panels | [[Panel](/docs/reference/panels)] | Content of the subpage. |





## Variant

A variation in trip values, including timing, values, and waypoint options.


| Field | Type | Description |
| - | - | - |
| Default | [Boolean](/docs/reference/fieldtypes#boolean) | If default is set to true, all new trips will have these defaults set. |
| Variant group | [Text](/docs/reference/fieldtypes#text) | You can group variants if you want to allow only one of a set to be selected. For instance, if you have a basic and deluxe variant, give both variants a group name of "package", and only one can be selected at a time. |
| Variable defaults | [Variable name](/docs/reference/fieldtypes#variable-name) to [Value](/docs/reference/fieldtypes#value) |  |
| Customization defaults | [Variable name](/docs/reference/fieldtypes#variable-name) to [Value](/docs/reference/fieldtypes#value) |  |
| Moment schedule | [Moment](/docs/reference/resources#time) to [Time](/docs/reference/fieldtypes#time) |  |





