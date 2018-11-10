
var myPaint = {};

myPaint.isPaint = false;
myPaint.currentColor = null;
myPaint.currentPenSize = "3px";

myPaint.enablePaint = function () {
    myPaint.isPaint = true;
}

myPaint.disablePaint = function () {
    myPaint.isPaint = false;
}

myPaint.drawPointAt = function (element, x, y, color) {
    //build the element
    if (myPaint.isPaint) {
        var targetId = "point_" + x + "_" + y;
        var divElement = document.getElementById(targetId);
        if (divElement == null) {
            divElement = document.createElement("div");
            divElement.id = targetId;
        }
        divElement.style.backgroundColor = color;
        divElement.style.width = myPaint.currentPenSize;
        divElement.style.height = myPaint.currentPenSize;
        divElement.style.position = "absolute";
        divElement.style.top = y + "px";
        divElement.style.left = x + "px";
        element.appendChild(divElement);
    }
}

myPaint.drawPoint = function (e) {
    var targetElement = document.getElementById("myPaint");

    var targetX = e.pageX - targetElement.offsetLeft;
    var targetY = e.pageY - targetElement.offsetTop;

    var color = myPaint.currentColor;

    myPaint.drawPointAt(targetElement, targetX, targetY, color);
}


myPaint.bindMyPaintClick = function () {
    var myPaintElem = document.getElementById("myPaint");
    myPaintElem.addEventListener("mousemove", myPaint.drawPoint);
    myPaintElem.addEventListener("mousedown", myPaint.enablePaint);
    myPaintElem.addEventListener("mouseup", myPaint.disablePaint);

};
myPaint.setColor = function (e) {
    myPaint.currentColor = e.target.id;

    //remove selected from from all elements
    var colorBtns = document.getElementsByClassName("color-btn");
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].classList.remove("selected");
    }
    //add selected class to element
    e.target.classList.add("selected");
}
myPaint.bindColorButtons = function () {
    var colorBtns = document.getElementsByClassName("color-btn");
    for (var i = 0; i < colorBtns.length; i++) {
        colorBtns[i].addEventListener("click", myPaint.setColor)
    }
}

myPaint.setPenSize = function (e) {
    if (e.target.id == "smallPen") {
        myPaint.currentPenSize = "3px"
    }
    else if (e.target.id == "mediumPen") {
        myPaint.currentPenSize = "6px"
    }
    else {
        myPaint.currentPenSize = "18px"
    }

    //remove selected from from all elements
    var penBtns = document.getElementsByClassName("pen-btn");
    for (var i = 0; i < penBtns.length; i++) {
        penBtns[i].classList.remove("selected");
    }
    //add selected class to our element
    e.target.classList.add("selected");
}

myPaint.bindPenButtons = function () {
    var penBtns = document.getElementsByClassName("pen-btn");
    for (var i = 0; i < penBtns.length; i++) {
        penBtns[i].addEventListener("click", myPaint.setPenSize)
    }
}

myPaint.newBtnClicked = function () {
    document.getElementById("myPaint").innerHTML = "";
}

myPaint.loadBtnClicked = function () {
    document.getElementById("myPaint").innerHTML = localStorage.getItem('canvas');
}

myPaint.saveBtnClicked = function () {
    localStorage.setItem('canvas', document.getElementById("myPaint").innerHTML);
}

myPaint.bindActionButtons = function () {
    var newBtn = document.getElementById("newBtn");
    newBtn.addEventListener("click", myPaint.newBtnClicked);

    var saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener("click", myPaint.saveBtnClicked);

    var loadBtn = document.getElementById("loadBtn");
    loadBtn.addEventListener("click", myPaint.loadBtnClicked);

}

myPaint.bindColorButtons();
myPaint.bindPenButtons();
myPaint.bindMyPaintClick();
myPaint.bindActionButtons();
myPaint.newBtnClicked();

//set default color
myPaint.currentColor = "red";
document.getElementById("red").classList.add("selected");

//set defulat pen size
myPaint.currentPenSize = "3px";
document.getElementById("smallPen").classList.add("selected");



