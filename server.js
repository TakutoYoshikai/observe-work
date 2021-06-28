const express = require("express");
const app = express();
const cron = require("node-cron");
const fs = require("fs");

let records = {}

cron.schedule("0 0 * * *", () => {
  saveLog();
});

function saveLog() {
  const now = new Date();
  const logName = "logs/log-" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  const data = JSON.stringify(records);
  fs.writeFile(logName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    records = {};
  });
}

app.get("/:id/:count", (req, res) => {
  const id = req.params.id;
  const count = parseInt(req.params.count);
  const now = new Date();
  if (!(id in records)) {
    records[id] = {};
  }
  records[id][now.toISOString()] = count;
});

app.listen(3000);
