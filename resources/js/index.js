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



const rateBGNtoEUR = 0.511292;   // 1 лв = 0.511292 €
const rateEURtoBGN = 1.95583;    // 1 € = 1.95583 лв

// Конвертиране от лева към евро
function convertBGNtoEUR(amountBGN) {
    return amountBGN * rateBGNtoEUR;
}

// Конвертиране от евро към лева
function convertEURtoBGN(amountEUR) {
    return amountEUR * rateEURtoBGN;
}

// Основна функция за обработка на лева в евро и обратното
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const direction = document.getElementById('direction').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount) || amount < 0) {
        resultDiv.textContent = "Моля, въведи валидна положителна сума.";
        resultDiv.style.color = "#cc0000"; // червен текст за грешка
        return;
    }

    let converted;
    let output;

    if (direction === "bgnToEur") {
        converted = convertBGNtoEUR(amount);
        output = `${amount.toFixed(2)} лева = ${converted.toFixed(2)} евро  (приблизителна стойност)`;
    } else {
        converted = convertEURtoBGN(amount);
        output = `${amount.toFixed(2)} евро = ${converted.toFixed(2)} лева  (приблизителна стойност)`;
    }

    resultDiv.textContent = output;
}





var boundaries = document.querySelectorAll(".middle_margins, .little_margins, .large_margins");

boundaries.forEach(function (boundary) {
    var originalColor = boundary.style.color || window.getComputedStyle(boundary).color;

    boundary.addEventListener("mouseover", function () {
        this.style.color = 'green';
    });

    boundary.addEventListener("mouseout", function () {
        this.style.color = originalColor;
    });
});

