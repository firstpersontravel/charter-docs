---
id: conditions
title: Conditions
sidebar_label: Conditions
---

A condition is how you create logic and branching in your experience.
## And

Condition passes only if all the subconditions pass.


| Field | Type | Description |
| - | - | - |
| Items | [[Condition](/docs/reference/conditions)] | A list of subconditions, all of which must be true. |


## Clip answer is

Condition passes if the response to the clip being answered contains any part of the 'response' parameter.


| Field | Type | Description |
| - | - | - |
| **Response** | [Text](/docs/reference/fieldtypes#text) | A simple string to check for within the clip response. |


## Current role is

Condition passes if the current player has a specific role.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to check against the current player. |


## Not

Condition passes if the subcondition does not pass.


| Field | Type | Description |
| - | - | - |
| **Item** | [Condition](/docs/reference/conditions) | A subcondition, which must be false. |


## Or

Condition passes if any of the subconditions pass.


| Field | Type | Description |
| - | - | - |
| Items | [[Condition](/docs/reference/conditions)] | A list of subconditions, one of which must be true. |


## Role in geofence

Condition passes if a role is within a geofence.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to check. |
| **Geofence** | [Geofence](/docs/reference/resources#geofence) | The geofence that a player with this role must be within. |


## Role page is

Condition passes if a role is on a specific page.


| Field | Type | Description |
| - | - | - |
| **Role name** | [Role](/docs/reference/resources#role) | The role to check. |
| **Page name** | [Page](/docs/reference/resources#page) | The page that this role must be on. |


## Submission contains

Condition passes if the submission contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| **Part** | [Text](/docs/reference/fieldtypes#text) | A text fragment which must be contained by the submission. |


## Text contains

Condition passes if the content to the text contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| **Part** | [Text](/docs/reference/fieldtypes#text) | A fragment of text to look for in the text response. |


## Text is affirmative

Condition passes if the content to the text seems affirmitive (contains 'yes', 'ok', 'sure', etc.




## Value contains

Condition passes if the value in 'string_ref' contains the part in 'part_ref'. If 'string_ref' or 'part_ref' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| **Search** | [Lookup](/docs/reference/fieldtypes#lookup) | A value to look up, which should contain text. In cases of a specific string, surround it with double quotes. |
| **For** | [Lookup](/docs/reference/fieldtypes#lookup) | A value to look up which should contain the fragment to check for. In cases of a specific string, surround it with double quotes. |


## Value equals

Condition passes if the value in 'ref1' matches the value in 'ref2'. If 'ref1' or 'ref2' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| **Value 1** | [Lookup](/docs/reference/fieldtypes#lookup) | A value to look up and compare against the second. |
| **Value 2** | [Lookup](/docs/reference/fieldtypes#lookup) | Another value to look up and compare against the first. In cases of a specific string, surround it with double quotes. |


## Value is true

Condition passes if the value has any entry that is not false.


| Field | Type | Description |
| - | - | - |
| **Value** | [Lookup](/docs/reference/fieldtypes#lookup) | A value to look up and see if it contains any non-false value. |


