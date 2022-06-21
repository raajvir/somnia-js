/* import NoSleep from '/scripts/nosleep.js';

var noSleep = new NoSleep(); */

function play(type) {
    // document.getElementsByClassName("disappear").style.display = 'none';
    const collection = document.getElementsByClassName("disappear");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'none';
    }
    document.getElementById("circle").style.display = 'block';

    if (type === 0) {
        console.log('8 minute sleep session initiated')
        // enableNoSleep(8*60*1000);
        timer(8);
        initiate(8);
    }

    else if (type === 1) {
        console.log('20 minute sleep session initiated')
        // enableNoSleep(20*60*1000);
        timer(20);
        initiate(20);
    }
}

function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))

async function timekeeper(time) {
    var timeSeconds = 60 * time;
    console.log(timeSeconds)
    await timer(timeSeconds)

    const collection = document.getElementsByClassName("disappear");
    for (let i = 0; i < collection.length; i++) {
        collection[i].style.display = 'block';
    }
    document.getElementById("circle").style.display = 'none';
}

async function initiate(time) {
    beatLength = 5.546
    document.getElementById("circle").style.animationDuration = (String(beatLength) + "s");

    /*     nOfBeats = timeSeconds/((10+5.546)/2)
        console.log(nOfBeats)
        for (let i = 0; i < (nOfBeats); i++) {
            console.log(i)
            beatLength = beatLength + (beatLength * 1/nOfBeats)
            console.log(beatLength)
        } */

    if (time === 8) {
        var arrReps = [11, 9, 9, 8, 7, 6, 5, 5, 4, 4]
        for (let i = 0; i < arrReps.length; i++) {
            // console.log(beatLength)
            for (let j = 0; j < arrReps[i]; j++) {
                docVal = (String(beatLength) + "s");
                document.getElementById("circle").style.animationDuration = docVal;
                console.log(docVal);
                await timer(beatLength * 1000);
            }
            // beatLength = beatLength + (beatLength * 10 / 100);
            beatLength = beatLength * 1.07;
        }
    }

    else if (time === 20) {
        var arrReps = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 4]
        for (let i = 0; i < arrReps.length; i++) {
            // console.log(beatLength)
            for (let j = 0; j < arrReps[i]; j++) {
                docVal = (String(beatLength) + "s");
                document.getElementById("circle").style.animationDuration = docVal;
                console.log(docVal);
                await timer(beatLength * 1000);
            }
            // beatLength = beatLength + (beatLength * 10 / 100);
            beatLength = beatLength * 1.038;
        }
    }
    // noSleep.disable();
}