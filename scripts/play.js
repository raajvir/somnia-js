document.getElementById("body").style.backgroundImage = 'url("/static/images/stars.svg")';
document.getElementsByClassName("instructions").style.display = 'none';

function play(type) {
    launchFullScreen(document.documentElement);
    const collection = document.getElementsByClassName("disappear");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'none';
    }
    document.getElementById("circle").style.display = 'block';
    document.getElementById("outC").style.display = 'block';
    document.getElementById("body").style.backgroundImage = "none";
    document.getElementById("menu").style.display = "flex";
    document.getElementById("instructions").style.display = 'table';

    if (type === 0) {
        console.log('8 minute sleep session initiated')
        initiate(8);
        window.timeW = 8;
    }

    else if (type === 1) {
        console.log('20 minute sleep session initiated')
        initiate(20);
        window.timeW = 20;
    }
}

async function end() {
    const collection = document.getElementsByClassName("disappear");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block';
    }
    document.getElementById("circle").style.display = 'none';
    document.getElementById("outC").style.display = 'none';
    document.getElementById("body").style.backgroundImage = 'url("static/images/stars.svg")';
    document.getElementById("menu").style.display = "none";
    exitFullscreen();
}

function timer(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// const timer = ms => new Promise(res => setTimeout(res, ms))

async function initiate(time) {
    document.getElementById("instructions").style.display = 'table';
    const currentText = $('#alternating').text();
    console.log(currentText)
    const deafultText = "hi";
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('hi');
        $("#alternating").delay(0).fadeIn("slow");
    });
     await timer(3000)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('just follow the bubble');
        $("#alternating").delay(750).fadeIn("slow");
    });
     await timer(3000)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('inhaling as it expands');
        $("#alternating").delay(750).fadeIn("slow");
    });
    await timer(4000)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('and exhaling as it shrinks');
        $("#alternating").delay(750).fadeIn("slow");
    });
    await timer(4000)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('3');
        $("#alternating").delay(750).fadeIn("slow");
    });
    await timer(1750)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('2');
        $("#alternating").delay(750).fadeIn("slow");
    });
    await timer(1750)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('1');
        $("#alternating").delay(750).fadeIn("slow");
    });
    await timer(1750)
    $("#alternating").fadeOut("slow", function () {
        $('#alternating').text('');
        $("#alternating").delay(750).fadeIn("slow");
    });
    await timer(500)
    document.getElementById("instructions").style.display = 'none';

    beatLength = 5.546
    document.getElementById("circle").style.animationDuration = (String(beatLength) + "s");

    if (time === 8) {
        var arrReps = [11, 9, 9, 8, 7, 6, 5, 5, 4, 4]
        for (let i = 0; i < arrReps.length; i++) {
            for (let j = 0; j < arrReps[i]; j++) {
                docVal = (String(beatLength) + "s");
                document.getElementById("circle").style.animationDuration = docVal;
                await timer(beatLength * 1000);
            }
            beatLength = beatLength * 1.07;
        }
    }

    else if (time === 20) {
        var arrReps = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 4]
        for (let i = 0; i < arrReps.length; i++) {
            for (let j = 0; j < arrReps[i]; j++) {
                docVal = (String(beatLength) + "s");
                document.getElementById("circle").style.animationDuration = docVal;
                await timer(beatLength * 1000);
            }
            beatLength = beatLength * 1.038;
        }
    }
    end()
}

async function restart() {
    console.log(window.timeW);
    initiate(window.timeW);
}

async function halt() {
    const collection = document.getElementsByClassName("disappear");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block';
    }
    document.getElementById("circle").style.display = 'none';
    document.getElementById("outC").style.display = 'none';
    document.getElementById("body").style.backgroundImage = 'url("static/images/stars.svg")';
    document.getElementById("menu").style.display = "none";
    document.getElementById("instructions").style.display = 'none';
    exitFullscreen();
}



function launchFullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}