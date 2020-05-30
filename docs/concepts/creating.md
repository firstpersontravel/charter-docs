---
id: creating
title: Creating projects
sidebar_label: Creating projects
---

## The Charter interface

The Charter interface has a top bar for navigating across projects and within a project.

* **The top-left dropdown** is for switching between your projects.
* **Create** is for creating and previewing your experience, and is described here.
* **Schedule** and **Operate** are for operating your experience, and are described in the [Operating projects page](/docs/concepts/operating).
* **Users** is a directory of all the users that have signed up for your experience, searchable by role.

![Interface](/img/interface.png)

## Create

The creation tool in Charter is divided into two areas.

The Global elements area covers all elements in your experience that are shared across the entire experience. It's discussed in the [Global elements page](/docs/concepts/global).

Scenes are intervals in your experience that may differ greatly in how they operate. Aspects of your project that are only active during a particular scene are edited in the Scenes area of the creation tool, and are discussed on the [Scenes page](/docs/concepts/scenes).

In each area, the left pane is a global navigation. The middle pane shows each element within your subsection, and the right pane shows the particular element that you are viewing or editing.

## Preview

The preview area is a lightweight interface for testing your experience.

![Preview](/img/preview.png)

Each scene is organized as a vertical row, and each page for each role is a column within each row.

You can artificially trigger each behavior in the scene with the grey buttons in each scene row.

And you can see a log of events that have transpired in your preview in the right-hand rail.

## Versioning

Charter offers versioning tools on the top-right area.

By default, you are editing the active version of your experience. This is what you most likely want during the early iteration phase of your development.

When it comes time to launch, you can start a new draft of your project by clicking "New draft". At this point, the earlier revision of your project will still be active, but you'll be editing a new draft.

When you've finished your changes, you can click "Activate" to activate your new draft and archive the previously active revision. Or you can click "Revert" to delete the draft.
