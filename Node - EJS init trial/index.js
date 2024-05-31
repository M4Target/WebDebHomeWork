import express from 'express';
const app = express();
const port = 3000;
const dayIndex = (new Date()).getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekOfDay = days[dayIndex];

let dayT = "";
let adv = "";

if (weekOfDay === 'Sunday' || weekOfDay === 'Saturday'){
  dayT = "a weekend";
  adv = "It's time to have fun!";
} else {
  dayT = "a weekday";
  adv = "It's time to work hard!";
}

app.get("/", (req, res) => {
  res.render("index.ejs",{
    dayType: dayT,
    advice: adv
    });
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

