const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/log");
const app = express();
app.use(morgan("dev"));
const PORT = 8080;

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(express.static(__dirname + "/views"));

const fs = require("fs");

app.get("/api/logs", (req, res) => {
  logger.error("error 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  logger.http("http 메세지");
  logger.debug("debug 메세지");
  fs.readFile("./logs/2023-03-10-15.log", "utf-8", (err, data) => {
    const datalines = data.split('\r\n').slice(0,-1);
    const datajson = datalines.map((data)=>JSON.parse(data));
    console.log(datajson);
    return res.json(datajson);
  });
});

app.listen(PORT, () => console.log(`${PORT} 서버 가동 중`));