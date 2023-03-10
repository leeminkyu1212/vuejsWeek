//로그의 레벨 6
//error ,warn ,info ,http,verbose,debug,silly
//error warn info debug 많이 쓴다
//error:에러는 나ㅟ닫
//warn:내용
//info:내용
//debug:상세한 데이터들

const express = require("express");
const morgan = require("morgan");
const { prototype } = require("winston-transport");
const logger = require("./utils/log");
const cors = require("cors");
const PORT = 8080;
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//원격 로그 수짐 시스템(elastic stack)
//여러 군데 모여있는 로그를 한군데서 조회하고 싶은 경우

app.use(express.static(__dirname + "/views"));
const fs = require("fs");
app.get("/api/logs", (req, res) => {
  //debug가 안찍히는 이유: winston세팅에서 level을 info로 한정했기 때문
  return res.json({
    test: "OK",
  });
});
app.post("api/logs", (req, res) => {
  logger.error("errror 메세지");
  logger.warn("warn 메세지");
  logger.info("info 메세지");
  logger.info("http 메세지");
  logger.debug("debug 메세지");
  fs.readFile("./logs/2023-03-10-12.log", "utf-8", (err, data) => {
    retData = data;
    let idx = -1;
    while (1) {
      idx = retData.indexOf("}", idx + 1);
      if (idx == -1) {
        break;
      }
      retData = insert(retData, idx + 1, ",");
    }
    retData = "[" + retData.slice(0, retData.length - 3) + "]";
    retData = JSON.parse(retData);
    console.log(retData);
  });
  return res.json({
    success:true,
  })
});
app.listen(PORT, () => console.log(`${PORT} 서버 가동중`));
