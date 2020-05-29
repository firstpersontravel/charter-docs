---
id: project
title: Creating Projects
sidebar_label: Creating Projects
---

## Project

Charter projects are created in two main areas of the Creation interface: the "Project" area, which is described here, and the "Scenes" area, which is described on the next page.

The Project area covers all elements in your experience that are shared across the entire experience.

Scenes, on the other hand, are intervals in your experience that may differ greatly in how they operate. Aspects of your project that are only active during a particular scene are edited in the Scenes area of the creation tool, and are discussed on the [next page](/docs/concepts/scenes).

## Roles

The "Roles" section of the project creation tool is dedicated to defining the participants in your experience and how they communicate and interact with your experience.

### Roles

A [Role](/docs/reference/resources#role) is a specific part for a character in your experience. These could be participants: players or teams, actors, crew, or staff members. Or these could be automated characters like NPCs or chatbots.

State in your experiences is tracked by role, not by individual participant. So, for instance, if you want a team of several players to all progress in your experience in lockstep, then they should share a single role. If, however, you want different players to progress independently within a single run of your experience, there should be a different role for each type of player.

Some example experience designs that will have different role setups:
* A single-player experience might have one role for the player.
* A competitive experience with two teams might have two roles, "Team A" and "Team B". You can increase the "Max users" of each role to allow multiple participants on each team -- but those participants will progress in lockstep.
* An immersive theater type experience will have one role for each actor participant, and one or many roles for the audience.
* A digital remote game might have one role for the player, and a role for each automated simulated character.

### Phone lines

Once you've created a role, if you want users with that role to text message or have phone calls with another participant, you'll need to add a [Phone line](/docs/reference/resources#phone-line). Roles can have multiple phone lines with different other roles: in this case a different phone number will be assigned to each counterpart.

Each phone line belongs to a certain role: that is the role who will be sending and receiving texts over SMS, or making or receiving phone calls.

Each phone line also has a "Counterpart": that is the role who messages and phone calls will be exchanged with.

Say, for instance, if there is a phone line for the "Player" role with a "Guide" role as its counterpart. If the Guide sends a message to the Player, it will be sent to the user in the Player role's phone number if present. And if that user responds, the incoming message will be sent back to the "Guide" role, and a [Text received](/docs/reference/events#text-received) event will occur.

Optionally, a phone line can have an "Impersonating" value. This is used in case you want to CC certain roles on communications between two other roles. So, for instance, you could have a phone line for your "StageManager" role, with a counterpart of the "Player", and impersonating an "Actor" role. In that case, if the stage manager user texts that phone line, the message will be sent to the player *as if* the actor user had texted it.

Normally, phone lines are allocated dynamically and may be different for each participant. If you want a public phone number for your experience that will always be the same, you may configure a phone as an "Entryway" by checking that option. Entryway phone lines will always be the same, and can be used too start new runs of your experience. Any user who texts or calls the number of an entryway phone line will start a new run of your experience, and will be added as a new player.

### Email accounts

If you want a role to be able to send and receive emails, you can add an [Email account](/docs/reference/resources#email-account). The specific email address cannot be customized at the moment, but that ability is on our roadmap.

### Interfaces

If you want a role to be able to interact with your experience using a webpage, you need to add an [Interface](/docs/reference/resources#interface). You can think of an Interface as a slide deck: every role that has an Interface has an associated set of slides, called Pages in Charter. Over the course of your experience, you'll navigate roles between their various pages. All of the pages that a role can possibly see will be created within that associated Interface.

The simple default Interface just shows a role's current page. If you want, you can make a more complex interface by adding tabs, and then your participant will be able to switch between the tabs at-will. For instance, you might have one tab that is the current page, one for browsing messages, and another that's simple help text.

You can also set an interface as an "Entryway" if you like. If checked, Charter will make a web form available where new participants can join your experience.

## Places

The Places section of the interface is where you define locations for real-world, site specific experiences. If your experience is fully remote, or does not depend on geolocation or directions, you can skip this section entirely.

### Places

You'll define a [Place](/docs/reference/resources#place) for each part of your experience that can happen on a specific site. Most places will have only one "Location", or physical address.

Some experiences may want to have multiple locations for a single place. For instance, if you want to send your players to different restaurants for a snack break, you would define one Place, called "Snack" (the name of what happens in this place), and several Locations, one for each restaurant. You can then specify the specific location for the "Snack" place uniquely for each run of your experience.

### Geofences

Each place can have an associated [Geofence](/docs/reference/resources#geofence), which is a circular radius around that location. When a participant enters that geofence, a [Geofence entered](/docs/reference/events#geofence-entered) event will occur.

### Routes

You can define [Routes](/docs/reference/resources#route) between Places. These routes are used to provide walking or driving directions between those places. These directions will be calculated for every possible location for both of those places.

## Defaults

When creating your projects, you'll create behaviors matching the abstract definition of many variables in your experience: [Moments](/docs/reference/resources#moment) instead of clock times, [Places](/docs/reference/resources#place) instead of physical locations, and variables instead of specific values.

The Defaults section of the project creation tool is where you attach specific values to those abstract identifiers.

### Moments

A [Moment](/docs/reference/resources#moment) indicates that there is a certain time that will happen in each the runs of your experience. For instance, "Dinner time" might be a moment, or "Start of experience", or "Ferry departure".

You do not define the clock time of the moment when creating the moment, because that clock time might be different for different schedules of your experience. Clock times are defined in Variants, defined below.

### Variants

A [Variant](/docs/reference/resources#variant) is a set of default values for your project for its Moments, Places, and variables. Each project has an initial variant called "Defaults", and if you are only running one version of your experience, this single default variant should be enough.

Each variant has a few sections.

* **Variable defaults** define initial values for variables, which can then be read using conditionals like [Variable contains](/docs/reference/conditions#variable-contains), inserted into displays or messages using [Special values](/docs/concepts/specialvalues), and updated using actions like [Set variable](/docs/reference/actions#set_value).
* **Customization defaults** allow you to define default values for customizations. Customizations are for text values that you want to be able to set and edit as experience administrators in the Operations view. For instance, you could use a customization to enter the food preferences of a guest, or their license plate number. Customizations can be inserted into displays or messages using [Special values](/docs/concepts/specialvalues), but cannot be updated within the experience itself.
* **Moment schedule** defines clock times for each Moment in your experience, relative to the start date and time zone of each run. So you would specify `3:00pm` or `12:45am`, which would be interpreted as that time on the day of the experience. You can specify clock times in subsequent days by using a value such as `+1d 3:00pm`, or `+2d 7:15am`.
