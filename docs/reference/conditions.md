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
| Items | list |  |
| Items → Items | [Condition](conditions) |  |


## Clip answer is

Condition passes if the response to the clip being answered contains any part of the 'response' parameter.


| Field | Type | Description |
| - | - | - |
| Response | string |  |


## Not

Condition passes if the subcondition does not pass.


| Field | Type | Description |
| - | - | - |
| Item | [Condition](conditions) |  |


## Or

Condition passes if any of the subconditions pass.


| Field | Type | Description |
| - | - | - |
| Items | list |  |
| Items → Items | [Condition](conditions) |  |


## Submission contains

Condition passes if the submission contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| Part | string |  |


## Text contains

Condition passes if the content to the text contains any part of the 'part' parameter.


| Field | Type | Description |
| - | - | - |
| Part | string |  |


## Text is affirmative

Condition passes if the content to the text seems affirmitive (contains 'yes', 'ok', 'sure', etc.




## Value contains

Condition passes if the value in 'string_ref' contains the part in 'part_ref'. If 'string_ref' or 'part_ref' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| String ref | lookupable |  |
| Part ref | lookupable |  |


## Value equals

Condition passes if the value in 'ref1' matches the value in 'ref2'. If 'ref1' or 'ref2' are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.


| Field | Type | Description |
| - | - | - |
| Ref1 | lookupable |  |
| Ref2 | lookupable |  |


## Value is true

Condition passes if the value has any entry that is not false.


| Field | Type | Description |
| - | - | - |
| Ref | lookupable |  |


