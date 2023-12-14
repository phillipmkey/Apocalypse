<%*
const dv = app.plugins.plugins["dataview"].api;
//const openPublishPanel = app.commands.commands["publish:view-changes"].callback;

// Add as many filenames and queries as you'd like!
const fileAndQuery = new Map([
  [
    "Sessions",
    'table summary as "Summary" from "Games/Princes of the Apocalypse/Sessions" where contains(type,"session") SORT sessionNum ASC',
  ],
  [
    "Factions",
    'TABLE description as "Description" from "Games/Princes of the Apocalypse/Factions" WHERE contains(lower(type),"faction")',
  ],
  [
    "Places",
    'TABLE description as "Description" from "Games/Princes of the Apocalypse/Places" WHERE contains(lower(type), "place") AND location = null',
  ],
  [
    "Books - Sacred Stone",
    'TABLE from "Games/Princes of the Apocalypse/Items" WHERE contains(lower(location), "sacred stone") AND contains(lower(type), "book")',
  ],
  [
    "People - Red Larch",
    'TABLE description as "Description" from "Games/Princes of the Apocalypse/NPCs" WHERE contains(lower(location), "red larch") AND contains(lower(type), "npc")'
  ],
  [
    "Places - Red Larch",
    'TABLE from "Games/Princes of the Apocalypse/Places" WHERE contains(lower(location), "red larch")AND contains(lower(type), "place")'
  ],
  [
    "People - Westbridge",
    'TABLE description as "Description" from "Games/Princes of the Apocalypse/NPCs" WHERE contains(lower(location), "westbridge") AND contains(lower(type), "npc")'
  ],
  [
    "Places - Westbridge",
    'TABLE from "Games/Princes of the Apocalypse/Places" WHERE contains(lower(location),"westbridge")'
  ],
  [
    "Places - Sumber Hills",
    'TABLE from "Games/Princes of the Apocalypse/Places" WHERE contains(lower(location),"sumber hills")'
  ],
  [
	"Places - Dessarin Valley",
	'TABLE from "Games/Princes of the Apocalypse/Places" WHERE contains(lower(location),"dessarin valley")'
  ]
]);

await fileAndQuery.forEach(async (query, filename) => {
  if (!tp.file.find_tfile(filename)) {
    await tp.file.create_new("", filename, false, app.vault.getAbstractFileByPath("Games/Princes of the Apocalypse/Queries"));
    new Notice(`Created ${filename}.`);
  }
  const tFile = tp.file.find_tfile(filename);
  const queryOutput = await dv.queryMarkdown(query);
  const fileContent = `%% #Ignore update via "Update Publish Files" template %% \n\n${queryOutput.value}`;
  try {
    await app.vault.modify(tFile, fileContent);
    new Notice(`Updated ${tFile.basename}.`);
  } catch (error) {
    new Notice("⚠️ ERROR updating! Check console. Skipped file: " + filename , 0);
  }
});
%>