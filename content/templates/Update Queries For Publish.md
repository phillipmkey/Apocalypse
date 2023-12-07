
<%*
const dv = app.plugins.plugins["dataview"].api;
const openPublishPanel = app.commands.commands["publish:view-changes"].callback;

// Add as many filenames and queries as you'd like!
const fileAndQuery = new Map([
  [
    "Sessions",
    'table summary as "Summary" from "ttrpgs/RxB - Princes of the Apocalypse" where contains(type,"session") SORT sessionNum ASC',
  ],
  [
    "Factions",
    'TABLE description as "Description" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(type),"faction")',
  ],
  [
    "Places",
    'TABLE description as "Description" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(type), "place") AND location = null',
  ],
  [
    "Books",
    'TABLE type as "Type" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(location), "sacred stone") AND contains(lower(type), "book")',
  ],
  [
    "People - Red Larch",
    'TABLE description as "Description" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(location), "red larch") AND contains(lower(type), "npc")'
  ],
  [
    "Places - Red Larch",
    'TABLE location as "Location" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(location), "red larch")AND contains(lower(type), "place")'
  ],
  [
    "People - Westbridge",
    'TABLE location as "Location" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(location), "westbridge") AND contains(lower(type), "npc")'
  ],
  [
    "Places - Westbridge",
    'TABLE location as "Location" from "ttrpgs/RxB - Princes of the Apocalypse" WHERE contains(lower(location),"westbridge")'
  ]
]);

await fileAndQuery.forEach(async (query, filename) => {
  if (!tp.file.find_tfile(filename)) {
    await tp.file.create_new("", filename);
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






