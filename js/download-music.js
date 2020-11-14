var file;
var files;
audio_file.onchange = function () {
    files = this.files;
    file = URL.createObjectURL(files[0]);
    audio_player.src = file;
    audio_player.play();


    var pathComponents = this.value.split('\\'),fileName = pathComponents[pathComponents.length - 1];
    document.getElementById("file-name").innerHTML = fileName;
};

