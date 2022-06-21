import NoSleep from '/scripts/nosleep.min';

var noSleep = new NoSleep();

// const timer = ms => new Promise(res => setTimeout(res, ms))

export function enableNoSleep(time) {
    noSleep.enable();
    console.log('enabled')
    // await timer(time);
    noSleep.disable();
}