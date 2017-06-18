
function exportFile(text, filename, mime) {
    if (!(filename)) filename = "download.txt";
    var blob = new Blob([text], { type: mime });

    if (navigator && navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
    }else {
        var a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        document.body.removeChild(a);
    }
}

function isObject(obj){
    return obj != null && typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Object]';
}

module.exports.exportFile = exportFile;

module.exports.exportText = function(text,filename) {
    exportFile(text,filename,'text/plain;charset=utf-8');
}

module.exports.exportText = function(text,filename) {
    exportFile(text,filename,'text/plain;charset=utf-8');
}

module.exports.exportJson = function(obj,filename) {
    if (!(filename)) filename = "download.json";
    exportFile(JSON.stringify(obj),filename,'application/json;charset=utf-8');
}

module.exports.exportCSV = function(obj, filename, options) {
    if (!Array.isArray(obj)) {
        alert('input is not array!');
        return;
    }
    if (!(filename)) filename = "download.csv";
    var output = '', keys = [];
    if (options && options.columns && isObject(options.columns)) {
        var line_column_headers = '';
        for (var key in options.columns) {
            keys.push(key);
            line_column_headers += ((line_column_headers == "") ? "" : ",") + options.columns[key];
        }
        output += line_column_headers + '\r\n';
    }else{
        if (obj.length > 0) {
            var line_column_headers = '';
            for (var key in obj[0]) {
                keys.push(key);
                line_column_headers += ((line_column_headers == "") ? "" : ",") + key;
            }
            output += line_column_headers + '\r\n';
        }
    }

    for (var i = 0, len = obj.length; i< len; ++i){
        var line = '';
        for (var k = 0, klen = keys.length; k< klen; ++k){
            line += ((k > 0) ? ',' : '') +  '"' + obj[i][keys[k]] +'"';
        }
        output += line + '\r\n';
    }

    exportFile(output,filename,'text/csv;charset=utf-8');
}