function image(thisImg) {
    var img = document.createElement("IMG");
    img.src = "../img/"+thisImg;
    document.getElementById('imageDiv').appendChild(img);
}

switchImg(0);

function switchImg () {
    setTimeout(function () {
        image('../img/3.gif');
        switchImg2();
    }, 1000);
}

function switchImg2 () {
    setTimeout(function () {
        image('../img/4.gif');
        switchImg();
    }, 1000);
}
