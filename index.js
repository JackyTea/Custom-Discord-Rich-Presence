/*
    Discord Custom Rich Presence
    Author: Jacky Tea

    Custom status for your Discord profile.
    Please read the README.md file for usage details.
*/

//user set parameters
const clientID = process.argv[2] || ""; //required
const description = process.argv[3] || ""; //required
const largeImageName = process.argv[4] || "";
const largeImageDescription = process.argv[5] || "";
const smallImageName = process.argv[6] || "";
const smallImageDescription = process.argv[7] || "";
const stateDescription = process.argv[8] || "";

//Discord RPC interfacing
const client = require('discord-rich-presence')(clientID);

//timer variables
let timer = min = sec = 0;

//run status
let count = null;
if (process.argv.length > 6) {
    count = setInterval(timerCounter, 1000);
    console.log("Rich presence running...");
} else {
    console.log("Not enough arguments!");
    process.exit(1);
}

//show elapsed time and custom status
function timerCounter() {
    min = parseInt(timer / 60, 10);
    sec = parseInt(timer % 60, 10);

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    timer++;

    client.updatePresence({
        state: stateDescription != "" ? stateDescription : min + ":" + sec + " elapsed.",
        details: description,
        startTimestamp: '',
        endTimestamp: '',
        largeImageKey: largeImageName,
        largeImageText: largeImageDescription,
        smallImageKey: smallImageName,
        smallImageText: smallImageDescription,
        instance: true,
    });
}