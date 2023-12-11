```dataview
table description as "Description" from "Games/templates"
WHERE contains(type,"NPC") or contains(type,"faction") and contains(location,"pc")
SORT file.name ASC
```