---
id: fieldtypes
title: Field types
sidebar_label: Field types
---

Fields are the underlying data elements of each object in your script. Each is validated in a different way.
## Boolean

A simple true or false value.





## Color

A color, in hexadecimal format. (i.e. #FFFFFF)





## Coords

Latitude/longitude coordinates.





## Duration

An offset of time indicated in a brief shorthand of number and unit. For instance, "10s" for ten seconds, "3.5h" for three and a half hours, or "-40m" for minus forty minutes. Negative offsets indicate a period prior to another time.





## Email

An email address. For example, "agency@firstperson.travel".





## Enumeration

A field allowing a choice between a limited set of values. The specific set of options will be different for each field and documented in that field.





## Integer

A simple integer value: 0, 100, -50, etc.





## Location

A geocodable address, including city, state and ZIP/postal code.





## Lookup

A machine-readable name used for looking up variables. Only letters, numbers, dashes or underscores are allowed. For example, `date`, or `num_points`. Periods may be used to look up children of data dictionaries: for example, `inductee.link` or `current.directive`. Specific values can also be specified here by including the text in double quotes: the lookup `red` will look up the contents of the variable "red", whereas the lookup `"red"` will return the text value "red". Numbers like `1`, `400`, etc, can be used, as can the values `true` and `false`.





## Markdown

Text styled with markdown. See https://www.markdownguide.org/basic-syntax/ for help on how to use markdown.





## Media

Uploaded media: an image, video, or audio clip.





## Number

An integer or number with a decimal.





## Reference

A reference to the name of an element in the script.





## Text

Arbitrary text, usually for display to a participant.





## Time

A shorthand clock time, as defined in days relative to the start of the experience. For instance, `3:00pm` means 3pm the day of the experience. `5:30am` means 5:30am the day of the experience. `+1d 4:15pm` means 4:15pm the day after the day the experience started.





## Value

A field that can be a string, number, or "true" or "false".





## Variable name

A machine-readable name used for naming variables. Only letters, numbers, or underscores are allowed. For example, `date`, or `num_points` are valid variable names.





