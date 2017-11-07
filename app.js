const express = require('express')
const app = express();
const morgan = require('morgan')

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

// morgan(function (tokens, req, res) {
//  return [
//    tokens.method(req, res),
//    tokens.url(req, res),
//    tokens.status(req, res),
//    tokens.res(req, res, 'content-length'), '-',
//    tokens['response-time'](req, res), 'ms'
//  ].join(' ')
// })

app.use(morgan('dev'))

// app.use(function (req, res, next) {
//   console.log(req.method + ' ' + req.originalUrl + ' ' + res.statusCode);
// })

app.get('/news', (req, res) => {

})



console.log('hello')

console.log('another hello')
