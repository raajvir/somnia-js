function play(type) {
    if (type === 0) {
        console.log('8 minute sleep session initiated')
        location.href = "play.html";
        initiate(8);
    }

    else if (type === 1) {
        console.log('20 minute sleep session initiated')
        location.href = "play.html";
        initiate(20);
    }
}

function initiate(time) {
    console.log('ejasdf');
    // var timeSeconds = 60 * time;
    document.getElementById("circle").style.backgroundColor = "black";
}