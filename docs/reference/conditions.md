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
| Items | [[Condition](/docs/reference/conditions)] |  |


## Clip answer is

Condition passes if the response to the clip being answered contains any part of the 'response' parameter.


| Field | Type | Description |
| - | - | - |
| **Response** | [String](/docs/reference/fieldtypes#string) |  |


## Not

Condition passes if the subcondition does not pass.


| Field | Type | Description |
| - | - | - |
| **Item** | [Condition](/docs/reference/conditions) |  |


## Or

Condition passes if any of the subconditions pass.


| Field | Type | Description |
| - | - | - |
| Items | [[Condition](/docs/reference/conditions)] |  |


## Submission contains

Condition passes if the submission contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| **Part** | [String](/docs/reference/fieldtypes#string) |  |


## Text contains

Condition passes if the content to the text contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| **Part** | [String](/docs/reference/fieldtypes#string) |  |


## Text is affirmative

Condition passes if the content to the text seems affirmitive (contains 'yes', 'ok', 'sure', etc.




## Value contains

Condition passes if the value in 'string_ref' contains the part in 'part_ref'. If 'string_ref' or 'part_ref' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| **String ref** | [Lookup](/docs/reference/fieldtypes#lookup) |  |
| **Part ref** | [Lookup](/docs/reference/fieldtypes#lookup) |  |


## Value equals

Condition passes if the value in 'ref1' matches the value in 'ref2'. If 'ref1' or 'ref2' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| **Ref1** | [Lookup](/docs/reference/fieldtypes#lookup) |  |
| **Ref2** | [Lookup](/docs/reference/fieldtypes#lookup) |  |


## Value is true

Condition passes if the value has any entry that is not false.


| Field | Type | Description |
| - | - | - |
| **Ref** | [Lookup](/docs/reference/fieldtypes#lookup) |  |


