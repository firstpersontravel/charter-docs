---
id: pages
title: Pages in detail
sidebar_label: Pages in detail
---

## Interfaces

An [Interface](/docs/reference/resources#interface) is like a slide deck: a set of pages that can be switched between over the course of your experience.

An Interface can be shared across multiple roles. For instance, if you have four subgroups of participants that are in different places in the story, you can let them share the same Interface. Then each subgroup or role will be viewing a different slide in the deck, but they will share the deck, so you won't need to duplicate your work.

### Tabs

The simple default Interface just shows a role's current page.

If you want, you can make a more complex interface by adding tabs in the "Tabs" field. If more than one tab is visible, your participant will be able to switch between the tabs at-will. For instance, you might have one tab that is the current page, one for browsing messages, and another that's simple help text.

Each tab has a title, and optionally a Condition determining if that tab is visible. The content of the tab (just like the content of a page) is a list of Panels, which are discussed further below.

## Pages

If an Interface in Charter is a slide deck that a user playing a role is navigating around in, a [Page](/docs/reference/resources#page) is a specific slide. Each participant may only be viewing one Page at a time.

Each Page belongs to an Interface. A page may only be displayed on the Interface that it belongs to.

Each Page also is part of a Scene. A page may only be displayed if its associated scene is the current scene. If an experience transitions to another scene, any active pages are automatically closed.

Every page can have a "Headline", which is a short message displayed at the top of the user interface for any user currently on that page. This is useful for ensuring an interface helps keep your participants on track.

The actual content of a page is defined in its panels. Each page can have any number of panels of many different types. Each panel can also have an optional "Visible if" field, in which case the panel will only be displayed if the specified conditional passes.

### Panels

A [Panel](/docs/reference/panels) is the core unit of user interface in Charter. There are many different kinds of panels, described in the [Panels section of the reference documentation](/docs/reference/panels).

* **Text**: The [Text](/docs/reference/panels#text) panel shows a message to the user. You can use [Markdown formatting](https://www.markdownguide.org/basic-syntax/) to add styles like bold or italic or colors. And you can include [Special Values](/docs/concepts/textinsertions) to insert values like the clock time of a Moment, or the value of a variable.
* **Media**: Media panels like [Audio](/docs/reference/panels#audio), [Image](/docs/reference/panels#image) and [Video](/docs/reference/panels#video) display a piece of media that you can upload using the creation tool. To use these, specify a name (this can be arbitrary) in the `Path` field. Once you do so, an upload form will show up where you can upload a file to that path.
* **Choices**: The [Choice](/docs/reference/panels#choice) panel shows a button for a set of choices, with a label and value for each option. It will save the value of the selected choice to a variable that you name. The [Yes or no](/docs/reference/panels#yesno) panel does the same thing, with just two simple buttons for "Yes" or "No".
* **Inputs**: The [Text entry](/docs/reference/panels#text_entry) and [Number entry](/docs/reference/panels#number_entry) panels allow the user to enter text or a number. These are not saved to a variable; instead a [Text entry submitted](/docs/reference/events#text-entry-submitted) or [Number entry submitted](/docs/reference/events#number-entry-submitted) event occurs. You can use the [Submission contains](/docs/reference/conditions#submission-contains) condition to test the contents of the submitted value, or the `{{event.submission}}` [special value](/docs/concepts/textinsertions) to display it.
* **Places**: The [Directions](/docs/reference/panels#directions) panel shows walking or driving directions along a specified route, or can simply show a map around a specified Place.
* **Subpages**: Some special panels are meant to be used as tabs in an Interface.
  * The [Browse messages](/docs/reference/panels#browse-messages) panel shows all messages the current user has sent or recieved to anyone else in a full-screen format suitable for phone or tablet.
  * The [Browse subpages](/docs/reference/panels#browse-subpages) panel can be used to allow browsing a library of content. It is described more fully in the "Subpages" section below.
  * The [Messages thread](/docs/reference/panels#message-thread) panel can be used to display a single thread of messages between two roles.

## Subpages

A [Subpage](/docs/reference/resources#subpage) is a special kind of page that can be browsed by the [Browse subpages](/docs/reference/panels#browse-subpages) panel.

For instance, say you wanted to show a list of suspects, with dossiers on each suspect, for an interface called "Tablet". You would create a [Subpage](/docs/reference/resources#subpage) for each dossier underneath the "Tablet" interface. You should give each of these subpages the same "Section name", indicating that they are of the same type; for instance, "dossiers".

Then you'd add a tab to your interface with the "Browse subpages" panel and the "dossiers" section name. Participants navigating to this tab would see a side panel with a list of all the visible Subpages, and would be able to browse them at will.
