import express from 'express';
const app = express();
const port = 3000;

app.get('/', function (req, res) {
    console.log(req.rawHeaders);
    res.send('<h1>Hello</h1>')
  })

app.get('/about/', function (req, res) {
console.log(req.rawHeaders);
res.send('<h1>My name is momo</h1>')
})


app.get('/contact/', function (req, res) {
console.log(req.rawHeaders);
res.send('<h1>999 999 999</h1>')
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

