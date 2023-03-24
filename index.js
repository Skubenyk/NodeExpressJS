//!Add, delete folder and file
// const fs = require('fs');

//?Add folder, file and write text in file
// fs.mkdirSync('text-files');

// fs.mkdir('text-files', () => {
//   fs.writeFile('./text-files/some.txt', 'Hello!', () => {})
// });

//?Delete file and then folder
// fs.unlink('./text-files/some.txt', () => {
//   fs.rmdir('./text-files', () => {})
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!Create server with Node.js
// const http = require('http');
// const fs = require('fs');

// let server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

//   if (req.url == '/')
//     fs.createReadStream('./templates/index.html').pipe(res);
//   else if (req.url == '/about')
//     fs.createReadStream('./templates/about.html').pipe(res);
//   else
//     fs.createReadStream('./templates/error.html').pipe(res);
// });

// const PORT = 3000;
// const HOST = 'localhost';

// server.listen(PORT, HOST, () => {
//   console.log(`Сервер запущений: http://${HOST}:${PORT}`);
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//!Create app with Express.js
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//?Робота з файлами HTML і текстом
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/about', (req, res) => {
//   res.send('About');
// });

// app.get('/user/:username/:id', (req, res) => {
//   res.send(`User ID: ${req.params.id}, Username: ${req.params.username}`);
// });

//?Робота з шаблонізатором
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/user/:username', (req, res) => {
  let data = {
    username: req.params.username,
    hobbies: ['Football', 'Tenis', 'Volleyball'],
  };
  res.render('user', data);
});

app.post('/check-user', (req, res) => {
  let username = req.body.username;
  if (username == '') 
    return res.redirect('/');
  else
    return res.redirect('/user/' + username)
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started: http://localhost:${PORT}`);
});
