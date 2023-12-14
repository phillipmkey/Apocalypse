---
aliases:
  - games
banner: "![[games-banner.png]]"
banner_y: 0.86
---
# [[TTRPGs Games Index]]

```button
name Add New World
type command
action QuickAdd: Template - Add TTRPG world
```

## List of current campaigns

```dataviewjs
let totalGames;
function getNumOfGames(campaign) {
	let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"Games/${campaign}/Sessions"`)
        .where(page => {
            if (page.type === 'session') {
                if (page.world === campaign) {
	                totalGames = totalGames +1;
                    return true;
                }
            }
        }).length
	return numOfGames
}

dv.table(["Campaign","System", "Role","Status"],dv.pages('"Games"')
  .where(b => b.type === "world")
  .sort(b => b.status)
  .map(b => [dv.fileLink(b.file.path,false,[b.campaign]),b.system,b.role,b.status]))
```

