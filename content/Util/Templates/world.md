---
world: <% tp.user.getThisWorld(tp) %>
campaign: <% tp.file.folder(false) %>
status: active
role: player
system:
type: world
---
# The World of <% tp.file.folder(false) %>

## Player Characters

-

## Sessions

*Put your cursor where the session link should be. Then, from the Command Palette (CMD/CTRL+P), select either QuickAdd: Macro - Add session-player or QuickAdd: Macro - Add session-gm*.




```dataview
table summary as "Summary" from "Games/<% tp.file.folder(false) %>/Sessions"
where contains(type,"session")
SORT sessionNum ASC
```


## Factions

```dataview
TABLE description as "Description" from "Games/<% tp.file.folder(false) %>/Factions"
WHERE contains(lower(type),"faction")
```

## Notes