import express from "express";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  const today = new Date().getDay();

  let type = " a weekend";
  let adv = "it's time to have fun!";

  if (today === 0 || today === 6) {
    type = "a weekday";
    adv = "it's time to work hard";
  } 
  res.render("index.ejs", {
    dayType: type,
    advice: adv,
});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});