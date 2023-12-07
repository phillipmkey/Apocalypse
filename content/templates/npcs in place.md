```dataview
table description as "Description" from "ttrpgs/templates"
WHERE contains(type,"NPC") or contains(type,"faction") and contains(location,"pc")
SORT file.name ASC
```