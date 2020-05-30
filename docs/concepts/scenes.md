---
id: scenes
title: Scenes
sidebar_label: Scenes
---

All of the interactivity in your projects in Charter happens in Scenes. Generally, scenes are ordered linearly, and only one scene can be active at a given time.

## Scenes

A [Scene](/docs/reference/resources#scene) is a part of your experience in time. All interactivity in Charter happens within the context of a scene.

You can view the list of scenes in the "Scene list" section of the creation tool, and create new ones. Scenes are sorted alphabetically by title, with the alphabetical first scene being the current scene for all new runs. So it's good practice to add a numerical scene number at the start of each scene title to make that ordering clear. So, for example, to make the ordering of your scenes clear, name your scenes "1. Intro" and "2. Meet the Doctor" instead of "Intro" and "Meet the Doctor".

Generally, only scene in your experience's timeline can be active: the current scene. If a scene is inactive, none of the behaviors in that scene will activate, and none of the pages can be viewed.

You may choose to make a scene "Always active" by checking that option in the edit page. In this case, the behaviors on that scene will always be able to be activated. This is useful if you want some events in your experience to happen regardless of where a current run is in the timeline. Scenes that are always active can only have behaviors, not pages, call clips, or cues.

## Pages

If an Interface in Charter is a slide deck that a user playing a role is navigating around in, a [Page](/docs/reference/resources#page) is a specific slide. Each page is associated with a Scene and an Interface.

You can fill a Page with all sorts of content, including text and media, navigation directions, and interactivity like choices or text or number inputs. You can also include rich functionality like messaging and browsing static content. Filling pages with content is described in full detail in the [Pages in detail](/docs/concepts/pages) page.

Pages are part of a specific scene, and may only be displayed if that scene is the current scene. If your experience transitions from one scene to the next, any currently-displayed pages will be closed, and the first page for each interface in the new scene will automatically be opened. 

## Behaviors

Behaviors are the heart of all interactivity in Charter. A [Behavior](/docs/reference/resources#behavior) is a sequence of actions that happens under certain circumstances within a scene.

Every behavior has a trigger, which determines the events that will activate that behavior. And it has actions, which are what happens when the behavior is activated. Behaviors will often include conditions, which allow for branching and other complex logic. Behaviors and their components are described fully in the [Behaviors in detail page](/docs/concepts/behaviors).

## Other scene elements

The following scene elements are not nearly as foundational as Pages and Behaviors, but happen to also be scoped to a specific scene. Whereas almost all Charter projects will involve Pages and Behaviors, the folloowing scene elements are only necessary for certain specific use cases.

### Cues

A [Cue](/docs/reference/resources#cue) is a signal that something has happened in your experience. They do nothing by themselves, but you can signal them with the [Signal cue](/docs/reference/actions#signal_cue) action, and you can activate a behavior when a cue is signaled with the [Cue signaled](/docs/reference/events#cue_signaled) event. This opens up certain design patterns for complex scenes.

For instance, if you wanted a sequence of events to happen upon the pressing of a button, or a certain Moment occurring, whichever comes first, this would be difficult to arrange without a Cue. To use Cues, you'd create a Cue titled for what this event means, and on both the "Button pressed" event and the "Moment occurred" event, you'd signal that cue. Then you'd put your sequence of events in a behavior triggered by the "cue signaled" event.

### Call Clips

A [Call clip](/docs/reference/resources#call-clip) is a snippet of audio to be played over a phone call via the [Play call clip](/docs/reference/actions#play-call-clip) action.

This can be an audio file, which you can specify by including a Path and then uploading a file. Or, during the prototyping phase, yoou can specify text in the "Transcript" field to have it spoken aloud with text-to-speech.

If you want to use voice recognition or detect digit dials in response to this clip, you can check the "Answer expected" option. If you want to use voice recognition, you should include the list of expected answers in the "Answer hints" field. The [Call clip answered](/docs/reference/events#call-clip-answered) event will occur when the participant in the call responds, either by dialing a digit or speaking aloud. And you can use the [Clip answer is](/docs/reference/conditions#clip-answer-is) conditional to check against the given response.
