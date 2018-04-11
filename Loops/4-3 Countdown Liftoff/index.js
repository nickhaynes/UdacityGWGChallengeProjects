/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

var tTime = 60;

while (tTime >= 0) {
    if (tTime === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else if (tTime === 6) {
        console.log("Main engine start");
    } else if (tTime === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (tTime === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (tTime === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (tTime === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else {
        console.log("T-" + tTime + " seconds");
    }
    tTime = tTime - 1;
}
