var express = require("express");
var app = express();

app.set("trust proxy", "loopback");
app.all("/api/:method", function(req, res) {
  res.json({ status: "ok", payload: { message: "hello there" } });
  console.log(req.params.method);
});
app.all("*", (req, res) => res.sendFile("./index.html", { root: "./" }));

app.listen(process.env.PORT || 3000);
