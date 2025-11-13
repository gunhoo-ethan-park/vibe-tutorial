const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🔥 바이브코딩 서버 작동 중!");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from VS Code!" });
});

app.listen(3000, () => {
  console.log("🚀 서버 실행 중 → http://localhost:3000");
});

app.get("/test", (req, res) => {
  res.json({ message: "테스트 성공! 을 테스트함", time: new Date() });
});
