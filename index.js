function exportFile(text, filename, mime) {
    if (!(filename)) filename = "download.txt";

    var a = window.document.createElement('a');
    a.href = window.URL.createObjectURL(new Blob([text], { type: mime }));
    a.download = filename;

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

module.exports.exportFile = exportFile;

module.exports.exportText = function(text,filename) {
    exportFile(text,filename,'text/plain;charset=utf-8');
}