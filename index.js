function zoominAll() {
    var myImages = document.getElementsByClassName("height_pictures");
    for (var i = 0; i < myImages.length; i++) {
        var imgHeight = myImages[i].clientHeight;
        if (imgHeight >= 1000) {
        } else {
            myImages[i].style.height = (imgHeight + 50) + "px";
        }
    }
}

function zoomoutAll() {
    var myImages = document.getElementsByClassName("height_pictures");
    for (var i = 0; i < myImages.length; i++) {
        var imgHeight = myImages[i].clientHeight;
        if (imgHeight <= 49) {
        } else {
            myImages[i].style.height = (imgHeight - 50) + "px";
        }
    }
}


function resetAll() {
    var myImages = document.getElementsByClassName("height_pictures");
    for (var i = 0; i < myImages.length; i++) {
        var imgHeight = myImages[i].clientHeight;
        if (imgHeight != 500) {
            myImages[i].style.height = (imgHeight = 500) + "px";
        }
    }
}


function zoominAllVertical() {
    var myImages = document.getElementsByClassName("weight_pictures");
    for (var i = 0; i < myImages.length; i++) {
        var imgHeight = myImages[i].clientHeight;
        if (imgHeight >= 1000) {
        } else {
            myImages[i].style.height = (imgHeight + 50) + "px";
        }
    }
}

function zoomoutAllVertical() {
    var myImages = document.getElementsByClassName("weight_pictures");
    for (var i = 0; i < myImages.length; i++) {
        var imgHeight = myImages[i].clientHeight;
        if (imgHeight <= 49) {
        } else {
            myImages[i].style.height = (imgHeight - 50) + "px";
        }
    }
}

function resetAllVertical() {
    var myImages = document.getElementsByClassName("weight_pictures");
    for (var i = 0; i < myImages.length; i++) {
        var imgHeight = myImages[i].clientHeight;
        if (imgHeight != 300) {
            myImages[i].style.height = (imgHeight = 300) + "px";
        }
    }
}

function zoomin() {
    var myImage = document.getElementById("big-photo");
    var imgHeight = myImage.clientHeight;
    if (imgHeight >= 2000)
        alert("Достигнат е максимален размер на картинката!")
    else
        myImage.style.height = (imgHeight + 50) + "px";
}

function zoomout() {
    var myImage = document.getElementById("big-photo");
    var imgHeight = myImage.clientHeight;
    if (imgHeight <= 49)
        alert("Достигнат е минимален размер на картинката!")
    else
        myImage.style.height = (imgHeight - 50) + "px";
}

function reset() {
    var myImage = document.getElementById("big-photo");
    var imgHeight = myImage.clientHeight;
    if (imgHeight != 500)
        myImage.style.height = (imgHeight = 500) + "px";
}
