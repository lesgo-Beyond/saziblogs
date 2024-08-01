function enableEditMode() {
    richTextField.document.designMode = "on";
}
function Edit(command) {
    richTextField.document.execCommand(command, false, null);
}
function execVal(command, value) {
    richTextField.document.execCommand(command, false, value);
}


// this is for sending content 

// function Edit(command, value) {
//     var iframe = document.getElementById("blogTextt");
//     iframe.contentWindow.document.execCommand(command, false, value);
// }

// document.querySelector("form").addEventListener("submit", function() {
//     var iframe = document.getElementById("blogTextt");
//     var content = iframe.contentWindow.document.body.innerHTML;
//     document.getElementById("blogContent").value = content;
// });

// sending contents: 
function Edit(command, value) {
    var iframe = document.getElementById("blogTextt");
    iframe.contentWindow.document.execCommand(command, false, value);
}

function execVal(command, value) {
    var iframe = document.getElementById("blogTextt");
    iframe.contentWindow.document.execCommand(command, false, value);
}

document.querySelector("form").addEventListener("submit", function() {
    var iframe = document.getElementById("blogTextt");
    var content = iframe.contentWindow.document.body.innerHTML;
    document.getElementById("blogContent").value = content;
});

function enableEditMode() {
    var iframe = document.getElementById("blogTextt");
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write('<!DOCTYPE html><html><head><style>body {font-family: Arial, sans-serif;}</style></head><body contenteditable="true"></body></html>');
    doc.close();
}