const express = require("express");
const app = express();
app.set("view engine", "ejs");
//app.use(express.json());
const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};
app.get("/", (req, res) => {
  const today = new Date();
  const DayNum = today.getDay();

  res.render("list", { ejsDay: days[DayNum] });
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
