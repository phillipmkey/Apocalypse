function getThisWorld (tp) {
    const thisFolder = tp.file.folder(false)
    const folders = tp.file.folder(true).split('/');
    const thisWorld = folders[folders.length - 2]
    if (thisWorld == "Name of folder"){
        return "Name of world";
    }
    return thisWorld;
}
module.exports = getThisWorld;