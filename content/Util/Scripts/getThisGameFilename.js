module.exports = (params) => {
    console.log(params);
    let thisCampaign = params.app.workspace.getActiveFile().parent.path.slice(6);
    //console.log(`"Parent Path: ${thisCampaign}"`);
    let numOfGames = app.plugins.plugins.dataview.api
        .pages(`"Games/${thisCampaign}/Sessions"`)
        .where(page => {
            if (page.type === 'session') {
                //if (page.world === thisCampaign) {
                    return true;
                //}
            }
        }).length

    numOfGames = JSON.stringify(numOfGames+1);
    while (numOfGames.length < 3) {
        numOfGames = "0" + numOfGames;
    }
    
    // Get the date
    let dateNow = moment().format('YYYYMMDD'); // now() -> 20230123

    // Put filename together
    let filename = numOfGames + '_' + dateNow;
    params.variables["thisGameFilename"] = filename;
    params.variables["folderName"] = 'Games/' + thisCampaign + '/Sessions';
    
};