function changeBoxColor(r, g, b) {
    const colorBox = document.getElementById('colorBox');
    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
}

function applyColor() {
    const r = document.getElementById('r').value;
    const g = document.getElementById('g').value;
    const b = document.getElementById('b').value;

    changeBoxColor(r, g, b);
}



function convertToBinary() {
    let num = parseInt(document.getElementById("decimalInput").value);
    let binary = "";
    for (let i = num; i > 0; i = Math.floor(i / 2)) {
        binary = (i % 2) + binary;
    }
    document.getElementById("binaryResult").innerText = "Двоично: " + binary;
}

function convertToDecimal() {
    let binaryStr = document.getElementById("binaryInput").value;
    let decimal = 0;
    for (let i = 0; i < binaryStr.length; i++) {
        let bit = parseInt(binaryStr[binaryStr.length - 1 - i]);
        decimal += bit * Math.pow(2, i);
    }
    document.getElementById("decimalResult").innerText = "Десетично: " + decimal;
}


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

function calculate(operation) {
    const bin1 = document.getElementById('binary1').value.trim();
    const bin2 = document.getElementById('binary2').value.trim();

    // Проверка за валидност
    if (!/^[01]+$/.test(bin1) || !/^[01]+$/.test(bin2)) {
        document.getElementById('result').textContent = "Моля, въведи валидни двоични числа.";
        return;
    }

    const num1 = parseInt(bin1, 2);
    const num2 = parseInt(bin2, 2);
    let result;

    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        if (num1 < num2) {
            document.getElementById('result').textContent = "Резултатът ще е отрицателен. Не се поддържа.";
            return;
        }
        result = num1 - num2;
    }

    const binaryResult = result.toString(2);
    document.getElementById('result').textContent = `Резултат: ${binaryResult} (десетично: ${result})`;
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

