---
id: conditions
title: Conditions
sidebar_label: Conditions
---

A condition is how you create logic and branching in your experience.
## All

A condition that passes only if all of its subconditions pass.


| Field | Type | Description |
| - | - | - |
| Items | [[Condition](/docs/reference/conditions)] | A list of subconditions, all of which must be true. |



## Any

A condition that passes if any one of its subconditions pass.


| Field | Type | Description |
| - | - | - |
| Items | [[Condition](/docs/reference/conditions)] | A list of subconditions, one of which must be true. |



## Clip answer is

A condition that passes if the response to the clip being answered contains any part of the 'response' parameter.


| Field | Type | Description |
| - | - | - |
| **Response** | [Text](/docs/reference/fieldtypes#text) | A simple string to check for within the clip response. |



## Current role is

A condition that passes if the current player has a specific role.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to check against the current player. |



## Not

A condition that passes if the subcondition does not pass.


| Field | Type | Description |
| - | - | - |
| **Item** | [Condition](/docs/reference/conditions) | A subcondition, which must be false. |



## Role in geofence

A condition that passes if a role is within a geofence.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to check. |
| **Geofence** | [Geofence](/docs/reference/resources#geofence) | The geofence that a player with this role must be within. |



## Role page is

A condition that passes if a role is on a specific page.


| Field | Type | Description |
| - | - | - |
| **Role** | [Role](/docs/reference/resources#role) | The role to check. |
| **Page** | [Page](/docs/reference/resources#page) | The page that this role must be on. |



## Submission contains

A condition that passes if the submission contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| **Part** | [Text](/docs/reference/fieldtypes#text) | A text fragment which must be contained by the submission. |



## Text contains

A condition that passes if the content to the text contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| **Part** | [Text](/docs/reference/fieldtypes#text) | A fragment of text to look for in the text response. |



## Text is affirmative

A condition that passes if the content to the text seems affirmitive (contains 'yes', 'ok', 'sure', etc.





## Value comparison

A condition that passes if the first value numerically compares to the second in the specified way.


| Field | Type | Description |
| - | - | - |
| **Variable name or number 1** | [Lookup](/docs/reference/fieldtypes#lookup) | A numeric value to look up and compare against the second. |
| Comparator | `<`, `<=`, `==`, `>=` or `>` | The method used to compare the first value to the second. |
| **Variable name or number 2** | [Lookup](/docs/reference/fieldtypes#lookup) | Another numeric value to look up and compare against the first. |



## Variable contains

A condition that passes if the search variable value contains the part in the part variable. If 'string_ref' or 'part_ref' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple variable rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| **Search variable name** | [Lookup](/docs/reference/fieldtypes#lookup) | A variable to look up, which should contain text. In cases of a specific string, surround it with double quotes. |
| **Part variable name** | [Lookup](/docs/reference/fieldtypes#lookup) | A variable to look up which should contain the fragment to check for. In cases of a specific string, surround it with double quotes. |



## Variable is present

A condition that passes if the variable has any value that is not false.


| Field | Type | Description |
| - | - | - |
| **Variable name** | [Lookup](/docs/reference/fieldtypes#lookup) | A value to look up and see if it contains any non-false value. |



## Variables are equal

A condition that passes if the first value matches the second value. If "Value 1" or "Value 2" are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| **Variable name 1** | [Lookup](/docs/reference/fieldtypes#lookup) | A value to look up and compare against the second. |
| **Variable name 2** | [Lookup](/docs/reference/fieldtypes#lookup) | Another value to look up and compare against the first. In cases of a specific string, surround it with double quotes. |



