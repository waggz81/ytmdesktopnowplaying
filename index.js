const io = require('socket.io-client');
const server = "http://localhost:9863";
const socket = io(server);
const fs = require('fs');
const filename = "nowplaying.txt";

socket.on("connect", () => {
    console.log("connected");
});

socket.on("disconnect", () => {
    console.log("disconnected");
});

socket.on("tick", (data) => {
    let format = "'" + data.track.title + "' by " + data.track.author + ' '.repeat(15);
    fs.writeFile(filename, format, (err) => {
        if (err) throw err;
    });
});