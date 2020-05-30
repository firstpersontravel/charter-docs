---
id: behaviors
title: Behaviors in detail
sidebar_label: Behaviors in detail
---

## Behaviors

Behaviors are the heart of all interactivity in Charter. A [Behavior](/docs/reference/resources#behavior) is a sequence of actions that happens under certain circumstances within a scene.

Every behavior belongs to a scene, and can only be activated when that scene is the current scene, or if the scene is marked as "Always active".

Every behavior has a trigger, which determines the events that will activate that behavior. And it has actions, which are what happens when the behavior is activated. Behaviors will also often include conditions, which allow for branching and other complex logic.

## Triggers

Every behavior has a single trigger, which references a type of event, and certain parameters that filter what subset of these events trigger the behavior. The full set of events are enumerated in the [Events page](/docs/reference/events). They include:

* **Scene events**: the [Scene started](/docs/reference/events#scene-started) event occurs when a run of a project transitions from one scene to the next, or when a run is started for the very first time.
* **Time events**: the [Moment occurred](/docs/reference/events#moment-occurred) event occurs when the clock time currently associated with a given [Moment](/docs/reference/resources#moment) elapses.
* **Message events**: the [Text received](/docs/reference/events#text-received), [Image received](/docs/reference/events#image-received), and [Audio received](/docs/reference/events#audio-received) events all occur when a user messages another user or automated participant.
* **Interface events**: the [Button pressed](/docs/reference/events#button-pressed), [Text entry submitted](/docs/reference/events#text-entry-submitted), [Number entry submitted](/docs/reference/events#number-entry-submitted), and [Directions arrived](/docs/reference/events#directions-arrived) events are all triggered by players interacting with Panels on a Page.
* **Geolocative events**: the [Geofence entered](/docs/reference/events#geofence-entered) event fires when a participant enters the physical region of a Geofence.
* **Call events**: the [Call received](/docs/reference/events#call-received), [Call answered](/docs/reference/events#call-answered), and [Call clip answered](/docs/reference/events#call-clip-answered) events all occur during live phone calls.

## Actions

Once a behavior is activated by its trigger, it runs a list of actions, each of which enacts a change in the state of the run of your experience. The full set of actions are enumerated in the [Actions page](/docs/reference/actions). They include:

* **Scene actions**: the [Start scene](/docs/reference/actions#start-scene) action transitions your run to a new scene.
* **Message actions**: the [Send text](/docs/reference/actions#sent-text), [Send image](/docs/reference/actions#sent-image), [Send audio](/docs/reference/actions#sent-audio) and [Send video](/docs/reference/actions#sent-video) actions send a text or media message fromo one participant to another.
* **Interface actions**: the [Send to page](/docs/reference/actions#send-to-page) actions sets a participant's focus to a new page.
* **Background audio actions**: the [Play background audio](/docs/reference/actions#play-background-audio) action starts background audio on the device of one of your participants.
* **Phone call actions**: the [Initiate call](/docs/reference/actions#initiate-call) action places a phone call from one participant to another.
* **Time delay actions** the [Wait](/docs/reference/actions#wait) action waits a predefined interval of time before proceeding to the next action in the behavior. [Wait until moment](/docs/reference/actions#wait-until-moment) waits until the clock time corresponding to a Moment defined in your experience.
* **Variable actions**: the [Set variable](/docs/reference/actions#set-variable) action updates the value of variable. These variables can then be retrieved using conditions like [Variables are equal](/docs/reference/conditions#variables-are-equal).

## Branches

A special action, [Branch](/docs/reference/actions#branch), can be used to take different courses of action based on the current state of your run.

A Branch evaluates the state of your project run via Conditions, which are discussed in more detail below. Every Branch has an "If" field, which is a Condition. If the "If" condition passes, the actions in the branch's "Actions" field are executed. Otherwise, the actions in the branche's "Else" field are executed, if any are present.

You can also add any number of "Else If" fields to a Branch. If the conditional in the first "If" field does not past, each subsequent "Else If" conditional is evaluated, and if it passes, then the actions in the "Actions" field of that "Else If" are executed. The actions in a Branch's "Else" field are only executed if none of the "Else Ifs" pass.

## Conditions

A condition checks a certain aspect of your run, and either passes or fails. Conditions are enumerated fully in the [Conditions page](/docs/reference/conditions). They include:

* Checking the content of messages. [Text contains](/docs/reference/conditions#text-contains) checks if a text message includes a certain key word. [Text is affirmative](/docs/reference/conditions#text-is-affirmative) checks if a text message generally seems more positive than negative.
* Checking the state of variables. [Variable is present](/docs/reference/conditions/#variable-is-present) checks if a variable with a certain name has any value other than `false`. [Variables are equal](/docs/reference/conditions/#variables-are-equal) checks whether two variables are equal, and can also be used to check the content of a variable against a specific value.
* Checking panel inputs. [Submission contains](/docs/reference/conditions#submission-contains) compares the input from text entry and number entry panels against a known value.
* Checking location. [Role in geofence](/docs/reference/conditions#role-in-geofence) checks that any participant with a certain role is physically inside a the circular radius of a Geofence.

Conditions can be combined. The [All](/docs/reference/conditions#all) condition only passes if all its subconditions pass. The [Any](/docs/reference/conditions#any) condition passes if at least one subcondition passes. And the [Not](/docs/reference/conditions#not) condition can be used to negate any subcondition, including a nested Any or All subcondition.
