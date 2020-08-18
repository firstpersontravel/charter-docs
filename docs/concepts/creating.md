---
id: creating
title: Creating projects
sidebar_label: Creating projects
---

## Creating projects

The creation tool in Charter is divided into three panels, a **Left pane** for navigating between the different areas of your project, a **Middle pane** for selecting specific resources in your project, and a **Right pane** for viewing and editing those resources.

### Left pane

![Left pane](/img/concepts/projects/leftpane.png)

The Global elements area covers all elements in your experience that are shared across the entire experience. It's discussed in the [Global elements page](/docs/concepts/global).

Scenes are intervals in your experience that may differ greatly in how they operate. Aspects of your project that are only active during a particular scene are edited in the Scenes area of the creation tool, and are discussed on the [Scenes page](/docs/concepts/scenes).

The first item of the Scenes area of this pane is a list of scenes, and this is where you can create and add new scenes. Each subsequence item in this area is a single scene, and when navigating to that scene, you can edit all the behaviors and other elements within that scene.

### Middle pane

![Middle pane](/img/concepts/projects/middlepane.png)

In the middle pane, you'll find each different kind of resource in your project that you can edit,  grouped by type. Click on an existing resource to edit it, or the **Add resource** items to create new ones.

### Right pane

![Right pane](/img/concepts/projects/rightpane.png)

The right pane shows you the specific resource you are editing. Changes are applied and saved automatically, unless there is a validation error, in which case the resource will not be saved until the error is corrected or reverted. Validation errors will be shown visibly if there are any present.

## Previewing

The preview area is a lightweight interface for testing your experience.

![Preview](/img/concepts/projects/preview.png)

Each scene is organized as a vertical row, and each page for each role is a column within each row. You can artificially trigger each behavior in the scene with the grey buttons in each scene row. And you can see a log of events that have transpired in your preview in the right-hand rail.

## Publishing

Charter offers versioning and publishing tools on the top-right area.

![Versioning](/img/concepts/projects/versioning.png)

By default, you are editing the active version of your experience. This is what you most likely want during the early iteration phase of your development.

When it comes time to launch, you can start a new draft of your project by clicking "New draft". At this point, the earlier revision of your project will still be active, but you'll be editing a new draft.

When you've finished your changes, you can click "Activate" to activate your new draft and archive the previously active revision. Or you can click "Revert" to delete the draft.
