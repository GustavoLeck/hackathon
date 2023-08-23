import express from "express";
import status from "./routes/service-status-route.js";
import distance from "./routes/consult-distance-route.js"

console.clear();
const server = express();
server.use(
    express.urlencoded({
        extended: true,
    })
);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
const port = 3050;

server.listen(port, async () => {
    server.use("/api", status);
    server.use("/api", distance);
    console.log("--SERVER ON--");
}) 