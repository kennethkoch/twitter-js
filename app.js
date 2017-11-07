'use strict'
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const routes = require('./routes');


app.use(routes);

const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank');

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

// // morgan(function (tokens, req, res) {
// //  return [
// //    tokens.method(req, res),
// //    tokens.url(req, res),
// //    tokens.status(req, res),
// //    tokens.res(req, res, 'content-length'), '-',
// //    tokens['response-time'](req, res), 'ms'
// //  ].join(' ')
// // })

// app.use(morgan('dev'));

app.use(function (req, res, next) {
  console.log(req.method + ' ' + req.originalUrl + ' ' + res.statusCode);
})

// app.set('views', __dirname + '/views')

// app.get('/news', (req, res) => {

// });

// var locals = {
//   title: 'An Example',
//   people: [{
//       name: 'Gandalf'
//     },
//     {
//       name: 'Frodo'
//     },
//     {
//       name: 'Hermione'
//     }
//   ]
// };

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

nunjucks.configure('views', {
  noCache: true
});

// // Different way to render HTML
// // app.get('/views', (req, res) => {
// //   nunjucks.render('index.html', locals, function (err, output) {
// //     res.send(output);
// //     // console.log(output)
// //   });
// // });

// app.get('/views', (req, res) => {
//   const people = [{
//     name: 'Full'
//   }, {
//     name: 'Stacker'
//   }, {
//     name: 'Son'
//   }];
//   res.render('index', {
//     title: 'Hall of Fame',
//     people: people
//   });
// });

// console.log(tweetBank.find());
